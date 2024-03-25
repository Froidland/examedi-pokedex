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
	abilities: {
		is_hidden: boolean;
		slot: number;
		ability: NamedAPIResource;
	}[];
	base_experience: number;
	cries: {
		latest: string;
		legacy: string;
	};
	forms: NamedAPIResource[];
	game_indices: {
		game_index: string;
		version: NamedAPIResource;
	}[];
	height: number;
	held_items: unknown[];
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	moves: {
		move: NamedAPIResource;
		version_group_details: {
			level_learned_at: number;
			move_learn_method: NamedAPIResource;
			version_group: NamedAPIResource;
		}[];
	}[];
	name: string;
	order: number;
	past_abilites: unknown[];
	past_types: unknown[];
	species: NamedAPIResource;
	sprites: unknown;
	stats: {
		base_stat: number;
		effort: number;
		stat: NamedAPIResource;
	}[];
	types: {
		slot: number;
		type: NamedAPIResource;
	}[];
	weight: number;
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
	evolution_chain: {
		url: string;
	};
	evolves_from_species: unknown;
	flavor_text_entries: {
		flavor_text: string;
		language: NamedAPIResource;
		version: NamedAPIResource;
	}[];
	form_descriptions: any[];
	forms_switchable: boolean;
	gender_rate: number;
	genera: {
		genus: string;
		language: NamedAPIResource;
	}[];
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
	names: {
		language: NamedAPIResource;
		name: string;
	}[];
	order: number;
	pal_park_encounters: {
		area: NamedAPIResource;
		base_score: number;
		rate: number;
	}[];
	pokedex_numbers: {
		entry_number: number;
		pokedex: NamedAPIResource;
	}[];
	shape: NamedAPIResource;
	varieties: {
		is_default: boolean;
		pokemon: NamedAPIResource;
	}[];
};

export interface PokemonEvolutionChain {
	baby_trigger_item: unknown;
	chain: EvolutionChain;
	id: number;
}

export interface EvolutionChain {
	evolution_details: {
		gender: unknown;
		held_item: unknown;
		item: unknown;
		known_move: unknown;
		known_move_type: unknown;
		location: unknown;
		min_affection: unknown;
		min_beauty: unknown;
		min_happiness: unknown;
		min_level: number;
		needs_overworld_rain: boolean;
		party_species: unknown;
		party_type: unknown;
		relative_physical_stats: unknown;
		time_of_day: string;
		trade_species: unknown;
		trigger: NamedAPIResource;
		turn_upside_down: boolean;
	}[];
	evolves_to: EvolutionChain[];
	is_baby: boolean;
	species: NamedAPIResource;
}
