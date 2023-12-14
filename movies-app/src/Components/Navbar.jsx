import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <div className="flex items-center p-1">
            <img className="h-20 mx-6" src="https://static.thenounproject.com/png/780122-200.png" alt="" />
            <Link className="text-3xl mx-3 text-blue-500 font-bold underline" to={"/"}>Movies</Link>
            <Link className="text-3xl mx-3 text-blue-500 font-bold underline" to={"/Watchlist"}>Watchlist</Link>
        </div>
    )
}