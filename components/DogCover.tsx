
import Image from 'next/dist/client/image'
import { placeholder_1 } from './placeholders'

type Props = {
    title:string
    text:string
    imglink:string
    imgalt:string
}
const DogCover = ({title,text,imglink,imgalt}:Props) => {
    return <div className="post_cover">
            <h1>{title}</h1>
            <p>
                {text}
            </p>

            <Image placeholder="blur" blurDataURL={placeholder_1} layout='fill' src={imglink} title={imgalt} alt={imgalt} />

        
        <style jsx>
            {
                `
      .post_cover{
          height:75vh;
          max-height:700px;
          position:relative;
          overflow:hidden;
          display:grid;
          place-items:center;
          place-content:center;
      }
      .post_cover::before{
          content:"";
          top:0;left:0;height:100%;width:100%;
          position:absolute;
          background:var(--shadow-color);
          z-index:1;
      }
      .post_cover h1,.post_cover p{
          color:white;
          position:relative;
          z-index:2;
          max-width:800px;
          text-align:center;
      }
      @media(min-width:720px){
        #caracteristicas ul{
            columns:2;
        }
      }
      @media(min-width:960px){
        #caracteristicas ul{
            columns:3;
        }
      }
      `
            }
        </style>

    </div>
}

export default DogCover