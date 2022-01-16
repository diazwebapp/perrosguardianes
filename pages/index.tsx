import Head from 'next/head'
import Image from 'next/dist/client/image'
import { placeholder_1 } from '../components/placeholders'
import { useContext, useEffect } from 'react'
import GlobalAppContext from '../context/context'
import Link from 'next/dist/client/link'
import { useRouter } from 'next/dist/client/router'

const Index = () => {
  const {app_dispatch} = useContext(GlobalAppContext)
  const {asPath} = useRouter()
  useEffect(()=>{
      app_dispatch({type:"swich_menu",payload:false})
  },[])
  return <main>
    <Head>
      <title>Guia definitiva de Perros guardianes - Diaz web app</title>
      <meta name="author" content="diaz web app" />
      <meta name="description" content="Los mejores perros guardianes son devotos, valientes y saben cuándo luchar para de proteger a su dueño ante un  intruso." />

      {/** OG META */}
      <meta property="og:title" content="Guia definitiva de Perros guardianes - Diaz web app" />
      <meta property="og:site_name" content={'diaz web app'} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Los mejores perros guardianes son devotos, valientes y saben cuándo luchar para de proteger a su dueño ante un  intruso." />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:url" content={process.env.DOMAIN+asPath} />
      <meta property="og:image" content={process.env.DOMAIN + "/imgs/perros-guardianes.jpg"} />
      <meta property="og:image:secure_url" content={process.env.DOMAIN + "/imgs/perros-guardianes.jpg"} />
      <meta property="og:image:width" content="320" />
      <meta property="og:image:height" content="240" />
      {/**TWITTER META */}
      <meta name="twitter:title" content="Guia definitiva de Perros guardianes - Diaz web app" />
      <meta name="twitter:site" content="@diazwebapp" />
      <meta name="twitter:description" content="Los mejores perros guardianes son devotos, valientes y saben cuándo luchar para de proteger a su dueño ante un  intruso." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={process.env.DOMAIN + "/imgs/perros-guardianes.jpg"} />
      <meta name="twitter:label1" content="Tiempo de lectura" />
      <meta name="twitter:data1" content="3 minutos" />
      {/**LINK META INDEX*/}
      <link rel="shortlink" href={process.env.DOMAIN+asPath} />
      <link rel="canonical" href={process.env.DOMAIN+asPath} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta property="ia:markup_url" content={process.env.DOMAIN+asPath} />
    </Head>
    <section className="page_home" >
      <h1>Guia definitiva de perros guardianes</h1>
      <p>
      Los mejores perros guardianes son devotos, valientes y saben cuándo luchar para de proteger a su dueño ante un  intruso.

      </p>
      <h2>Las mejores razas de perros guardianes</h2>
      <p>
        Estos son los principales tipos de perros guardianes, reunimos solo las mejores clases y razas de perros guardianes.
      </p>

      <div className="gallery">
        <article>
          <header>
            <Link href="/rottweiler" >
            <a rel="bookmark" href="/rottweiler" title='rottweiler perro' >
              <Image placeholder="blur" blurDataURL={placeholder_1} width={150} height={150} layout='responsive' src="/imgs/img_DogBreed-Rottweiler.jpg" title='rottweiler perro' alt='rottweiler perro' />
              <h3>Rottweiler</h3>
            </a>
          </Link>
          </header>
        </article>
        <article>
          <header>
            <Link href="/doberman" >
              <a rel="bookmark" href="/doberman" title="doberman">
                <Image placeholder="blur" blurDataURL={placeholder_1} width={150} height={150} layout='responsive' src="/imgs/img_DogBreed-Doberman.jpg" alt='doberman perro' title='doberman perro' />
                <h3>Doberman</h3>
              </a>
            </Link>
          </header>
        </article>
        <article>
          <header>
            <Link href="/bullmastiff" >
              <a rel="bookmark" href="/bullmastiff" title="bullmastiff">
                <Image placeholder="blur" blurDataURL={placeholder_1} width={150} height={150} layout='responsive' src="/imgs/img_DogBreed-Bull-Mastif.jpg" alt='bullmastiff perro' title='bullmastiff perro' />
                <h3>bullmastiff</h3>
              </a>
            </Link>
          </header>
        </article>
        <article>
          <header>
            <Link href="/pastor-aleman" >
              <a rel="bookmark" href="/pastor-aleman" title="pastor aleman">
                <Image placeholder="blur" blurDataURL={placeholder_1} width={150} height={150} layout='responsive' src="/imgs/img_DogBreed-German-Shepard.jpg" alt='pastor aleman perro' title='pastor aleman perro' />
                <h3>Pastor Aleman</h3>
              </a>
            </Link>
          </header>
        </article>
      </div>

      <h2>Perros guardianes para el hogar</h2>
      <p>
          Entre las diferentes razas de perros, existen variedades que se caracterizan por sus cualidades físicas e instinto protector. Sin embargo, no solo deben ser perros guardianes para el hogar, sino también deben proteger a su dueño y jamás ser agresivo con su propia familia. <br/>

          En la diversidad de razas de perros guardianes, existen algunas que se destacan no solo por su fuerza física, sino también porque poseen otras características y habilidades además de la fuerza que lo convierten en un verdadero perro guardian de casa.
      </p>      
      <h2>Para qué sirve un perro guardia</h2>
      <p>
          Adicionalmente de ser los mejores perros guardianes para el hogar, existen otras áreas en las que estos perros protectores nos son de mucha utilidad:
      </p>
      <div className="gallery">
        <article>
          <header>
            <Link href="/perros-guardianes-para-fincas" >
            <a href="/perros-guardianes-para-fincas" title='perros guardianes para fincas' rel="bookmark" >
              <Image placeholder="blur" blurDataURL={placeholder_1} width={150} height={150} layout='responsive' src="/imgs/perro_guardian_fincas.jpg" title='perros guardianes para fincas' alt='perros guardianes para fincas' />
              <h3>perros guardianes para fincas</h3>
            </a>
          </Link>
          </header>
        </article>
      </div>
      <h2>Perros guardianes no peligrosos</h2>
      <b>
        A veces, los perros protectores tienen mala reputación, cuando en realidad, los rasgos que los convierten en mejores perros de guardia son también los que los convierten en mejores y leales para la familia.
      </b>
      <p>
        Los perros guardianes no peligrosos comparten una serie de características. Estas se refieren tanto a su personalidad como a su porte, ya que ambas cosas influyen en su capacidad de respuesta ante situaciones de riesgo.
      </p>
      <p>

        En cuanto a <b>su apariencia</b>, la mascota que elijas debe tener un tórax desarrollado y afinados los sentidos. Tanto el oído como el olfato tienen que ser agudos, y es importante que exhiba fuerza en sus patas para correr e impulsarse.
      </p>
      <p>

        <b>Perros más inteligentes</b> y guardianes, tanto para aprender las instrucciones del adiestramiento como para aplicarlas en la vida cotidiana. Que sea capaz de controlarse para no causar accidentes ni daños mayores.
      </p>
      <p>

        <b>Que no se acobarde ante un momento de tensión.</b> Junto a la valentía, la lista de rasgos de los perros guardianes y familiares incluye la tranquilidad y la capacidad para mantenerse alerta y concentrados, ya que muchos se emplean para proteger propiedades desocupadas, por lo que recibirán pocos estímulos durante largos periodos de tiempo.
      </p>
      <article className="perro_ataque_perro_guardian" >
        <h2>Reconoce la diferencia entre un perro guardián y un perro de ataque</h2>
        <div>
          <Image placeholder="blur" blurDataURL={placeholder_1} width="200" height="200" src="/imgs/img_DogBreed-German-Shepard.jpg" alt='perro guardian' title='perro guardian' />
          <p>
            Un perro guardián se entrena para alertar a su dueño de la presencia de un extraño o intruso a través de ladridos o gruñidos. Los perros guardianes usualmente no son entrenados para atacar cuando lo ordenes o actuar de manera excesivamente agresiva con un extraño. Por lo tanto, los perros guardianes generalmente no son buenos perros de ataque.
          </p>
        </div>
        <div>
          <ul>
            <li>
              <p>
                Los perros de ataque a menudo son utilizados por la policía y los cuerpos de seguridad. Son entrenados para atacar cuando se les ordene y responder agresivamente a amenazas o intrusos potenciales.
              </p>
            </li>
            <li>
              <p>
                La mayoría de los perros de ataque están bien entrenados y no actuarán de forma agresiva a menos que sus dueños lo ordenen. Sin embargo, los perros de ataque que no están bien entrenados pueden atacar sin aviso y representan una amenaza grave para humanos y otros animales.
              </p>
            </li>
            <li>
              <p>
                Es poco probable que un dueño promedio necesite un perro de ataque.
              </p>
            </li>
          </ul>
          <Image placeholder="blur" blurDataURL={placeholder_1} layout='fixed' width="200" height="200" src="/imgs/pitbull-perro-ataque.jpg" alt='perro de ataque' title='perro de ataque' />
        </div>
      </article>

      <h2>Entrenamiento para perros guardianes</h2>
      <b>
        Un perro guardián se entrena para proteger tu propiedad y tu familia. Contrario a lo que podrías pensar, a la mayoría de los perros guardianes no se les enseña a atacar. En su lugar, se les enseñan técnicas no agresivas.
      </b>
      <p>
        Adiestrar a tu perro para ser un perro protector tomará un poco de tiempo y paciencia, pero el resultado será un perro que no solo te protegerá contra una amenaza, sino que también estará a gusto y bien educado en situaciones no amenazadoras, en esta sección aprenderas como educar un perro guardian.
      </p>


      <article>
        <h3>Socializa a tu perro desde cachorro</h3>
        <p>
          La socialización apropiada es esencial para entrenar a tu perro para ser un buen perro guardián. Cuando tu perro esté bien socializado, estará cómodo en su ambiente normal. También será menos miedoso y más relajado (características importantes de un buen perro guardián) pero aún conservará una dosis saludable de desconfianza ante situaciones desconocidas y potencialmente peligrosas. El mejor momento para socializar a tu cachorro es cuando tenga entre 3 a 12 semanas de edad.
        </p>
        <ul>
          <li>
            <p>
              Pasadas las 12 semanas de edad, los cachorros desconfían cada vez más de las situaciones nuevas y por lo tanto se vuelven mucho más difíciles de socializar.
            </p>
          </li>
          <li>
            <p>
              Durante el periodo de socialización, debes hacer que su cachorro esté cómodo conociendo nuevas personas e interactuando en nuevos ambientes. Puede ser una gran tarea socializar a tu perro, así que podría ser más fácil dividir la socialización en partes pequeñas y exponerlo a situaciones conforme pase el tiempo según su nivel de comodidad.
            </p>
          </li>
          <li>
            <p>
              Premia a tu cachorro con mucho refuerzo positivo (por ejemplo, caricias, premios, tiempo de juego adicional) cada vez que tenga una buena experiencia de socialización.
            </p>
          </li>
          <li>
            <p>
              Las clases para cachorros son una excelente forma de socializar a tu cachorro. Ten en cuenta que tu cachorro debe estar al día en sus vacunas y tratamientos de desparasitación para mantenerlo sano y libre de enfermedades durante todo el programa de entrenamiento.
            </p>
          </li>
          <li>
            <p>
              Si tu perro es adulto y ya lo has entrenado y socializado, entonces debe estar en camino a convertirse en un buen perro guardián.
            </p>
          </li>
        </ul>
      </article>
      <article>
        <h3>Entrena a tu perro para ladrar en alerta</h3>
        <p>
          <b>Elige una palabra desencadenante.</b> Para entrenar a tu perro a alertarte cuando un extraño está en la puerta o en tu propiedad, primero necesitas establecer una palabra desencadenante para que sirva como orden. Puedes usar “ladra” como una orden. Algunos dueños prefieren usar una palabra distinta a “ladra” (por ejemplo, “habla”) de tal manera que la orden no sea tan obvia para las personas a tu alrededor
        </p>
        <ul>
          <li>Una vez que elijas tu palabra desencadenante “ladra”, dila con el mismo nivel de entusiasmo cada vez que le des esta orden a tu perro.</li>
          <li>Usa la misma palabra desencadenante cada vez que le ordenes a tu perro que ladre.</li>
        </ul>
        <p>
          <b>Practica la orden.</b> La mayoría de los perros son ladradores naturales y no necesitan una orden para ladrar al sonido de alguien acercándose o un ruido repentino. La clave aquí es hacer que tu perro ladre cuando lo ordenes. Para comenzar, amarra la correa a tu perro a la pata de una mesa de cocina o en un lugar en la cerca de tu jardín. Ofrécele un premio a tu perro a medida que te alejes de él y luego sal de su campo de visión
        </p>
        <ul>
          <li>Apenas tu perro haga un sonido, como un quejido o un ladrido, corre hacia él y felicítalo con “buen ladrido” o “buena (palabra desencadenante)”. Dale su premio inmediatamente. Después de repetirlo varias veces, tu perro debe comenzar a conectar el elogio de su ladrido con un premio.</li>
          <li>Una vez que tu perro esté cómodo con la orden para ladrar mientras esté en la misma área o lugar, muévelo a áreas diferentes en tu jardín y en tu casa. También debes probar su respuesta a la orden cuando estés paseándolo o jugando juntos en un lugar público.</li>
        </ul>
        <p>
          <b>Sé firme y claro con la orden</b>. La consistencia y la práctica son clave para hacer que retenga la orden. Si quieres probar su respuesta durante una caminata, deja de caminar y míralo directamente a los ojos. Luego, di una orden entusiasta de “ladra”. Si se ve confundido o duda ante tu orden, ofrécele el premio y repite la orden
        </p>
        <ul>
          <li>Idealmente, tu perro debe ladrar solo una vez cuando le des la orden. Sin embargo, es posible que tu perro quiera seguir ladrando una vez que hayas hecho que empiece. No lo premies si ladra continuamente. Espera que se calme antes de volver a darle la orden.</li>
        </ul>
        <p>
          <b>Crea una situación simulada.</b> Para retar el entendimiento de tu perro con respecto a la orden “ladra”, mantenlo dentro de tu casa y sal por la puerta principal. Una vez que estés afuera, toca el timbre y dale a tu pero la orden “ladra”. Prémialo cuando ladre una vez al dar la orden. Luego, toca la puerta y dale la orden “ladra”. Prémialo si responde correctamente a tu orden.
        </p>
        <ul>
          <li>
            Si es posible, ensaya esta situación en la noche cuando esté oscuro afuera. Es probable que quieras que tu perro te advierta cuando haya alguien en la puerta por la noche, así que será importante que entienda que debe responder con la orden “ladra” durante el día así como en la noche.
          </li>
          <li>Practica la orden “ladra” en intervalos cortos. Después de tres a cuatro repeticiones, dale a tu perro un descanso y deja que haga algo más por 45 minutos aproximadamente. Después de este descanso, practica la orden “ladra” varias veces más. La meta es evitar entrenarlo demasiado de tal manera que tu perro no se aburra ni se frustre durante sus sesiones de entrenamiento.</li>
        </ul>
      </article>
      <article>
        <h3>Pídele a un miembro de tu familia que ponga a prueba el ladrido de alerta de tu perro.</h3>
        <p>
          Una vez que tu perro parezca cómodo con la orden “ladra” contigo, concéntrate en hacer que le ladre a alguien más. Haz que un familiar salga y toque la puerta o el timbre. Quédate adentro y dale a tu perro la orden para ladrar. Premia cada ladrido. Esto reforzará su instinto protector de ladrarle a alguien (o a algo) desconocido.
        </p>
        <ul>
          <li>
            <p>
              Sigue practicando la orden “ladra” con un familiar, premiando a tu perro cada vez que ladre al sonido del timbre o el golpe en la puerta. Con el tiempo, debe comenzar a asociar el timbre o el golpe en la puerta con un ladrido y ladrar una vez al sonido.
            </p>
          </li>
          <li>
            <p>
              Con el tiempo, es recomendable tratar de entrenar a tu perro a ladrar con el sonido del timbre o un golpe en la puerta, en lugar de ordenárselo.
            </p>
          </li>
        </ul>
      </article>
      <article>
        <h3>Ordénale a tu perro a ladrar</h3>
        <p>
          Ahora que tu perro haya aprendido cómo ladrar cuando se le ordena, lo siguiente es ordenarle que deje de ladrar. De hecho, enseñarle a tu perro la orden “ladra” se considera como un primer paso práctico para enseñarle la orden “callado. Ser capaz de ordenarle a tu perro que ladre y que deje de ladrar lo ayudará a ser un buen perro guardián.
        </p>
        <ul>
          <li>
            <p>
              Como antes, prémialo cuando responda apropiadamente a tu orden “ladra”.
            </p>
          </li>
        </ul>
      </article>
      <article>
        <h3>Ordénale a tu perro a dejar de ladrar</h3>
        <p>
          Toca el timbre de tu puerta. Cuando tu perro comience a ladrar en respuesta al timbre, coloca un premio sabroso frente a su nariz. Apenas tu perro deje de ladrar y huela el premio, di “gracias” o “silencio”. Inmediatamente sigue tu orden verbal con un premio.
        </p>
        <ul>
          <li>
            <p>
              No grites ni uses una voz ruidosa al dar tu orden verbal. Tu voz ruidosa podría hacer que tu perro se sienta más alarmado y podría alentarlo a ladrar aún más.
            </p>
          </li>
          <li>
            <p>
              No uses “cállate” o “no” como órdenes verbales para hacer que tu perro se calle, ya que pueden tener una connotación negativa
            </p>
          </li>
        </ul>
      </article>
      <article>
        <h3>Alterna entre las órdenes “ladra” y “callado”</h3>
        <p>
          Alternar entre ambas órdenes te permitirá tener un mejor control del ladrido de tu perro, que es muy importante para entrenar a tu perro para convertirse en un buen perro guardián. Puedes divertirte con esto variando cuántas veces dices “ladra” antes de darle la orden de callarse. Tu perro probablemente verá esto como un juego, lo que podría hacer que la sesión de entrenamiento sea mucho más agradable para ambos
        </p>
      </article>
      <article>
        <h3>Alienta a tu perro a ladrar cuando llegue un extraño</h3>
        <p>
          Alienta a tu perro a ladrar si suena el timbre, incluso si sabes quién está en la puerta. Tu perro podría no saber quién está del otro lado, así que es recomendable alentar su instinto protector de ladrar y alertarte de algo extraño para él. Cuando llegues a la puerta, dale la orden “callado” y prémialo inmediatamente cuando deje de ladrar.
        </p>
        <ul>
          <li>
            <p>
              No lo alientes a ladrar si te encuentras con un extraño amigable o neutral cuando lo saques a pasear
            </p>
          </li>
        </ul>
      </article>
      <article>
        <h3>Practica la orden “callado” repetidamente</h3>
        <p>
          Así como todas las actividades de entrenamiento, la repetición es necesaria para enseñarle a tu perro a responder apropiadamente a tu orden cada vez que la digas. Practica esta orden en intervalos cortos y prémialo cada vez que la cumpla correctamente.
        </p>
      </article>
    </section>
    <style jsx>
      {
        `
       section > article{
          margin:10px auto;
        }
      .gallery{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        grid-auto-rows:1fr;
        gap:2px;
      }
      .gallery article{
        position:relative;
        overflow:hidden;
      }
      .gallery article h3{
        position:absolute;
        width:100%;
        background:var(--shadow-color);
        text-align:center;
        bottom:0;
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

  </main>
}

export default Index