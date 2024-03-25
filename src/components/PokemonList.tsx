import type { NamedAPIResource } from "@/lib/types";
import PokemonCard from "./PokemonCard";

const pokemonIdRegex = /https:\/\/pokeapi.co\/api\/v2\/pokemon\/(\d+)\//;

function getPokemonIdFromUrl(url: string) {
	const match = pokemonIdRegex.exec(url);
	if (match) {
		return +match[1];
	}

	return null;
}

export default function PokemonList({ data }: { data: NamedAPIResource[] }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{data.map((pokemon, index) => (
				<PokemonCard
					key={index}
					name={pokemon.name}
					pokemonId={getPokemonIdFromUrl(pokemon.url) || index}
				/>
			))}
		</div>
	);
}
