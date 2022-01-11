import Head from 'next/head'
import { useContext, useEffect } from 'react'
import GlobalAppContext from '../../context/context'
import DogCover from '../../components/DogCover'
import { useRouter } from 'next/dist/client/router'

const Bullmastiff = () => {
    const {app_dispatch} = useContext(GlobalAppContext)
    const {asPath} = useRouter()
    useEffect(()=>{
        app_dispatch({type:"swich_menu",payload:false})
    },[])
    return <main>
        <Head>
            <title>Bullmastiff - Diaz web app</title>
            <meta name="author" content="diaz web app" />
            <meta name="description" content="El Bullmastiff, un perro dulce y cariñoso, es una buena elección para familias con niños con un comportamiento razonablemente bueno." />

            {/** OG META */}
            <meta property="og:title" content="Bullmastiff - Diaz web app" />
            <meta property="og:site_name" content={'diaz web app'} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="El Bullmastiff, un perro dulce y cariñoso, es una buena elección para familias con niños con un comportamiento razonablemente bueno." />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:url" content={process.env.DOMAIN+asPath} />
            <meta property="og:image" content={process.env.DOMAIN + "/imgs/img_DogBreed-Bull-Mastif.jpg"} />
            <meta property="og:image:secure_url" content={process.env.DOMAIN + "/imgs/img_DogBreed-Bull-Mastif.jpg"} />
            <meta property="og:image:width" content="320" />
            <meta property="og:image:height" content="240" />
            {/**TWITTER META */}
            <meta name="twitter:title" content="Bullmastiff - Diaz web app" />
            <meta name="twitter:site" content="@diazwebapp" />
            <meta name="twitter:description" content="El Bullmastiff, un perro dulce y cariñoso, es una buena elección para familias con niños con un comportamiento razonablemente bueno." />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={process.env.DOMAIN + "/imgs/img_DogBreed-Bull-Mastif.jpg"} />
            <meta name="twitter:label1" content="Tiempo de lectura" />
            <meta name="twitter:data1" content="3 minutos" />
            {/**LINK Meta*/}
            <link rel="shortlink" href={process.env.DOMAIN+asPath} />
            <link rel="canonical" href={process.env.DOMAIN+asPath} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            <meta property="ia:markup_url" content={process.env.DOMAIN+asPath} />
        </Head>
        <DogCover 
        title='Bullmastiff'
        text='El Bullmastiff, un perro dulce y cariñoso, es una buena elección para familias con niños con un comportamiento razonablemente bueno. '
        imgalt='Bullmastiff'
        imglink='/imgs/img_DogBreed-Bull-Mastif.jpg'
        />
        
        <section className='dog_page' >
            
            <article id="caracteristicas" >
                <h2>Caracteristicas del Bullmastiff</h2>
                <ul>
                    <li>
                        <b>Rango de peso:</b><p>Machos: 50 - 59 kg, Hembras: 45 - 54 kg</p>
                    </li>
                    <li>
                        <b>Altura a la cruz:</b><p>Machos: 60 - 70 cm, Hembras: 60 - 65 cm</p>
                    </li>
                    <li>
                        <b>Orejas:</b><p>caídas (de forma natural)</p>
                    </li>
                    <li>
                        <b>Ojos:</b><p>entrecerrados</p>
                    </li>
                    <li>
                        <b>Esperanza de vida:</b><p> 8 - 10 años</p>
                    </li>
                    <li>
                        <b>Tendencia a babear:</b> <p>alta</p>
                    </li>
                    <li>
                        <b>Tendencia a roncar:</b> <p>alta</p>
                    </li>
                    <li>
                        <b>Tendencia a ladrar:</b> <p>baja</p>
                    </li>
                    <li>
                        <b>Tendencia a excavar:</b> <p>baja</p>
                    </li>
                    <li>
                        <b>Necesidad de atención/Socialización:</b> <p>moderada</p>
                    </li>
                    <li>
                        <b>Pelo:</b><p>corto,liso</p>
                    </li>
                    <li>
                        <b>Colores:</b><p>rojo, leonado, atigrado</p>
                    </li>
                    <li>
                        <b>Necesidad de aseo general:</b> <p>moderada</p>
                    </li>
                    <li>
                        <b>Criado para:</b><p>Guardián de fincas</p>
                    </li>
                </ul>

            </article>
            
            <article>
                <h2>Bullmastiff temperamento y Personalidad</h2>
                <p>
                    Los bullmastiffs son dulces y cariñosos con los miembros de la familia. Su carácter por lo general calmado y relajado los convierte en buenos perros para familias con niños cuyo comportamiento sea razonablemente bueno. Sin embargo, la actitud relajada del bullmastiff con los miembros de la familia probablemente cambiará cuando intervengan extraños. Estos perros tienden a desconfiar de la gente que no pertenece a la familia.
                </p>
                <p>
                    A pesar de toda esta fidelidad centrada en la familia, el bullmastiff no ingenuo. Puede pensar de forma independiente, por lo que su adiestramiento puede resultar difícil. También puede ser menos tolerante con los miembros animales de la familia que con sus dueños. Debes prestar atención si te planteas incorporar un Bullmastiff a tu familia animal.
                </p>
            </article>

            <article>
                <h2>Convivencia</h2>
                <p>
                    Una familia con un bullmastiff será recompensada con un compañero fiel y cariñoso. Sin embargo, a pesar del carácter generalmente relajado del perro, es imprescindible supervisarlo cuando esté cerca de niños, puesto que es tan grande que podría derribar a un niño involuntariamente. La socialización y el adiestramiento son básicos para convivir con éxito con esta raza. Si se expone al perro al mayor número posible de personas, lugares y situaciones nuevas, especialmente cuando es un cachorro, puede mostrarse menos desconfiando con las visitas y las personas que no conoce. Gracias a su pelo corto su necesidad de aseo es mínima. Su muda es ligera.
                </p>
                <p>
                    Si vas a incorporar un bullmastiff a tu familia, plantéate comprarle un babero, puesto que estos perros tienden a babear bastante. También tienen fama de roncadores. Como ocurre con la mayor parte de las razas muy grandes, no viven tanto como los perros más pequeños. La esperanza de vida media oscila entre los ocho y los diez años.
                </p>
                
            </article>
            
        </section>        

    </main>
}

export default Bullmastiff