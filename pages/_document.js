import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* lo modificamos para */}
          {/* favicon */}
          {/* webfonts personalizadas */}
          {/* stylesheet externos */}
          {/* script/js externos */}
        </Head>
        {/* No es muy comun editar adentro del body */}
        {/* pero se puede usar para agregar una clase */}
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
