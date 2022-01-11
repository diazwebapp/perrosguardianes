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
      <meta name="description" content="El perro guardián es aquel capaz de proteger a su dueño ante un peligro. Estos tipos de perros guardianes suelen haber pasado por un periodo de entrenamiento especial" />

      {/** OG META */}
      <meta property="og:title" content="Guia definitiva de Perros guardianes - Diaz web app" />
      <meta property="og:site_name" content={'diaz web app'} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="El perro guardián es aquel capaz de proteger a su dueño ante un peligro. Estos tipos de perros guardianes suelen haber pasado por un periodo de entrenamiento especial" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:url" content={process.env.DOMAIN+asPath} />
      <meta property="og:image" content={process.env.DOMAIN + "/imgs/perros-guardianes.jpg"} />
      <meta property="og:image:secure_url" content={process.env.DOMAIN + "/imgs/perros-guardianes.jpg"} />
      <meta property="og:image:width" content="320" />
      <meta property="og:image:height" content="240" />
      {/**TWITTER META */}
      <meta name="twitter:title" content="Guia definitiva de Perros guardianes - Diaz web app" />
      <meta name="twitter:site" content="@diazwebapp" />
      <meta name="twitter:description" content="El perro guardián es aquel capaz de proteger a su dueño ante un peligro. Estos tipos de perros guardianes suelen haber pasado por un periodo de entrenamiento especial" />
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
        El perro guardián es aquel capaz de proteger a su dueño ante un peligro. Estos tipos de perros guardianes suelen haber pasado por un periodo de entrenamiento, con el que han aprendido a reaccionar de una manera concreta ante determinados estímulos y ser así el mejor perro guardian.

      </p>
      <h2>Razas de perros guardianes</h2>
      <p>
        Un intruso no será rival para estas imponentes, valientes y leales mascotas, aquí tiene un listado de las mejores razas de perros protectores.
      </p>

      <div className="gallery">
        <div>
          <Link href="/rottweiler" >
            <a href="/rottweiler" title='rottweiler perro' >
              <Image placeholder="blur" blurDataURL={placeholder_1} width={150} height={150} layout='responsive' src="/imgs/img_DogBreed-Rottweiler.jpg" title='rottweiler perro' alt='rottweiler perro' />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/doberman" >
            <a href="/doberman" title="doberman">
              <Image placeholder="blur" blurDataURL={placeholder_1} width={150} height={150} layout='responsive' src="/imgs/img_DogBreed-Doberman.jpg" alt='doberman perro' title='doberman perro' />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/bullmastiff" >
            <a href="/bullmastiff" title="bullmastiff">
              <Image placeholder="blur" blurDataURL={placeholder_1} width={150} height={150} layout='responsive' src="/imgs/img_DogBreed-Bull-Mastif.jpg" alt='bullmastiff perro' title='bullmastiff perro' />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/pastor-aleman" >
            <a href="/pastor-aleman" title="pastor aleman">
              <Image placeholder="blur" blurDataURL={placeholder_1} width={150} height={150} layout='responsive' src="/imgs/img_DogBreed-German-Shepard.jpg" alt='pastor aleman perro' title='pastor aleman perro' />
            </a>
          </Link>
        </div>
      </div>
      
      <h2>Mejores perros guardianes</h2>
      <p>
        Los mejores perros guardianes son devotos, valientes y saben cuándo luchar contra un intruso, pero eso no significa que sean perros agresivos en su vida diaria. Al proveerles entrenamiento cuando son cachorros, estas mascotas harán todo lo posible para protegerte. Igual de importante, te harán sentir seguro y te ofrecerán mucho amor y afecto.
      </p>

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

      <h2>Entrenamiento para perros guardianes</h2>
      <b>
        Un perro guardián se entrena para proteger tu propiedad y tu familia. Contrario a lo que podrías pensar, a la mayoría de los perros guardianes no se les enseña a atacar. En su lugar, se les enseñan técnicas no agresivas.
      </b>
      <p>
        Adiestrar a tu perro para ser un perro protector tomará un poco de tiempo y paciencia, pero el resultado será un perro que no solo te protegerá contra una amenaza, sino que también estará a gusto y bien educado en situaciones no amenazadoras, en esta sección aprenderas como educar un perro guardian.
      </p>
      <article className="perro_ataque_perro_guardian" >
        <h3>Reconoce la diferencia entre un perro guardián y un perro de ataque</h3>
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
        
        
      <article>
        <h3>Determina si la raza de tu perro es una raza común de perros guardianes</h3>
        <p>
          Aunque se puede entrenar a la mayoría de los perros para ser perros guardianes, ciertas razas son conocidas por ser buenos perros guardianes. Por ejemplo, se conoce que las razas pequeñas como Chow Chow, pug y Shar Pei son buenos perros guardianes. Las razas más grandes, como dóberman, pastor alemán y Akita también son excelentes perros guardianes.
        </p>
        <ul>
          <li>
            <p>
              Ciertas razas, tales como el pastor alemán y dóberman, pueden entrenarse para ser tanto perros guardianes como perros de ataque.
            </p>
          </li>
          <li>
            <p>
              Si tienes un perro de raza pura que no es una raza común de perro guardián o si tienes un perro cruzado, aún es posible entrenarlo para ser un excelente perro guardián. Si tiene las características conductuales de un perro guardián, y es entrenado y socializado apropiadamente, entonces podrías entrenarlo para protegerte.
            </p>
          </li>
        </ul>
      </article>
      <article>
        <h3>Aprende acerca de los rasgos de personalidad de un perro guardián ideal</h3>
        <p>
          Contrario a la creencia pública, un buen perro guardián no debe reaccionar por miedo o pura agresión. Generalmente, un buen perro guardián debe ser territorial y protector con su dueño y su propiedad, pero permanecer obediente a las órdenes de su dueño.
        </p>
        <ul>
          <li>
            <p>
              Un buen perro guardián debe confiar en sí mismo y sus alrededores. Un perro confiado tiene curiosidad sobre una nueva persona o área y no es tímido ni asustadizo cerca de nuevas personas. Es posible que tu perro ya tenga este rasgo inherentemente, pero la socialización adecuada también puede infundir confianza en un perro.
            </p>
          </li>
          <li>
            <p>
              Un buen perro guardián también es firme. Esto no necesariamente significa que es excesivamente agresivo o prepotente. En su lugar, significa que está cómodo poniéndose en una posición que le permitirá obtener lo que quiere. También significa que tiene confianza para acercarse a una nueva situación o persona, en vez de alejarse.
            </p>
          </li>
          <li>
            <p>
              La sociabilidad es otra característica importante de un buen perro guardián. Un perro guardián bien socializado será capaz de reconocer y desconfiar de un extraño en la presencia de su dueño, pero no atacará ni se pondrá excesivamente agresivo con dicho extraño.
            </p>
          </li>
          <li>
            <p>
              Los buenos perros guardianes también deben ser fáciles de entrenar. Los Chow Chow son buenos perros guardianes, ya que desconfían naturalmente de los extraños, pero tienden a ser muy independientes y no son fáciles de entrenar.
            </p>
          </li>
          <li>
            <p>
              Los perros leales son buenos perros guardianes. Mientras más leal sea tu perro, será más probable que quiera defenderte y protegerte. Los pastores alemanes son conocidos por ser una raza muy leal.
            </p>
          </li>
        </ul>
      </article>
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
        article{
          margin:10px auto;
        }
      .gallery{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        grid-auto-rows:1fr;
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