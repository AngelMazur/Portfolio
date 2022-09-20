import styled from 'styled-components'

export const WrapperBox = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(min(100%, 30rem), 1fr));
justify-items: center;
width: 80%;
margin: 0 auto;
&.selectedMarker{
  grid-template-columns: auto;
  width: min(80%, 1240px)
}
`
