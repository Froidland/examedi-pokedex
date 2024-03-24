import type { Pokemon, PokemonList, Type } from "./types";

const API_BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemonById(id: number): Promise<Pokemon | null> {
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

export const pokemonTypeColors: {
	[key: string]: {
		primaryColor: string;
		secondaryColor?: string;
		textColor: string;
	};
} = {
	bug: {
		primaryColor: "#729F3F",
		textColor: "#fff",
	},
	dark: {
		primaryColor: "#705848",
		textColor: "#fff",
	},
	dragon: {
		primaryColor: "#53A4CF",
		secondaryColor: "#F16E57",
		textColor: "#fff",
	},
	electric: {
		primaryColor: "#EED535",
		textColor: "#212121",
	},
	fairy: {
		primaryColor: "#EE99AC",
		textColor: "#212121",
	},
	fighting: {
		primaryColor: "#D56723",
		textColor: "#fff",
	},
	fire: {
		primaryColor: "#FD7D24",
		textColor: "#fff",
	},
	flying: {
		primaryColor: "#3DC7EF",
		secondaryColor: "#BDB9B8",
		textColor: "#212121",
	},
	ghost: {
		primaryColor: "#705898",
		textColor: "#fff",
	},
	grass: {
		primaryColor: "#9BCC50",
		textColor: "#212121",
	},
	ground: {
		primaryColor: "#F7DE3F",
		secondaryColor: "#AB9842",
		textColor: "#212121",
	},
	ice: {
		primaryColor: "#51C4E7",
		textColor: "#212121",
	},
	normal: {
		primaryColor: "#A4ACAF",
		textColor: "#212121",
	},
	poison: {
		primaryColor: "#B97FC9",
		textColor: "#fff",
	},
	psychic: {
		primaryColor: "#F366B9",
		textColor: "#fff",
	},
	rock: {
		primaryColor: "#A38C21",
		textColor: "#fff",
	},
	steel: {
		primaryColor: "#9EB7B8",
		textColor: "#212121",
	},
	water: {
		primaryColor: "#4592C4",
		textColor: "#fff",
	},
};

export const pokemonTypeTranslations: {
	[key: string]: string;
} = {
	bug: "Bicho",
	dark: "Siniestro",
	dragon: "Dragón",
	electric: "Eléctrico",
	fairy: "Hada",
	fighting: "Lucha",
	fire: "Fuego",
	flying: "Volador",
	ghost: "Fantasma",
	grass: "Planta",
	ground: "Tierra",
	ice: "Hielo",
	normal: "Normal",
	poison: "Veneno",
	psychic: "Psíquico",
	rock: "Roca",
	steel: "Acero",
	water: "Agua",
};
