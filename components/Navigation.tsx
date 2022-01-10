import { useContext } from "react"
import GlobalAppContext from "../context/context"
import Link from "next/dist/client/link"

export const Nav = () => {
    const {app} = useContext(GlobalAppContext)
    return (
            <nav className="nav_app" >
                <div>
                    <Link href="/rottweiler" >
                        <a href="/rottweiler" title='rottweiler' >
                            Rottweiler
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/doberman" >
                        <a href="/doberman" title="doberman">
                            Doberman
                        </a>
                    </Link>
                </div>
                <div>
                <Link href="/bullmastiff" >
                    <a href="/bullmastiff" title="bullmastiff">
                        Bullmastiff
                    </a>
                </Link>
                </div>
                <div>
                <Link href="/pastor-aleman" >
                    <a href="/pastor-aleman" title="pastor aleman">
                        pastor aleman
                    </a>
                </Link>
                </div>
            <style jsx >
                {
                    `
                    nav{
                        position:fixed;
                        z-index:3;
                        top:${app.menu_state?'0':'100vh'};
                    }
                    @media(min-width:720px){
                        nav{
                            position:fixed;
                            z-index:3;
                            top:${app.menu_state?'var(--h-header)':'100vh'};
                        }
                    }
                    `
                }
            </style>
            </nav>  
    )
}