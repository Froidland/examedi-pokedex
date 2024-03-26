"use client";

import PokemonList from "@/components/PokemonList";
import { getPokemonList } from "@/lib/pokemon";
import type { NamedAPIResource } from "@/lib/types";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [pokemonList, setPokemonList] = useState<NamedAPIResource[]>([]);
	const [isNextAvailable, setIsNextAvailable] = useState(true);

	function handleLoadMorePokemon() {
		const offset = +(searchParams.get("offset") || 12);

		getPokemonList(12, offset).then((data) => {
			if (data) {
				setPokemonList([...pokemonList, ...data.results]);
				const currentSearchParams = new URLSearchParams(
					Array.from(searchParams.entries())
				);
				currentSearchParams.set("offset", (offset + 12).toString());

				if (!data.next) {
					setIsNextAvailable(false);
				}

				const search = currentSearchParams.toString();
				const query = search ? `?${search}` : "";
				router.replace(pathname + query, { scroll: false });
			}
		});
	}

	useEffect(() => {
		const offset = +(searchParams.get("offset") || 12);

		getPokemonList(offset, 0).then((data) => {
			if (data) {
				setPokemonList(data.results);
				const currentSearchParams = new URLSearchParams(
					Array.from(searchParams.entries())
				);
				currentSearchParams.set("offset", offset.toString());

				if (!data.next) {
					setIsNextAvailable(false);
				}

				const search = currentSearchParams.toString();
				const query = search ? `?${search}` : "";
				router.replace(pathname + query);
			}
		});
	}, []);

	return (
		<main className="flex w-full justify-center pb-40">
			<div className="w-[900px] px-8 pb-4 bg-white rounded-lg">
				<PokemonList data={pokemonList} />
				<div className="flex w-full justify-center pt-20">
					{isNextAvailable && (
						<button
							onClick={handleLoadMorePokemon}
							className="py-2 px-4 text-white rounded bg-[#30A7D7] hover:bg-[#1b82b1]"
						>
							Cargar más Pokémon
						</button>
					)}
				</div>
			</div>
		</main>
	);
}
