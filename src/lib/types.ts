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
	game_indices: {
		game_index: string;
		version: NamedAPIResource;
	}[];
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
	types: {
		slot: number;
		type: NamedAPIResource;
	}[];
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
	damage_relations: {
		double_damage_from: NamedAPIResource[];
		double_damage_to: NamedAPIResource[];
		half_damage_from: NamedAPIResource[];
		half_damage_to: NamedAPIResource[];
		no_damage_from: NamedAPIResource[];
		no_damage_to: NamedAPIResource[];
	};
	game_indices: {
		game_index: string;
		version: NamedAPIResource;
	}[];
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

export type PokemonSpecies = {
	base_happiness: number;
	capture_rate: number;
	color: NamedAPIResource;
	egg_groups: NamedAPIResource[];
	evolution_chain: EvolutionChain;
	evolves_from_species: null;
	flavor_text_entries: {
		flavor_text: string;
		language: NamedAPIResource;
		version: NamedAPIResource;
	}[];
	form_descriptions: any[];
	forms_switchable: boolean;
	gender_rate: number;
	genera: Genus[];
	generation: NamedAPIResource;
	growth_rate: NamedAPIResource;
	habitat: NamedAPIResource;
	has_gender_differences: boolean;
	hatch_counter: number;
	id: number;
	is_baby: boolean;
	is_legendary: boolean;
	is_mythical: boolean;
	name: string;
	names: Name[];
	order: number;
	pal_park_encounters: PalParkEncounter[];
	pokedex_numbers: PokedexNumber[];
	shape: NamedAPIResource;
	varieties: Variety[];
};

export type EvolutionChain = {
	url: string;
};

export type Genus = {
	genus: string;
	language: NamedAPIResource;
};

export type Name = {
	language: NamedAPIResource;
	name: string;
};

export type PalParkEncounter = {
	area: NamedAPIResource;
	base_score: number;
	rate: number;
};

export type PokedexNumber = {
	entry_number: number;
	pokedex: NamedAPIResource;
};

export type Variety = {
	is_default: boolean;
	pokemon: NamedAPIResource;
};
