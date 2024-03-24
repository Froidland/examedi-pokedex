export type NamedAPIResource = {
	name: string;
	url: string;
};

export type PokemonList = {
	count: number;
	next: string | null;
	previous: string | null;
	results: NamedAPIResource[];
};

export type Pokemon = {
	abilities: PokemonAbility[];
	base_experience: number;
	cries: {
		latest: string;
		legacy: string;
	};
	forms: PokemonForm[];
	game_indices: GameIndex[];
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
	species: NamedAPIResource;
	sprites: unknown;
	stats: PokemonStat[];
	types: PokemonType[];
	weight: number;
};

export type PokemonAbility = {
	ability: NamedAPIResource;
	is_hidden: boolean;
	slot: number;
};

export type PokemonForm = {
	name: string;
	url: string;
};

export type GameIndex = {
	game_index: number;
	version: NamedAPIResource;
};

export type PokemonMove = {
	move: NamedAPIResource;
	version_group_details: {
		level_learned_at: number;
		move_learn_method: NamedAPIResource;
		version_group: NamedAPIResource;
	}[];
};

export type PokemonStat = {
	base_stat: number;
	effort: number;
	stat: NamedAPIResource;
};

export type PokemonType = {
	slot: number;
	type: NamedAPIResource;
};

export type Type = {
	damage_relations: {
		double_damage_from: NamedAPIResource[];
		double_damage_to: NamedAPIResource[];
		half_damage_from: NamedAPIResource[];
		half_damage_to: NamedAPIResource[];
		no_damage_from: NamedAPIResource[];
		no_damage_to: NamedAPIResource[];
	};
	game_indices: GameIndex[];
	generation: NamedAPIResource;
	id: number;
	move_damage_class: NamedAPIResource;
	moves: NamedAPIResource[];
	name: string;
	names: {
		language: NamedAPIResource;
		name: string;
	}[];
	past_damage_relations: any[];
	pokemon: {
		pokemon: NamedAPIResource;
		slot: number;
	}[];
};
