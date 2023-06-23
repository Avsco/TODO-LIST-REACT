import { useEffect, useState } from "react"

import { PokemonItem } from "../components/PokemonItem"
import { getPokemon } from "../services/api"

export const PokemonPage = () => {
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        getPokemon('ditto').then((pokemon) => {
          setPokemon(pokemon)
        })
    }, [])
    

    return <PokemonItem pokemon={pokemon} />
}