import Link from "next/dist/client/link"
import Image from "next/dist/client/image"
import { placeholder_1 } from "./placeholders"

export const Gallery = ()=>{
    
    return (
        <>
        <div className="gallery">
        <div>
          <Link href="/perros-guardianes-no-peligrosos" >
            <a href="/perros-guardianes-no-peligrosos" title='perros guardianes no peligrosos' >
              <Image placeholder="blur" blurDataURL={placeholder_1} width={150} height={150} layout='responsive' src="/imgs/perros_guardianes_no_peligrosos.png" title='perros guardianes no peligrosos' alt='perros guardianes no peligrosos' />
            </a>
          </Link>
        </div>

        <div>
          <Link href="/perros-guardianes-para-fincas" >
            <a href="/perros-guardianes-para-fincas" title='perros guardianes para fincas' >
              <Image placeholder="blur" blurDataURL={placeholder_1} width={150} height={150} layout='responsive' src="/imgs/perros_guardianes_de_fincas.jpg" title='perros guardianes para fincas' alt='perros guardianes para fincas' />
            </a>
          </Link>
        </div>
      </div>

    <style jsx>
      {
        `
        article{
          margin:10px auto;
        }
      .gallery{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        grid-auto-rows:1fr;
        gap:2px;
      }
      .gallery a{
        position:relative;
        overflow:hidden;
      }
      @media(min-width:820px){
        .gallery{
          grid-template-columns:repeat(4,1fr);
          grid-auto-rows:1fr;
        }
      }
      `
      }
    </style>
        </>
    )
}