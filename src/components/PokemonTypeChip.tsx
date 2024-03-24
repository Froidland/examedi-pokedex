import { pokemonTypeColors, pokemonTypeTranslations } from "@/lib/pokemon";

export default function PokemonTypeChip({
	size,
	typeName,
}: {
	size?: Size;
	typeName: string;
}) {
	const type = pokemonTypeColors[typeName] || {
		primaryColor: "#A4ACAF",
		textColor: "#212121",
	};
	const typeText = pokemonTypeTranslations[typeName] || typeName;

	return (
		<span
			className={`${sizeToStyle[size || "sm"]} h-min font-medium text-center `}
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
			{typeText}
		</span>
	);
}

const sizeToStyle = {
	sm: "px-4 py-[0.4px] text-[11px] rounded-[3px]",
	md: "px-5 py-[1px] text-[12px] rounded-md",
	lg: "px-7 py-[2px] text-[14px] rounded-md",
	xl: "px-8 py-[4px] text-[15px] rounded-md",
	"2xl": "px-10 py-[6px] text-[16px] rounded-md",
} as const;

type Size = keyof typeof sizeToStyle;
