export default function PokemonStatsGauge({
	label,
	value,
}: {
	label: string;
	value: number;
}) {
	if (value > 300) {
		value = 300;
	}

	const filledSlots = Math.floor(value / 20);

	return (
		<ul className="flex flex-col gap-[4px]">
			{[...Array(15 - filledSlots)].map((_, index) => (
				<li key={index} className="bg-white h-[8px]"></li>
			))}

			{[...Array(filledSlots + 1)].map((_, index) => (
				<li key={index} className="bg-[#30a7d7] h-[8px]"></li>
			))}

			<span className="text-wrap text-center text-xs/3 font-semibold ">
				{label}
			</span>
		</ul>
	);
}
