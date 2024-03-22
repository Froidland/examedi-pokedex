import type { Pokemon, PokemonList } from "./types";

const API_BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemon(id: number): Promise<Pokemon | null> {
	let res;
	try {
		res = await fetch(`${API_BASE_URL}/pokemon/${id}`);
	} catch (err) {
		console.error(err);
		return null;
	}

	if (!res.ok) {
		console.error(res.statusText);
		return null;
	}

	let data;
	try {
		data = await res.json();
	} catch (err) {
		console.error(err);
		return null;
	}

	return data;
}

export async function getPokemonList(
	limit: number,
	offset: number
): Promise<PokemonList | null> {
	let res;
	try {
		res = await fetch(
			`${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
		);
	} catch (err) {
		console.error(err);
		return null;
	}

	if (!res.ok) {
		console.error(res.statusText);
		return null;
	}

	let data;
	try {
		data = await res.json();
	} catch (err) {
		console.error(err);
		return null;
	}

	return data;
}
