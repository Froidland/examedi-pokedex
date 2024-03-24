import type { NamedAPIResource } from "@/lib/types";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ data }: { data: NamedAPIResource[] }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{data.map((pokemon, index) => (
				<PokemonCard key={index} name={pokemon.name} pokemonId={index + 1} />
			))}
		</div>
	);
}
