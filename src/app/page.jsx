"use client";

import { useState, useEffect } from "react";
import { getAllPokemons } from "./api/pokemon";
import Image from "next/image";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const allPokemons = await getAllPokemons();
      setPokemons(allPokemons);
    };

    fetchPokemons();
  }, []);

  return (
    <div>
      <h1>Pokemons:</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Image
              src={pokemon.sprites}
              alt="Pokemon sprite"
              width={96}
              height={96}
            />
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
