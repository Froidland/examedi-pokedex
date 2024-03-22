"use client";

import PokemonList from "@/components/PokemonList";
import bg from "./bg.png";
import { getPokemonList } from "@/lib/pokemon";
import type { PokemonListResult } from "@/lib/types";
import { useEffect, useState } from "react";
// https://pokeapi.co/docs/v2

export default function Home() {
	const [pokemonList, setPokemonList] = useState<PokemonListResult[]>([]);
	const [offset, setOffset] = useState<number>(0);

	function handleLoadMorePokemon() {
		getPokemonList(12, offset).then((data) => {
			if (data) {
				setPokemonList([...pokemonList, ...data.results]);
				setOffset(offset + 12);
			}
		});
	}

	useEffect(() => {
		getPokemonList(12, 0).then((data) => {
			if (data) {
				setPokemonList(data.results);
				setOffset(12);
			}
		});
	}, []);

	return (
		<main
			className="flex w-full justify-center pb-40"
			style={{ backgroundImage: `url(${bg.src})` }}
		>
			<div className="w-[900px] px-8 pb-4 bg-white rounded-lg">
				<PokemonList data={pokemonList} />
				<div className="flex w-full justify-center pt-20">
					{offset ? (
						<button
							onClick={handleLoadMorePokemon}
							className="py-2 px-4 text-white rounded bg-[#30A7D7] hover:bg-[#1b82b1]"
						>
							Cargar más Pokémon
						</button>
					) : null}
				</div>
			</div>
		</main>
	);
}
