import Head from 'next/head'
import { useContext, useEffect } from 'react'
import GlobalAppContext from '../../context/context'
import DogCover from '../../components/DogCover'
import { useRouter } from 'next/dist/client/router'

const Doberman = () => {
    const {app_dispatch} = useContext(GlobalAppContext)
    const {asPath} = useRouter()
    useEffect(()=>{
        app_dispatch({type:"swich_menu",payload:false})
    },[])
    return <main>
        <Head>
            <title>Aprende todo sobre el Doberman - Diaz web app</title>
            <meta name="author" content="diaz web app" />
            <meta name="description" content="Los Dóberman son perros fuertes y enérgicos que necesitan practicar mucho ejercicio. Si no lo practican, es probable que se vuelvan irritables o incluso agresivos." />

            {/** OG META */}
            <meta property="og:title" content="Aprende todo sobre el Doberman - Diaz web app" />
            <meta property="og:site_name" content={'diaz web app'} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="Los Dóberman son perros fuertes y enérgicos que necesitan practicar mucho ejercicio. Si no lo practican, es probable que se vuelvan irritables o incluso agresivos." />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:url" content={process.env.DOMAIN+asPath} />
            <meta property="og:image" content={process.env.DOMAIN + "/imgs/img_DogBreed-Doberman.jpg"} />
            <meta property="og:image:secure_url" content={process.env.DOMAIN + "/imgs/img_DogBreed-Doberman.jpg"} />
            <meta property="og:image:width" content="320" />
            <meta property="og:image:height" content="240" />
            {/**TWITTER META */}
            <meta name="twitter:title" content="Aprende todo sobre el Doberman - Diaz web app" />
            <meta name="twitter:site" content="@diazwebapp" />
            <meta name="twitter:description" content="Los Dóberman son perros fuertes y enérgicos que necesitan practicar mucho ejercicio. Si no lo practican, es probable que se vuelvan irritables o incluso agresivos." />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={process.env.DOMAIN + "/imgs/img_DogBreed-Doberman.jpg"} />
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
            title='Doberman'
            text='Los Dóberman son perros fuertes y enérgicos que necesitan practicar mucho ejercicio. Si no lo practican, es probable que se vuelvan irritables o incluso agresivos. Una cuidadosa socialización y adiestramiento en obediencia desde muy jóvenes son esenciales.'
            imgalt='doberman'
            imglink='/imgs/img_DogBreed-Doberman.jpg'
        />
        
        <section className='dog_page' >
            
            <article id="caracteristicas" >
                <h2>Caracteristicas del Doberman</h2>
                <ul>
                    <li>
                        <b>Rango de peso:</b><p>Machos: 29 - 40 kg, Hembras: 29 - 40 kg</p>
                    </li>
                    <li>
                        <b>Altura a la cruz:</b><p>MMachos: 66 - 71 cm, Hembras: 60 - 66 cm</p>
                    </li>
                    <li>
                        <b>Orejas:</b><p>caídas (de forma natural)</p>
                    </li>
                    <li>
                        <b>Esperanza de vida:</b><p> 10 - 12 años</p>
                    </li>
                    <li>
                        <b>Tendencia a babear:</b> <p>baja</p>
                    </li>
                    <li>
                        <b>Tendencia a roncar:</b> <p>baja</p>
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
                        <b>Colores:</b><p>negro, rojo, azul, leonado (todos con marcas pardas)</p>
                    </li>
                    <li>
                        <b>Necesidad de aseo general:</b> <p>baja</p>
                    </li>
                    <li>
                        <b>Criado para:</b><p>perro guardián.</p>
                    </li>
                </ul>

            </article>
            <article>
                <h2>Que tan agresivo puede ser</h2>
                <p>
                    Según la ley nacional de perros peligrosos en Argentina (nº 14.107 de 2010) el doberman es potencialmente agresivo y peligroso. Ello exige que sus propietarios cumplan una serie de requisitospara poseer una de estas razas, bien como adopten cuidados y medidas preventivas durante los paseos de sus perros en espacios públicos o abiertos, como el uso de bozal y correa.
                </p>
            </article>

            <article>
                <h2>Cuidado y Convivencia</h2>
                <p>
                    Los dóberman son perros fuertes y enérgicos que necesitan practicar mucho ejercicio. Si no lo practican, tienen más probabilidades de volverse irritables o incluso agresivos. Pueden adaptarse bien a la vida en un piso si practican ejercicio a diario.
                </p>
                <p>
                    Una cuidadosa socialización y adiestramiento en obediencia desde muy jóvenes son esenciales para esta raza. Los dóberman responden muy bien al refuerzo positivo.
                </p>
                <p>
                    No se necesita ningún adiestramiento en protección especial para quien quiera un buen protector familiar. De hecho, los expertos en dóberman suelen desaconsejar el adiestramiento en protección, ya que podría derivar en sobreprotección y agresión.
                </p>
            </article>
            <article>
                <h2>Como saber si es original / pedigree</h2>
                <p>
                    Un perro doberman debe cumplir con varias especificaciones muy particulares para ser considerado de <b>raza pura o pedigree</b>.
                </p>
                <h3><b>Temperamento</b></h3>
                <p>
                    El doberman nunca debe ser tímido o mostrar tendencias a ser vicioso. Un pura raza siempre será enérgico, sociable y atento. Cuando no está en modo de perro guardián es amable con la gente y muy bueno con los niños. Su propósito es ser vigilante y leal, sobre todo con su par (ya sea humano o canino), y muy obediente y sensible a la formación. La ausencia de miedo es también un importante rasgo temperamental, un doberman está dispuesto a proteger en tiempos de peligro.
                </p>
                <h3><b>Pelaje y color</b></h3>
                <p>
                    Una cubierta de pelo corto es el estándar para el doberman de pura raza. El pelo debe ser plano y cercano al cuerpo, y grueso en su totalidad. En cuanto a la coloración, los colores permitidos son: negro, rojizo, azul y beige. El beige es una dilución del rojizo y el azul se considera una dilución del negro estándar, que es más común. El doberman también puede tener manchas de tono tostado cuando su color principal es negro. Estas marcas sólo pueden estar por encima de los ojos, en el hocico, en la base de la cola, en el pecho, y en las patas o los pies.
                </p>
                <h3><b>Tamaño</b></h3>
                <p>
                    Los doberman son perros de tamaño mediano. Aunque muchas personas consideran que son bastante grandes, tienen una altura de 26 a 28 pulgadas (65 a 70 cm) -en los hombros- para los machos y de 24 a 26 pulgadas (60 a 65 cm) para las hembras. Esto todavía es considerado un tamaño medio, debido a su elegante y delgada contextura. La altura de un doberman desde la pata a los hombros debe ser la misma que la longitud del animal desde la parte frontal del pecho hasta el punto posterior de la parte superior del muslo. La cabeza, el cuello y las patas están en proporción con el resto del cuerpo. El pecho de un pura raza es amplio con un antepecho bien definido.
                </p>
            </article>

            <article>
                <h2>Tipos de Doberman</h2>
                <p>
                    Esta raza de perros tiene solamente dos tipos, a pesar de que se han mencionado otros más, hay dos que son aceptadas únicamente por los expertos en animales caninos: doberman americano y europeo.
                </p>
                <p>
                    El doberman americano y el doberman europeo son las únicas dos razas aceptadas de perros de esta especie. El primero de ellos tiene su origen y crianza en los Estados Unidos y Norteamérica en general, mientras que el segundo tiene su origen en Alemania y es aceptado por las áreas geográficas de Europa, Asia e incluso Sudamérica.
                </p>
            </article>
            
            <article>
                <h2>Diferencias entre el Doberman americano y el europeo</h2>
                <h3>Doberman americano</h3>
                <p>
                    El doberman americano es un perro que desde su crianza se enfoca mucho en la estética. Es una raza de complexión mediana, con una altura de entre 60 y 70 cms, un peso de 27 a 45 kgs y con una fisonomía donde la gran diferencia además de su estética más esbelta es que se les hace un recorte a las orejas.
                </p>
                <p>
                    La raza americana ha sido identificada y dispuesta para ser perros de compañía, los cuáles pueden ser parte de una familia sin un verdadero riesgo de que puedan agredirlos por su temperamento. Es una raza más atlética que la europea.
                </p>
                <h3>Doberman europeo</h3>                
                <p>
                    El doberman europeo fue el primer ejemplar de esta raza que en un inicio tenía un enfoque más servicial. Es un perro sociable e inteligente que puede relacionarse entre sí y en ello ayuda mucho su temperamento que es más fuerte y que en este caso sí es más agresivo que el americano.
                
                </p>
                <p>
                    Es una raza de entre 64 y 71 cm, 36 y 74 kgs, son perros más fuertes y con mayor músculo. A esta raza no se les corta las orejas por tradición y si tienden a ser más autoritarios, ya que un ladrido puede ser una señal de que protegen a sus amos y a la familia.
                </p>
            </article>
            
            <article>
                <h3>¿De que color son los Doberman?</h3>
                <p>
                    Si bien se conoce al doberman como negro con algunas manchas tostadas, se sabe que no es el único color que existe, ya que algunas especies pueden ser de tonalidad roja o azul con estos tintes tostados.
                </p>
            </article>
            <article>
                <h3>Como educar un doberman</h3>
                <b>Pasos a seguir:</b>
                <p>
                
                    La clave para formar a un doberman es no tener ningún miedo en reprenderle y corregir su comportamiento. Es tu perro, es tu responsabilidad, si compartes tu vida con el debes ser capaz de educarlo sin temores.

                    Debes empezar a entrenar a tu doberman cuando todavía es un cachorro. A partir de los 6 meses, es la edad ideal para comenzar con todo el proceso de educación y entrenamiento, ya que aprenden con mucha facilidad, y es cuando aprenden a socializar con la familia. Es el momento de enseñar al cachorro a que no sea muy sobreprotector. Es el momento de empezar con simples actos de obediencia.
                </p>
                <p>
                    Debes enseñar y demostrar a tu doberman que tu y tu familia son los jefes de la manada. Debe quedar clara esa posición de poder y de liderazgo sobre él. Es habitual que los perros seintenten quedarse con el mando de cualquier lugar donde se encuentren, y tu casa no será una excepción. Pero tú eres quien mandas, quien decide qué hacer y cómo. No permitas que tu amigo canino se apodere de tu casa y haga lo que quiera desde el principio. Debes decidir cuando comerá, cuando es el momento de dormir y también cuando es el momento para recibir mimos. Si hace falta llegar a castigarle, por un mal comportamiento constante puedes usar una jaula para encerrarlo cuando no consigas que se porte como debe. Lo de encerarlo es solo como medida provisional y siempre momentánea, debes hacerlo inmediatamente después de que haga algo incorrecto. Y repito, por poco tiempo. No se trata de que te tenga miedo, sino de que te respete. Cuando salgas a pasear con él, debes salir tu primero por la puerta y que sea él quien te siga, así refuerzas tu liderazgo.
                </p>
                <p>
                    Debes hacer que se relacione con la gente y con otros perros de forma regular. El proceso de socialización implica que salgas con tu perro por diferentes lugares y lo acostumbres a otras personas y otros animales de forma frecuente. Si ves que está un poco tímido y le cuesta, dile algo bonito, anímale. Verás como poco a poco se abrirá con confianza y la actitud apropiada.
                </p>
                <p>
                    Una vez que está acostumbrado con diversos ambientes, es el momento instruir más cosas. Lo primero y fundamental es orientar a pasear bien con una correa de adiestramiento. Cuando pasees deja que vaya delante con la correa larga, si empieza a estirar, tira con firmeza y dile en tono claro, firme y directo "Quieto", después cambia de sentido. Con esto lo que pretendemos es que se pare, te mire y cambie de dirección contigo. Si lo hace bien, dale algún premio en forma de comida o elogios. Con esta orden puedes también conseguir que tu perro pasee contigo sin tener que tirar constantemente de la correa. Tras repetir este tipo de órdenes, conseguirás que tu perro se quede quieto sin tener que tirar de la correa. Si ves que no te hace caso o se despista, tendrás que repetir el proceso.
                </p>
                <p>
                    Debes enseñarle la orden de "abajo" cuando tu doberman esté sentado. Para eso debes ponerte a su lado, coger un trozo de comida y guiarle con tu orden y con la comida hacia el suelo con el movimiento. Lo normal es que tu perro siga con su mirada y su hocico la recompensa hasta que llegue a estar totalmente en el suelo. Cuando esto ocurra, dale su premio. Probablemente tendrás que repetirlo muchas veces, pero lo conseguirá con constancia. Tu perro deberá quedarse en esa posición hasta que lo liberes con la orden "de acuerdo". Repite de nuevo la palabra "abajo" para que siga recostado hasta que le indiques lo contrario. Para conseguir que se levante, debes dar la orden "de acuerdo" en un tono diferente, alegre, activo, y optimista.
                </p>
            </article>
        </section>
    </main>
}

export default Doberman