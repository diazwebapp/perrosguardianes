import Link from "next/dist/client/link"
import { useRouter } from "next/dist/client/router"
import { useContext } from "react"
import GlobalAppContext from "../context/context"

export const Footer = () => {
    const {app,app_dispatch} = useContext(GlobalAppContext)
    const {back} = useRouter()
    return (
           <div className="toolbar" >
               <div className="nav_controls">

                    <Link href="/">
                        <a href="/" title="diaz web app">home</a>
                    </Link>
                    <button onClick={()=>{app_dispatch({type:"swich_menu",payload:!app.menu_state})}} >☰</button>

                    <button onClick={()=>back()} >⇠</button>

                </div>
                <p className="creditos" >Sitio creado por <a target="new" href="http://diazweb.website" >Diaz web app</a> el mejor sitio de <a target="blank" href="http://diazweb.website/servicios/desarrollo-web">desarrollo web desarrollo web</a></p>
           </div>
    )
}