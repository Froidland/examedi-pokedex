import ImageWithFallback from "./ImageWithFallback";

export default function PokemonThumbnail({
	pokemonName,
	pokemonId,
	fallback,
}: {
	pokemonName?: string;
	pokemonId: number;
	fallback?: string;
}) {
	return (
		<ImageWithFallback
			src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId
				.toString()
				.padStart(3, "0")}.png`}
			fallback={fallback ? fallback : "https://via.placeholder.com/250"}
			className="bg-[#F2F2F2] rounded-md p-2"
			alt={pokemonName ? "An image of " + pokemonName : "An image of a pokemon"}
			width={250}
			height={250}
		></ImageWithFallback>
	);
}
