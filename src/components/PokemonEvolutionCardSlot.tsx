import type { Pokemon } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import { capitalize } from "@/lib/utils";
import PokemonTypeChip from "./PokemonTypeChip";

export default function PokemonEvolutionCardSlot({
	pokemon,
	key,
}: {
	pokemon: Pokemon;
	key: number;
}) {
	return (
		<Link
			href={`/pokemon/${pokemon.id}`}
			key={key}
			className="flex flex-col items-center gap-3"
		>
			<Image
				src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id
					.toString()
					.padStart(3, "0")}.png`}
				alt={`An image of ${pokemon.name}`}
				className="border-white border-[5px] rounded-full p-2 bg-[#616161] shadow-md shadow-gray-900"
				width={160}
				height={160}
			></Image>
			<div className="flex flex-col gap-3">
				<div>
					<span className="text-white text-xl">{capitalize(pokemon.name)}</span>{" "}
					<span className="text-[#a4acaf] text-xl">
						N.° {pokemon.id.toString().padStart(4, "0")}
					</span>
				</div>
				{/* There might be a better solution for this */}
				{pokemon.types.length == 1 ? (
					<div className="flex justify-center">
						{pokemon.types.map((type) => (
							<PokemonTypeChip typeName={type.type.name} />
						))}
					</div>
				) : (
					<div className={`grid grid-cols-${pokemon.types.length} gap-1`}>
						{pokemon.types.map((type) => (
							<PokemonTypeChip typeName={type.type.name} />
						))}
					</div>
				)}
			</div>
		</Link>
	);
}
