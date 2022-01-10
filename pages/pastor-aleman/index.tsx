import Head from 'next/head'
import { useContext, useEffect } from 'react'
import GlobalAppContext from '../../context/context'
import DogCover from '../../components/DogCover'

const Pastoralemán = () => {
    const {app_dispatch} = useContext(GlobalAppContext)
    useEffect(()=>{
        app_dispatch({type:"swich_menu",payload:false})
    },[])
    return <main>
        <Head>
            <title>Pastor alemán - Diaz web app</title>
            <meta name="author" content="diaz web app" />
            <meta name="description" content="El Pastor alemán, un perro dulce y cariñoso, es una buena elección para familias con niños con un comportamiento razonablemente bueno." />

            {/** OG META */}
            <meta property="og:title" content="Pastor alemán - Diaz web app" />
            <meta property="og:site_name" content={'diaz web app'} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="El Pastor alemán, un perro dulce y cariñoso, es una buena elección para familias con niños con un comportamiento razonablemente bueno." />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:url" content={process.env.DOMAIN} />
            <meta property="og:image" content={process.env.DOMAIN + "/imgs/img_DogBreed-German-Shepard.jpg"} />
            <meta property="og:image:secure_url" content={process.env.DOMAIN + "/imgs/img_DogBreed-German-Shepard.jpg"} />
            <meta property="og:image:width" content="320" />
            <meta property="og:image:height" content="240" />
            {/**TWITTER META */}
            <meta name="twitter:title" content="Pastor alemán - Diaz web app" />
            <meta name="twitter:site" content="@diazwebapp" />
            <meta name="twitter:description" content="El Pastor alemán, un perro dulce y cariñoso, es una buena elección para familias con niños con un comportamiento razonablemente bueno." />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={process.env.DOMAIN + "/imgs/img_DogBreed-German-Shepard.jpg"} />
            <meta name="twitter:label1" content="Tiempo de lectura" />
            <meta name="twitter:data1" content="3 minutos" />
            {/**LINK Meta*/}
            <link rel="shortlink" href={process.env.DOMAIN} />
            <link rel="canonical" href={process.env.DOMAIN} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            <meta property="ia:markup_url" content={process.env.DOMAIN} />
        </Head>
        <DogCover 
        title='Pastor alemán'
        text='El Pastor alemán, un perro dulce y cariñoso, es una buena elección para familias con niños con un comportamiento razonablemente bueno. '
        imgalt='Pastor alemán'
        imglink='/imgs/img_DogBreed-German-Shepard.jpg'
        />
        
        <section className='dog_page' >
            
            <article id="caracteristicas" >
                <h2>Caracteristicas del Pastor alemán</h2>
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
                <h2>Pastor alemán temperamento y Personalidad</h2>
                <p>
                    Los pastores alemanes se llevan bien con los niños y otras mascotas si crecen juntos, pero, tienden a dudar de la gente extraña, debido a sus instintos de guardianes.Se considera que esta raza es lista y fácil de adiestrar. Algunos pastores alemanes que no se han criado debidamente pueden ser muy excitables y nerviosos. Una mala socialización y un adiestramiento inadecuado, pueden desencadenar comportamientos de sobreprotección o agresivos.
                </p>
            </article>

            <article>
                <h2>Convivencia</h2>
                <p>
                    Es importante adquirir pastores alemanes de criadores reconocidos ya que como buenos pastores son grandes, poderosos y tienen fuertes instintos guardianes. Los perros criados con malas prácticas tienen más probabilidades de ser nerviosos.
                </p>
                <p>
                    Para evitar un comportamiento agresivo y sobreprotector, es necesario socializar cuidadosamente a los pastores alemanes desde muy jóvenes y adiestrarlos en obediencia. Deben estar con la familia y expuestos a otras personas y mascotas del vecindario bajo supervisión; no deben confinarse en una caseta o un patio ni solos ni con otros perros.
                </p>
                <p>
                    Los pastores alemanes son activos y disfrutan teniendo algo que hacer. Necesitan realizar gran cantidad de ejercicio a diario; de lo contrario, se vuelven nervioso o muy excitables. <br/>
                    Su muda es muy intensa y se produce unas dos veces al año, y el resto del tiempo muda una cantidad menor de forma continua. Para controlar la muda y mantener un pelo bonito, cepíllalo al menos un par de veces a la semana.
                </p>
                
            </article>
            
        </section>        

    </main>
}

export default Pastoralemán