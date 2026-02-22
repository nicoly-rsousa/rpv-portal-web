import { NavLink, useLocation } from "react-router-dom";

export interface IMenu {
    routeSelected: string
}
export function Menu() {
    const { pathname } = useLocation()
    const routeSelected = pathname
 

    const selectedCss = 'py-2 px-4 rounded-xl bg-amber-500 text-zinc-50'
    return (
        <nav className="bg-cyan-900 h-16 flex items-center justify-between px-8 text-zinc-100">
            <h1 className="font-serif tracking-tight">Sistema<span className="text-amber-500">.</span></h1>
            <ul className="flex gap-6 font-sans">
                <li className=" hover:text-zinc-50 text-zinc-400 rounded-xl "><NavLink to="/" className={`${routeSelected === '/' ? selectedCss : ''}`}>Início</NavLink></li>
                <li className=" hover:text-zinc-50 text-zinc-400 rounded-xl"><NavLink to="/sobre" className={`${routeSelected === '/TaskMaster' ? selectedCss : ''}`}>TaskMaster</NavLink></li>
                <li className=" hover:text-zinc-50 text-zinc-400 rounded-xl"><NavLink to="/servicos" className={`${routeSelected === '/ConnectHub' ? selectedCss : ''}`}>ConnectHub</NavLink></li>
                <li className=" hover:text-zinc-50 text-zinc-400 rounded-xl"><NavLink to="/portfolio" className={`${routeSelected === '/MoneyFlow' ? selectedCss : ''}`}>MoneyFlow</NavLink></li>
            </ul>
        </nav>
    )
}