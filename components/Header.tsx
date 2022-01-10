import Link from "next/dist/client/link"
import { useRouter } from "next/dist/client/router"
import { useContext } from "react"
import GlobalAppContext from "../context/context"

export const Header = () => {
    const {app,app_dispatch} = useContext(GlobalAppContext)
    const {back} = useRouter()
    return (
            <div className="toolbar" >
                <Link href="/">
                    <a href="/" title="perros guardianes">Perros Guardianes</a>
                </Link>
                <div className="nav_controls">
                    <Link href="/">
                        <a href="/" title="perros guardianes">home</a>
                    </Link>
                    <button onClick={()=>back()} >⇠</button>
                    <button onClick={()=>{app_dispatch({type:"swich_menu",payload:!app.menu_state})}} >☰</button>
                </div>
            </div>  
    )
}