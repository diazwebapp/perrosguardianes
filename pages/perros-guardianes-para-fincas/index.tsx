import Head from 'next/head'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/dist/client/link'
import GlobalAppContext from '../../context/context'

const Index = () => {
    const { app_dispatch } = useContext(GlobalAppContext)
    const { asPath } = useRouter()
    useEffect(() => {
        app_dispatch({ type: "swich_menu", payload: false })
    }, [])
    return <main>
        <Head>
            <title>perros guardianes para fincas - Diaz web app</title>
            <meta name="author" content="diaz web app" />
            <meta name="description" content="Cuando se trata de encontrar el mejor perro guardián la protección de fincas o granjas, hay docenas de razas para elegir y cada uno tiene sus propios rasgos y características únicas. Sin embargo, una cosa que todos tienen en común es el instinto de protección del ganado." />

            {/** OG META */}
            <meta property="og:title" content="perros guardianes para fincas - Diaz web app" />
            <meta property="og:site_name" content={'diaz web app'} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="Cuando se trata de encontrar los mejores perros guardianes para fincas o granjas, hay docenas de razas para elegir y cada uno tiene sus propios rasgos y características únicas. Sin embargo, una cosa que todos tienen en común es el instinto de protección del ganado." />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:url" content={process.env.DOMAIN + asPath} />
            <meta property="og:image" content={process.env.DOMAIN + "/imgs/perro_guardian_fincas.jpg"} />
            <meta property="og:image:secure_url" content={process.env.DOMAIN + "/imgs/perro_guardian_fincas.jpg"} />
            <meta property="og:image:width" content="320" />
            <meta property="og:image:height" content="240" />
            {/**TWITTER META */}
            <meta name="twitter:title" content="perros guardianes para fincas - Diaz web app" />
            <meta name="twitter:site" content="@diazwebapp" />
            <meta name="twitter:description" content="Cuando se trata de encontrar los mejores perros guardianes para fincas o granjas, hay docenas de razas para elegir y cada uno tiene sus propios rasgos y características únicas. Sin embargo, una cosa que todos tienen en común es el instinto de protección del ganado." />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={process.env.DOMAIN + "/imgs/perro_guardian_fincas.jpg"} />
            <meta name="twitter:label1" content="Tiempo de lectura" />
            <meta name="twitter:data1" content="3 minutos" />
            {/**LINK META INDEX*/}
            <link rel="shortlink" href={process.env.DOMAIN + asPath} />
            <link rel="canonical" href={process.env.DOMAIN + asPath} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            <meta property="ia:markup_url" content={process.env.DOMAIN + asPath} />
        </Head>
        <section className="page_home" >

            <h1>perros guardianes para fincas</h1>
            <b>
                Cuando se trata de encontrar los mejores perros guardianes para fincas, hay docenas de razas para elegir y cada uno tiene sus propios rasgos y características únicas. Sin embargo, una cosa que todos tienen en común es el instinto de protección del ganado...
            </b>

            <b>
                Hay una gran diferencia entre los perros guardianes del ganado y las razas de guardia o protección <b><a title="perros de pastoreo" href="#perros_de_pastoreo" >(habiles como perros de pastoreo)</a></b>. Ambas pueden ser buenos guardianes de la familia y la granja, pero funcionan y se comportan de forma diferente.
            </b>

            <h2>Perros guardianes de ganado</h2>
            <p>
                Un perro guardián de ganado es aquel que defiende a los rebaños de los predadores. <br />
                Este tipo de perros <b>suele conocerse como mastín, perro de lobo, perro de ganado o perro guardian de ovejas</b>, ya que tradicionalmente han guardado rebaños de ovejas, pero la mayor parte de ellos son perfectamente capaces de guardar otras especies ganaderas.
            </p>
            <p>
                Los perros guardianes del ganado (LGD) son un tipo de perro criado específicamente para las tareas de protección de los animales de granja contra los depredadores. Estos perros se convierten en un miembro más del rebaño y permanecen con el grupo haciendo guardia, a la espera de los depredadores que puedan intentar atacar.
            </p>
            <h2 id="perros_de_pastoreo" >Diferencia con el perro de pastoreo</h2>
            <p>
                A diferencia de un perro pastor, carea o perro de aqueda, como el Border collie, un guardián de ganado no controla el movimiento del rebaño con acciones predadoras y agresivas para conseguir su reagrupamiento, sino que tienden a mezclarse en el rebaño e ignorar a animales individualmente y a cambio mantienen su alerta sobre amenazas potenciales. En cuanto se observa un comportamiento de agrupamiento, es el rebaño el que tiende a agruparse en torno a los <Link href="/" ><a title="perros guardianes" href="/"><b>perros guardianes</b></a></Link>, especialmente en campo abierto donde los predadores se encuentran más cerca.
            </p>
            <h2>Caracteristicas de un perro guardian de ganado</h2>
            <p>
                los <b>perros guardian de fincas</b> tienen un aspecto físico grande, adecuado para vivir al aire libre las 24 horas del día con su ganado, incluso en climas duros, un bajo instinto de persecución o de presa, poca energía, un pensamiento fuertemente independiente que no responde a las órdenes humanas y utilizan una serie de medidas escalonadas para advertir de las amenazas, desde los ladridos hasta la carga para un enfrentamiento.
            </p>

            <p>
                Por el contrario, <Link href="/" ><a title="perros guardianes" href="/"><b>perros de guardia y protección</b></a></Link> que incluyen las razas de pastores (pastor belga y holandés, doberman, pastor alemán, rottweiler) y las razas de caza/mastiff (bóxer, bullmastiff, rhodesian ridgeback), tienen una fuerte capacidad de respuesta a las órdenes humanas.
            </p>
            
            <h2>¿Cómo trabaja el perro protector de ganado?</h2>
            <p>
                El perro, convive con la majada en forma
                permanente, reconociéndola como su familia y
                comportándose como un miembro más; no rodea
                ni arrea, sólo vigila y recorre su territorio
                marcando especialmente los límites con orina y
                heces. De esta manera los carnívoros silvestres u
                otros perros reconocen que el territorio está
                ocupado y los disuade de entrar, haciendo que
                prefieran sitios no marcados.
            </p>
            <p>
                Ante cualquier sospecha de peligro, ruidos,
                presencia de desconocidos, depredadores e
                incluso caballos o vacas (si no está improntado con
                dicha hacienda), emite ladridos direccionales y se
                interpone entre el ganado y aquello que observa
                como amenaza, resguardando así al ganado. Rara
                vez ataca a los depredadores.
            </p>
            <p>
                Hay dos comportamientos básicos que se pueden
                observar en los perros de protección, uno más
                activo y uno pasivo. En el primero el animal ronda
                la zona a vigilar y vuelve de vez en cuando sobre
                sus pasos con el fin de detectar posibles amenazas
                antes de que alcancen una distancia peligrosa. En
                su comportamiento pasivo, el perro permanece
                más cerca de la majada. Cuando existe más de un
                perro, suelen adoptar cada uno un rol diferente,
                complementándose.
            </p>
            <h2>¿Cualquier perro sirve como protector?</h2>
            <p>
                Si bien, hay experiencias de utilización de animales
                cruzas sin raza definida, existen numerosas razas
                especializadas en Europa y Asia. En Argentina, las
                más difundidas son Maremmano Abruzze,
                originaria de Italia y dos razas españolas, el Mastín
                del Pirineo y el Montaña del Pirineo.
                Son perros de gran tamaño, con más de 45 kg de peso 
                adulto y en general de color claro,
                predominando el blanco. El Mastín y el Montaña
                del Pirineo pueden presentar manchas de color gris
                o pardo
            </p>
            <h2>¿Cómo lograr un perro protector?</h2>
            <p>
                
                Además de seleccionar la raza adecuada, el
                cachorro que se quiera usar como protector se
                debe someter al proceso de impronta.
                La "IMPRONTA” es la socialización del cachorro
                con el tipo de hacienda que debe proteger. Este
                proceso aprovecha los períodos críticos de
                socialización en la vida del cachorro para lograr un
                apego total y permanente hacia ella, de manera
                que nunca se separe del hato o majada. Este
                proceso de impronta, unido al instinto innato de
                guarda y protección, permite lograr un perro
                “protector de ganado” que realice la tarea para la
                cual fue seleccionado.
            </p>
            <h3>Proceso de impronta y costos</h3>
            <p>Básicamente consta de dos etapas: La lactancia y el post destete.</p>
            <p>
                <b>LACTANCIA:</b> abarca desde la parición
                de la perra hasta el destete (45 días).
                Durante este período, la perra parida
                permanece en un galpón o canil que
                permita mantener la camada junto
                con ovejas o cabras de modo tal que
                los cachorros se familiaricen con los
                sonidos y olores de la hacienda.
            </p>
            <p>
                <b>POST DESTETE:</b> en este momento se
                comienza un proceso de socialización
                en cual cada perro es aislado de sus
                hermanos y se lo coloca con 3-4
                animales de la especie deseada por al
                menos 45 días. Finalizado ese período,
                el cachorro se encuentra en
                condiciones de ir al campo con su
                familia de ovejas, chivas o vacas
                (según la especie con la que se haya
                improntado).
            </p>
            <p>
                Durante estos primeros meses a campo, es
                preferible que el cachorro permanezca junto con su
                majada o hato, en un potrero chico y con pocos
                animales para que comience con el trabajo de
                cuidador. Actualmente, el costo total para producir
                un perro es de $ 14.180. En la tabla N° 1 se visualizan
                los principales gastos.
            </p>
            <h3>Tabla N° 1: Costo de producción estimado por cachorro improntado</h3>
            <table>
                <thead>
                    <tr>
                        <td>concepto</td>
                        <td>monto</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mantenimiento padres (alimentación y sanidad) camada estimada de 6 cachorros</td>
                        <td>4580 $</td>
                    </tr>
                    <tr>
                        <td>Mantenimiento de 3 ovejas durante impronta</td>
                        <td>1200 $</td>
                    </tr>
                    <tr>
                        <td>Alimentación cachorro (0,5 Kg durante 3 meses)</td>
                        <td>2850 $</td>
                    </tr>
                    <tr>
                        <td>Mano de obra, movilidad e instalaciones</td>
                        <td>2500 $</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total:</td>
                        <td>14180 $</td>
                    </tr>
                </tfoot>
            </table>
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