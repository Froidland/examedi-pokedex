import type { Pokemon } from "@/lib/types";
import type React from "react";
import PokemonStatsGauge from "./PokemonStatsGauge";

export default function PokemonStatsGraph({ pokemon }: { pokemon: Pokemon }) {
	return (
		<div className="list-none bg-[#A4A4A4] rounded-lg px-6 pt-2 pb-5">
			<p className="pt-1 pb-5">Puntos de base</p>
			<div className="grid grid-cols-6 px-2 gap-[6px]">
				<PokemonStatsGauge
					label="PS"
					value={pokemon.stats[0].base_stat}
				></PokemonStatsGauge>
				<PokemonStatsGauge
					label="Ataque"
					value={pokemon.stats[1].base_stat}
				></PokemonStatsGauge>
				<PokemonStatsGauge
					label="Defensa"
					value={pokemon.stats[2].base_stat}
				></PokemonStatsGauge>
				<PokemonStatsGauge
					label="Ataque Especial"
					value={pokemon.stats[3].base_stat}
				></PokemonStatsGauge>
				<PokemonStatsGauge
					label="Defensa Especial"
					value={pokemon.stats[4].base_stat}
				></PokemonStatsGauge>
				<PokemonStatsGauge
					label="Velocidad"
					value={pokemon.stats[5].base_stat}
				></PokemonStatsGauge>
			</div>
		</div>
	);
}
