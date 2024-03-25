import {
	getPokemonById,
	getPokemonSpeciesByPokemon,
	getPokemonTypeWeaknesses,
	getPokemonTypesByPokemon,
} from "@/lib/pokemon";
import { RedirectType, redirect } from "next/navigation";
import PokemonAvatar from "@/components/PokemonAvatar";
import { capitalize } from "@/lib/utils";
import Image from "next/image";
import RedPokeballIcon from "@/assets/pokeball_red.png";
import BluePokeballIcon from "@/assets/pokeball_blue.png";
import PokemonTypeChip from "@/components/PokemonTypeChip";
import PokemonStatsGauge from "@/components/PokemonStatsGauge";
import PokemonStatsGraph from "@/components/PokemonStatsGraph";
import PokemonInfoCard from "@/components/PokemonInfoCard";
import PokemonInfoCardColumn from "@/components/PokemonInfoCardColumn";
import { MaleSignIcon } from "@/components/icons/MaleSignIcon";
import { FemaleSignIcon } from "@/components/icons/FemaleSignIcon";
import Link from "next/link";
import bgGray from "@/assets/bg_gray.png";
import PokemonTypesSection from "@/components/PokemonTypesSection";
import PokemonEvolutionCard from "@/components/PokemonEvolutionCard";

export default async function PokemonById({
	params,
}: {
	params: { id: string };
}) {
	const pokemon = await getPokemonById(+params.id);

	if (!pokemon) {
		redirect("/", RedirectType.replace);
	}

	return (
		<main className="flex flex-col w-full items-center mt-2">
			<div className="w-[920px] px-4 py-2 bg-white rounded-lg">
				<h1 className="text-4xl text-center pb-16">
					{capitalize(pokemon.name)}{" "}
					<span className="text-gray-500">
						N.° {pokemon.id.toString().padStart(4, "0")}
					</span>
				</h1>
				<div className="grid grid-cols-2 gap-4 mb-16">
					<div className="flex flex-col gap-4">
						<PokemonAvatar pokemonName={pokemon.name} pokemonId={pokemon.id} />
						<PokemonStatsGraph pokemon={pokemon} />
					</div>
					<div>
						<p className="pt-3 pb-5">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
							feugiat sem. {/* API does not provide a description */}
						</p>
						<div className="flex gap-2 pb-6">
							<span className="pr-2">Versiones: </span>{" "}
							{/* API does not provide versions */}
							<Image
								src={BluePokeballIcon.src}
								alt=""
								width={25}
								height={25}
							></Image>
							<Image
								src={RedPokeballIcon.src}
								alt=""
								width={25}
								height={25}
							></Image>
						</div>
						<PokemonInfoCard pokemon={pokemon} />
						<PokemonTypesSection pokemon={pokemon} />
					</div>
				</div>
				<PokemonEvolutionCard pokemon={pokemon} />
				<div className="flex w-full justify-end mt-8">
					<Link
						className="py-3 px-5 bg-[#EE6B2F] hover:bg-orange-700 text-white rounded-lg transition-colors font-semibold"
						href="/"
					>
						Ir a la Pokedex
					</Link>
				</div>
			</div>
		</main>
	);
}
