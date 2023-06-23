const URL = 'https://pokeapi.co/api/v2'

export const getPokemon = async (name) => {
    try {
        const response = await fetch(`${URL}/pokemon/${name}`)
        const data = await response.json()

        return data
    } catch (error) {
        return null        
    }
}