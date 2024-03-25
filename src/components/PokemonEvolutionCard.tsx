import bgGray from "@/assets/bg_gray.png";
import {
	flattenEvolutionChainNames,
	getPokemonByName,
	getPokemonEvolutionChainById,
	getPokemonSpeciesByName,
} from "@/lib/pokemon";
import type { Pokemon } from "@/lib/types";
import PokemonEvolutionCardSlot from "./PokemonEvolutionCardSlot";

const evolutionChainIdRegex =
	/^https:\/\/pokeapi\.co\/api\/v2\/evolution-chain\/(\d+)\/?$/;

export default async function PokemonEvolutionCard({
	pokemon,
}: {
	pokemon: Pokemon;
}) {
	const pokemonSpecies = await getPokemonSpeciesByName(pokemon.name);

	if (!pokemonSpecies) {
		return null;
	}

	const evolutionChainId = evolutionChainIdRegex.exec(
		pokemonSpecies.evolution_chain.url
	)?.[1];

	if (!evolutionChainId) {
		return null;
	}

	const evolutionChain = await getPokemonEvolutionChainById(+evolutionChainId);

	if (!evolutionChain) {
		return null;
	}

	const evolutionNames = flattenEvolutionChainNames(evolutionChain);
	const evolutionPokemons = await getPokemonByName(evolutionNames);

	if (!evolutionPokemons) {
		return null;
	}

	return (
		<div
			className="bg-transparent p-6 rounded"
			style={{ backgroundImage: `url(${bgGray.src})` }}
		>
			<div className="flex flex-col">
				<span className="text-white text-xl">Evoluciones</span>
				{evolutionPokemons.length < 2 && (
					<span className="text-white">Este pokemon no evoluciona.</span>
				)}
			</div>
			{/* prettier-ignore */}
			<div className={`grid grid-cols-${evolutionPokemons.length} ${evolutionPokemons.length < 3 ? "mx-28" : ""} gap-4 pt-4`}>
				{evolutionPokemons.map((pokemon, index) => (
					<PokemonEvolutionCardSlot pokemon={pokemon} key={index} />
				))}
			</div>
		</div>
	);
}
