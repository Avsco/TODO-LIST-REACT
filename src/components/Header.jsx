import { Link } from "react-router-dom"

export const Header = () => {
    return <>
    <Link style={{marginRight: 16}} to={`/`}>HOME</Link>
    <Link style={{marginRight: 16}} to={`/todo`}>TODOS</Link>
    <Link to={`/pokemon`}>POKEMONS</Link>
    </>
}