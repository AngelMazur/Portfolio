import styled from 'styled-components'

export const WrapperBox = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 30rem), 1fr));
  justify-items: center;
  width: 80%;
  margin: 0 auto;
  &.selectedMarker {
    grid-template-columns: auto;
    width: min(80%, 1240px);
  }
`
export const WrapperMaps = styled.div`
  display: contents;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
`
export const MapsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  height: 50vh;
  width: 98vw;
`
