export default function PokemonInfoCardColumn({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="flex flex-col gap-y-2">{children}</div>;
}
