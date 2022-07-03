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
          <script
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB1yUhltdk7PbQoMqvYU31NLY3-AGgjh5w&callback=initMap"
            async
            defer
          ></script>
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
