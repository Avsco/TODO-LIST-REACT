import { useStoreTodo } from "../store/todos"

export const PokemonItem = (pokemon) => {
    const todos = useStoreTodo(state => state.todos)

    return <>
    {JSON.stringify(todos)}
        {/* {JSON.stringify(pokemon)} */}
    </>
}