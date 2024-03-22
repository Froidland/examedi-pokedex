import Image from "next/image";

export default function PokemonAvatar({
	pokemonName,
	pokemonId,
	width,
	height,
}: {
	pokemonName: string;
	pokemonId: number;
	width: number;
	height: number;
}) {
	return (
		<Image
			src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId
				.toString()
				.padStart(3, "0")}.png`}
			className="bg-[#F2F2F2] rounded-lg p-2"
			alt={"An image of " + pokemonName}
			width={width}
			height={height}
		></Image>
	);
}
