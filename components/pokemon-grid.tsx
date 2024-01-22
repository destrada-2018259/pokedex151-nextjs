"use client"
import { useState } from "react"
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { PokemonCard } from "./pokemon-card";

interface PokemonGridProps{
    pokemonList: any
}

export function PokemonGrid({pokemonList} : PokemonGridProps){

    const [searchText, setSearchText] = useState("");

    console.log(pokemonList);


    return(
        <>
            <div>
                <h3 className="text-2x1 py-6 text-center" >Search for your Pokemon!</h3>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="pokemonName">Pokemon Name</Label>
                        <Input
                            type="text"
                            value={searchText}
                            autoComplete="off"
                            id="pokemonName"
                            placeholder="Charizard, Pikachu, etc."
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                </div>
                <h3 className="text-3x1 pt-12 pb-6 text-center">Pokemon Collection</h3>
            </div>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
                {pokemonList.map((pokemon: any) =>{
                    return(
                        <PokemonCard name={pokemon.name} />
                    )
                })}
        
            </div>
        </>
    )

}