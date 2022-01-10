import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'

const Servicios = () => {
    const {asPath} = useRouter()
  return <main>
    <Head>
      <title>Servicios de Desarrollo de Software - Diaz web app</title>
      <meta name="author" content="diaz web app" />
      <meta name="description" content="Servicios de Desarrollo de Software, aplicaciones web, aplicaciones moviles, wordpress y asesoria tecnica gratuita." />

      {/** OG META */}
      <meta property="og:title" content="Servicios de Desarrollo de Software - Diaz web app" />
      <meta property="og:site_name" content={'diaz web app'} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Servicios de Desarrollo de Software, aplicaciones web, aplicaciones moviles, wordpress y asesoria tecnica gratuita." />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:url" content={process.env.DOMAIN+asPath} />
      <meta property="og:image" content={process.env.DOMAIN + "/logo512.png"} />
      <meta property="og:image:secure_url" content={process.env.DOMAIN + "/logo512.png"} />
      <meta property="og:image:width" content="320" />
      <meta property="og:image:height" content="240" />
      {/**TWITTER META */}
      <meta name="twitter:title" content="Servicios de Desarrollo de Software - Diaz web app" />
      <meta name="twitter:site" content="@diazwebapp" />
      <meta name="twitter:description" content="Servicios de Desarrollo de Software, aplicaciones web, aplicaciones moviles, wordpress y asesoria tecnica gratuita." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={process.env.DOMAIN + "/logo512.png"} />
      <meta name="twitter:label1" content="Tiempo de lectura" />
      <meta name="twitter:data1" content="3 minutos" />
      {/**LINK META INDEX*/}
      <link rel="shortlink" href={process.env.DOMAIN+asPath} />
      <link rel="canonical" href={process.env.DOMAIN+asPath} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta property="ia:markup_url" content={process.env.DOMAIN+asPath} />
    </Head>
    <section>
        
    </section>
  </main>
}

export default Servicios