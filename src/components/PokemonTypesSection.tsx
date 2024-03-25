import {
	getPokemonTypeWeaknesses,
	getPokemonTypesByPokemon,
} from "@/lib/pokemon";
import type { Pokemon } from "@/lib/types";
import PokemonTypeChip from "./PokemonTypeChip";

export default async function PokemonTypesSection({
	pokemon,
}: {
	pokemon: Pokemon;
}) {
	const pokemonTypes = await getPokemonTypesByPokemon(pokemon);

	let pokemonWeaknesses;
	if (pokemonTypes) {
		pokemonWeaknesses = getPokemonTypeWeaknesses(pokemonTypes);
	}

	return (
		<div className="flex flex-col gap-4 pt-4">
			<p className="text-xl">Tipo</p>
			<div className="grid grid-cols-3 gap-3">
				{pokemon.types.map((type, index) => (
					<PokemonTypeChip
						key={index}
						typeName={type.type.name}
						size="xl"
					></PokemonTypeChip>
				))}
			</div>
			{pokemonWeaknesses ? (
				<>
					<p className="text-xl">Debilidad</p>
					<div className="grid grid-cols-3 gap-3">
						{pokemonWeaknesses.map((name, index) => (
							<PokemonTypeChip
								key={index}
								typeName={name}
								size="xl"
							></PokemonTypeChip>
						))}
					</div>
				</>
			) : null}
		</div>
	);
}
