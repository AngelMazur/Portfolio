import Layout from './Layout'

// import '../global.css'

function MyApp({ Component, pageProps }) {
  //El componente app puede recibir:
  //Providers - Context/Provider, Theme, data
  //Layout - Componente que se encarga de renderizar el layout
  //Props adicionales
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


export default MyApp