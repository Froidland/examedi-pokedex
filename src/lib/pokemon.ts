import type {
	Pokemon,
	PokemonEvolutionChain,
	PokemonList,
	PokemonSpecies,
	PokemonType,
} from "./types";

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

export async function getPokemonByName(
	name: string | string[]
): Promise<Pokemon[] | null> {
	const data = [];

	const names = typeof name === "string" ? [name] : name;

	for (const name of names) {
		let res;
		try {
			res = await fetch(`${API_BASE_URL}/pokemon/${name}`);
		} catch (err) {
			console.error(err);
			return null;
		}

		if (!res.ok) {
			console.error(res.statusText);
			return null;
		}

		let json;
		try {
			json = await res.json();
		} catch (err) {
			console.error(err);
			return null;
		}

		data.push(json);
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

export async function getPokemonTypesByName(
	name: string | string[]
): Promise<PokemonType[] | null> {
	const data = [];

	const names = typeof name === "string" ? [name] : name;

	for (const type of names) {
		let res;
		try {
			res = await fetch(`${API_BASE_URL}/type/${type}`);
		} catch (err) {
			console.error(err);
			return null;
		}

		if (!res.ok) {
			console.error(res.statusText);
			return null;
		}

		let json;
		try {
			json = await res.json();
		} catch (err) {
			console.error(err);
			return null;
		}

		data.push(json);
	}

	return data;
}

export async function getPokemonSpeciesByName(
	name: string
): Promise<PokemonSpecies | null> {
	let res;
	try {
		res = await fetch(`${API_BASE_URL}/pokemon-species/${name}`);
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

export async function getPokemonEvolutionChainById(
	id: number
): Promise<PokemonEvolutionChain | null> {
	let res;
	try {
		res = await fetch(`${API_BASE_URL}/evolution-chain/${id}`);
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

export function flattenEvolutionChainNames(
	evolutionChain: PokemonEvolutionChain
): string[] {
	const chain = [];
	let current = evolutionChain.chain;

	while (current) {
		chain.push(current.species.name);
		current = current.evolves_to[0];
	}

	return chain;
}

const baseTypeStats: {
	[key: string]: number;
} = {
	normal: 1,
	fire: 1,
	water: 1,
	electric: 1,
	grass: 1,
	ice: 1,
	fighting: 1,
	poison: 1,
	ground: 1,
	flying: 1,
	psychic: 1,
	bug: 1,
	rock: 1,
	ghost: 1,
	dragon: 1,
	dark: 1,
	steel: 1,
	fairy: 1,
};

export function calculatePokemonTypeWeaknesses(types: PokemonType[]): string[] {
	const weaknesses: string[] = [];
	const base = { ...baseTypeStats };

	for (const type of types) {
		const damageRelations = type.damage_relations;
		for (const doubleDamageFrom of damageRelations.double_damage_from) {
			if (base[doubleDamageFrom.name]) {
				base[doubleDamageFrom.name] *= 2;
			}
		}
		for (const halfDamageFrom of damageRelations.half_damage_from) {
			if (base[halfDamageFrom.name]) {
				base[halfDamageFrom.name] *= 0.5;
			}
		}
		for (const noDamageFrom of damageRelations.no_damage_from) {
			if (base[noDamageFrom.name]) {
				base[noDamageFrom.name] *= 0;
			}
		}
	}

	for (const key in base) {
		if (base[key] > 1) {
			weaknesses.push(key);
		}
	}

	return weaknesses;
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
