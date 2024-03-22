import Link from "next/link";
import PokemonAvatar from "./PokemonAvatar";
import { capitalize } from "@/lib/utils";
import PokemonTypeChip from "./PokemonTypeChip";
import { getPokemon } from "@/lib/pokemon";
import { useEffect, useState } from "react";
import type { Pokemon } from "@/lib/types";

export default function PokemonCard({
	name,
	pokemonId,
}: {
	name: string;
	pokemonId: number;
}) {
	const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);

	useEffect(() => {
		getPokemon(+pokemonId).then((data) => setPokemonData(data));
	}, [pokemonId]);

	return (
		<div className="p-2 flex flex-col items-center mb-6 max-w-64">
			<Link href={`/pokemon/${pokemonId}`}>
				<PokemonAvatar
					pokemonName={name}
					pokemonId={pokemonId}
					width={250}
					height={250}
				/>
			</Link>
			<div className="flex flex-col w-full px-2 pt-1">
				<span className="text-[#919191] text-xs font-bold">
					N.° {pokemonId.toString().padStart(4, "0")}
				</span>
				<span className="text-2xl font-medium pt-3">{capitalize(name)}</span>
				<div className="flex gap-1 py-2 h-4">
					{pokemonData
						? pokemonData.types.map((type, index) => (
								<PokemonTypeChip key={index} typeName={type.type.name} />
						  ))
						: null}
				</div>
			</div>
		</div>
	);
}
