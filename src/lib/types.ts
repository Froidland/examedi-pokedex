export type PokemonList = {
	count: number;
	next: string | null;
	previous: string | null;
	results: PokemonListResult[];
};

export type PokemonListResult = {
	name: string;
	url: string;
};

export type Pokemon = {
	abilities: PokemonAbility[];
	base_experience: number;
	cries: {
		latest: string;
		legacy: string;
	};
	forms: PokemonForm[];
	game_indices: PokemonGameIndex[];
	height: number;
	held_items: unknown[];
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	moves: PokemonMove[];
	name: string;
	order: number;
	past_abilites: unknown[];
	past_types: unknown[];
	species: {
		name: string;
		url: string;
	};
	sprites: unknown;
	stats: PokemonStat[];
	types: PokemonType[];
};

export type PokemonAbility = {
	ability: {
		name: string;
		url: string;
	};
	is_hidden: boolean;
	slot: number;
};

export type PokemonForm = {
	name: string;
	url: string;
};

export type PokemonGameIndex = {
	game_index: number;
	version: {
		name: string;
		url: string;
	};
};

export type PokemonMove = {
	move: {
		name: string;
		url: string;
	};
	version_group_details: {
		level_learned_at: number;
		move_learn_method: {
			name: string;
			url: string;
		};
		version_group: {
			name: string;
			url: string;
		};
	}[];
};

export type PokemonStat = {
	base_stat: number;
	effort: number;
	stat: {
		name: string;
		url: string;
	};
};

export type PokemonType = {
	slot: number;
	type: {
		name: string;
		url: string;
	};
};
