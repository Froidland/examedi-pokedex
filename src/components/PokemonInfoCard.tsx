import type { Pokemon } from "@/lib/types";
import PokemonInfoCardColumn from "./PokemonInfoCardColumn";
import { MaleSignIcon } from "./icons/MaleSignIcon";
import { FemaleSignIcon } from "./icons/FemaleSignIcon";
import { capitalize } from "@/lib/utils";

export default function PokemonInfoCard({ pokemon }: { pokemon: Pokemon }) {
	return (
		<div className="bg-[#30A7D7] rounded-xl py-4 px-6 grid grid-cols-2">
			<PokemonInfoCardColumn>
				<p className="text-white">Altura</p>
				<p className="font-medium text-xl">{pokemon.height / 10} m</p>
				<p className="text-white">Peso</p>
				<p className="font-medium text-xl">{pokemon.weight / 10} kg</p>
				<p className="text-white">Sexo</p>
				<div className="flex gap-2">
					<MaleSignIcon />
					<FemaleSignIcon />
				</div>
			</PokemonInfoCardColumn>
			<PokemonInfoCardColumn>
				<p className="text-white">Categoría</p>
				<p className="font-medium text-xl">
					Unknown {/* API does not provide the category */}
				</p>
				<p className="text-white">Habilidad</p>
				<p className="font-medium text-xl">
					{/* API provides all the abilities, I don't know which one the original pokedex references */}
					{capitalize(pokemon.abilities[0].ability.name)}
				</p>
			</PokemonInfoCardColumn>
		</div>
	);
}
