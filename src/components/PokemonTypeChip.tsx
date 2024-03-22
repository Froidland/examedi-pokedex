export default function PokemonTypeChip({ typeName }: { typeName: string }) {
	const type = types[typeName] || types.default;

	return (
		<span
			className="px-4 h-min rounded-[3px] text-[11px] font-medium text-center"
			style={{
				background:
					"linear-gradient(180deg, " +
					type.primaryColor +
					" 50%, " +
					(type.secondaryColor || type.primaryColor) +
					" 50%)",
				color: type.textColor,
			}}
		>
			{type.translation || typeName}
		</span>
	);
}

const types: {
	[key: string]: {
		primaryColor: string;
		secondaryColor?: string;
		textColor: string;
		translation?: string;
	};
} = {
	default: {
		primaryColor: "#A4ACAF",
		textColor: "#000",
		translation: "Normal",
	},
	bug: {
		primaryColor: "#729F3F",
		textColor: "#fff",
		translation: "Bicho",
	},
	dark: {
		primaryColor: "#705848",
		textColor: "#fff",
		translation: "Siniestro",
	},
	dragon: {
		primaryColor: "#7038F8",
		textColor: "#fff",
		translation: "Dragón",
	},
	electric: {
		primaryColor: "#EED535",
		textColor: "#000",
		translation: "Eléctrico",
	},
	fairy: {
		primaryColor: "#EE99AC",
		textColor: "#000",
		translation: "Hada",
	},
	fighting: {
		primaryColor: "#D56723",
		textColor: "#fff",
		translation: "Lucha",
	},
	fire: {
		primaryColor: "#FD7D24",
		textColor: "#fff",
		translation: "Fuego",
	},
	flying: {
		primaryColor: "#3DC7EF",
		secondaryColor: "#BDB9B8",
		textColor: "#000",
		translation: "Volador",
	},
	ghost: {
		primaryColor: "#705898",
		textColor: "#fff",
		translation: "Fantasma",
	},
	grass: {
		primaryColor: "#78C850",
		textColor: "#000",
		translation: "Planta",
	},
	ground: {
		primaryColor: "#F7DE3F",
		secondaryColor: "#AB9842",
		textColor: "#000",
		translation: "Tierra",
	},
	ice: {
		primaryColor: "#51C4E7",
		textColor: "#000",
		translation: "Hielo",
	},
	normal: {
		primaryColor: "#A4ACAF",
		textColor: "#000",
		translation: "Normal",
	},
	poison: {
		primaryColor: "#B97FC9",
		textColor: "#fff",
		translation: "Veneno",
	},
	psychic: {
		primaryColor: "#F366B9",
		textColor: "#fff",
		translation: "Psíquico",
	},
	rock: {
		primaryColor: "#A38C21",
		textColor: "#fff",
		translation: "Roca",
	},
	steel: {
		primaryColor: "#9EB7B8",
		textColor: "#000",
		translation: "Acero",
	},
	water: {
		primaryColor: "#4592C4",
		textColor: "#fff",
		translation: "Agua",
	},
};
