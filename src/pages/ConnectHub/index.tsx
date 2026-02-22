import { NavLink } from "react-router-dom";

export function ConnectHub() {

    return (
        <>
            <h1>Exemplo de página de ConnectHub</h1>
            <NavLink className='text-xs text-cyan-800 underline' to={'/'}>Link para página inicial</NavLink>
        </>
    )
}