import Head from 'next/head'
import { useContext, useEffect } from 'react'
import GlobalAppContext from '../../context/context'
import DogCover from '../../components/DogCover'
import Image from 'next/dist/client/image'
import { placeholder_1 } from '../../components/placeholders'
import { useRouter } from 'next/dist/client/router'

const Rottweiler = () => {
    const {app_dispatch} = useContext(GlobalAppContext)
    const {asPath} = useRouter()
    useEffect(()=>{
        app_dispatch({type:"swich_menu",payload:false})
    },[])
    return <main>
        <Head>
            <title>Aprende todo sobre el Rottweiler - Diaz web app</title>
            <meta name="author" content="diaz web app" />
            <meta name="description" content="El rottweiler es una raza canina de tipo molosoide originaria de Alemania, aunque fue también usado en la Antigua Roma y también es conocido como rottweiler americano debido a la certificación recibida por American Kennel Club." />

            {/** OG META */}
            <meta property="og:title" content="Aprende todo sobre el Rottweiler - Diaz web app" />
            <meta property="og:site_name" content={'diaz web app'} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="El rottweiler es una raza canina de tipo molosoide originaria de Alemania, aunque fue también usado en la Antigua Roma y también es conocido como rottweiler americano debido a la certificación recibida por American Kennel Club." />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:url" content={process.env.DOMAIN+asPath} />
            <meta property="og:image" content={process.env.DOMAIN + "/imgs/img_DogBreed-Rottweiler.jpg"} />
            <meta property="og:image:secure_url" content={process.env.DOMAIN + "/imgs/img_DogBreed-Rottweiler.jpg"} />
            <meta property="og:image:width" content="320" />
            <meta property="og:image:height" content="240" />
            {/**TWITTER META */}
            <meta name="twitter:title" content="Aprende todo sobre el Rottweiler - Diaz web app" />
            <meta name="twitter:site" content="@diazwebapp" />
            <meta name="twitter:description" content="El rottweiler es una raza canina de tipo molosoide originaria de Alemania, aunque fue también usado en la Antigua Roma y también es conocido como rottweiler americano debido a la certificación recibida por American Kennel Club." />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={process.env.DOMAIN + "/imgs/img_DogBreed-Rottweiler.jpg"} />
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
        title='Rottweiler'
        imgalt='Rottweiler'
        text='El rottweiler es una raza canina de tipo molosoide originaria de Alemania, conoce sobre esta raza de perro, cuanto mide, como educarlos, donde adquirirlos y más.'
        imglink='/imgs/rottweilers_wall.jpg'
        />
        <section className='dog_page' >
            <article id="caracteristicas" >
                <h2>Caracteristicas del Rottweiler</h2>
                <ul>
                    <li>
                        <b>Rango de peso:</b><p>Machos: 38 - 61 kg, Hembras: 36 - 45 kg</p>
                    </li>
                    <li>
                        <b>Altura a la cruz:</b><p>Machos: 66 cm, Hembras: 61 cm</p>
                    </li>
                    <li>
                        <b>Orejas:</b><p>caídas (de forma natural)</p>
                    </li>
                    <li>
                        <b>Esperanza de vida:</b><p> 8 - 11 años</p>
                    </li>
                    <li>
                        <b>Tendencia a babear:</b> <p>moderada</p>
                    </li>
                    <li>
                        <b>Tendencia a roncar:</b> <p>baja</p>
                    </li>
                    <li>
                        <b>Tendencia a ladrar:</b> <p>moderada</p>
                    </li>
                    <li>
                        <b>Tendencia a excavar:</b> <p>baja</p>
                    </li>
                    <li>
                        <b>Necesidad de atención/Socialización:</b> <p>alta</p>
                    </li>
                    <li>
                        <b>Pelo:</b><p>corto,liso</p>
                    </li>
                    <li>
                        <b>Colores:</b><p>negro con marcas pardas</p>
                    </li>
                    <li>
                        <b>Necesidad de aseo general:</b> <p>baja</p>
                    </li>
                    <li>
                        <b>Criado para:</b><p>perro de pastoreo, perro policía, perro de defensa y seguridad, perro guardián, perro guardián para fincas.</p>
                    </li>
                </ul>

            </article>
            <article>
                <h2>¿Un rottweiler es peligroso?</h2>
                
                <div>
                    <Image placeholder="blur" blurDataURL={placeholder_1} width="300" height="300" src="/imgs/rottweiler-agresivo.jpeg" title="rottweiler agresivo" alt="rottweiler agresivo"/> 
                    <p>
                        Es una de las razas más fuertes y poderosas del mundo debido a su gran potencia de mordida. Es un perro considerado potencialmente peligroso debido a sus características físicas, los machos en particular pueden ser algo agresivos y dominantes.
                    </p> 
                </div>
                               
            </article>
            <article>
                <h2>Recomendaciones y precauciones</h2>
                <p>
                    Los Rottweilers, no son recomendados para propietarios primerizos, necesitan una socialización amplia y continua para ser buenos compañeros de la familia.
                    <br />
                    No obstante, este perro es inteligente y seguro de sí mismo, es fácil de mantener a pesar de su tamaño.
                </p>
            </article>
            <article>
                <h2>¿Cómo educarlos?</h2>
                <div>
                    <p>
                        Hay que educar siempre desde la paciencia y el respeto, nunca con castigos. Empieza desde sus primeros pasitos en casa, entrenando con palabras sencillas en periodos cortos de tiempo, sin fatigarlo. Y muy importante: acuérdate de recompensarlo con algún rico premio y con caricias cuando se porte bien.
                    </p>
                    <Image placeholder="blur" blurDataURL={placeholder_1} width="300" height="300" src="/imgs/rottweiler-bebe.jpeg" title="rottweiler cachorros" alt="rottweiler cachorros"/> 
                </div>
            </article>
            <article>
                <h2>Rottweiler temperamento y Personalidad</h2>
                <p>
                    Los rottweilers se han seleccionado como perros guardianes y para trabajos de protección, algo que debe tenerse en cuenta en todo momento.Son perros activos e inteligentes, tan seguros de sí mismos como para actuar por su cuenta, por lo que necesitan que se les oriente desde el primer momento.
                </p>
                <p>
                    Si se les deja a su aire, pueden convertirse en ladradores molestos o excavadores, y dado su tamaño son capaces de llevar a cabo grandes destrozos. Criados para trabajar, lo mejor para los rottweilers es el adiestramiento y las tareas, aunque sea simplemente el acompañamiento de un niño. Las agresiones pueden ser un problema, y este perro es totalmente capaz de hacer mucho daño, por lo que los Rottweilers necesitan firmeza y un propietario paciente y experto.
                </p>
            </article>

            <article>
                <h2>Cuidado y Convivencia</h2>
                <p>
                    Los rottweilers son bastante fáciles de mantener para lo grandes que son y, de hecho, tienden a la obesidad si no realiza suficiente ejercicio. El cuidado del pelo es mínimo: un rápido aseo semanal casi siempre será suficiente. Algunos rottweilers babean mucho, especialmente los machos que tienen los belfos (labios) caídos.
                </p>
                <p>
                    Lo ideal es que un rottweiler esté expuesto a otras mascotas, perros incluidos, desde el principio, y también a niños. Suelen ser muy protectores con sus niños y deben estar bajo supervisión cuando están con un grupo de niños. Para esta raza sin duda hay que acudir a un criador reputado, porque su popularidad ha provocado algunos problemas de temperamento y salud.
                </p>
            </article>
            <article>
                <h2>¿Cómo saber si es puro o pedigree?</h2>
                <p>
                    <b>De cuerpo:</b> fuerte, robusto y bien proporcionado, los machos de esta raza suelen pesar en torno a los 50 kg. y medir de 61 a 68 cm., mientras que las hembras pesan 40 kg. aproximadamente y pueden llegar a medir de 56 a 63 cm. Su esperanza de vida ronda los 11 años de edad.
                </p>
                <p>
                    <b>Aspecto fisico:</b> debe tratarse de un perro robusto, con un gran poderío físico, destacará por su cabeza ancha y redondeada, la fortaleza de su mandíbula, los ojos con tono café oscuro y un color fuego y negro en su pelaje.
                </p>
                <p>
                    <b>En cuanto al pelo, poseen dos capas:</b> una externa compuesta por pelos de largura media, duros y bien fijados; y una lanilla interna. El color de su pelaje es negro, con bien delimitadas manchas pardo-rojizas situadas en zonas como el hocico, el pecho, la garganta, las extremidades, las mejillas y bajo la cola, principalmente.
                </p>
            </article>

            <article>
                <h2>Tipos de rottweiler</h2>
                <p>
                    La raza original de los "rottweiler" proviene de Alemania. Un cuidado muy exhaustivo es el que se tiene en los criaderos de esta especie y por ello tienen una condición muy bien cuidada y que por ello son cotizados en el mundo actual.
                </p>

                <p>
                    Sin embargo, otra clase de la que se tiene conocimiento es la que vive en América, específicamente en los Estados Unidos. Es el lugar donde habita el "americano", el cuál es un perro más esbelto y de piernas más largas, pero no con el cuidado que se tiene en Europa.
                </p>
                <p>
                    Otra varieda de la cuál se ha hablado es el romano. Sin embargo, no sería específicamente porque fuera italiano, sino porque es grande, pero se ha hecho mención de que este ejemplar es más parecido a la raza de los mastines.
                </p>
            </article>
            <article>
                <h2>Diferencias entre el rottweiler alemán y el americano</h2>
                <b>Rottweiler alemán</b>
                <p>
                    Este perro cuenta con una altura de 56 a 61 centímetros. El peso oscila entre los 42 y 50 kilogramos de acuerdo al sexo del ejemplar. No se les corta la cola.
                </p>
                <b>Rottweiler americano</b>
                <p>
                    Este perro cuenta con una altura de 56 a 70 centímetros. El peso oscila entre los 35 y 42 kilogramos de acuerdo al sexo del ejemplar. Se les corta la cola, dejando una o dos vértebras.
                </p>
            </article>
            <article>
                <h3>¿de que color son los rottweiler?</h3>
                <p>
                    Los expertos indican que en su gran mayoría, los rottweilers son negros, aunque no descartan que pueda existir un perro albino (blanco) o de color caoba, pero esto se debería a una combinación de razas y no sería puro.
                </p>
            </article>

        </section>
       
    </main>
}

export default Rottweiler