import bgGray from "@/assets/bg_gray.png";
import type { Pokemon } from "@/lib/types";

export default function PokemonEvolutionCard({
	pokemon,
}: {
	pokemon: Pokemon;
}) {
	return (
		<div
			className="bg-transparent p-6 rounded"
			style={{ backgroundImage: `url(${bgGray.src})` }}
		>
			<span className="text-white text-xl">Evoluciones</span>
		</div>
	);
}
