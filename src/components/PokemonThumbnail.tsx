import Image from "next/image";

export default function PokemonThumbnail({
	pokemonName,
	pokemonId,
}: {
	pokemonName?: string;
	pokemonId: number;
}) {
	return (
		<Image
			src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId
				.toString()
				.padStart(3, "0")}.png`}
			className="bg-[#F2F2F2] rounded-md p-2"
			alt={pokemonName ? "An image of " + pokemonName : "An image of a pokemon"}
			width={250}
			height={250}
		></Image>
	);
}
