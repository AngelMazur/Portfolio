import styled from 'styled-components'

export const BoxContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  justify-content: center;
  padding: 0;
  width: 80%;
  min-width:10rem;
  background:antiquewhite;
  border-radius: 10px;
  padding-bottom: 1rem;
  padding:10px;
  border:1px solid #566786;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  h2{
    margin-bottom: 0;
    font-size:  clamp(18px, (1em + 1vw) * 1.25, 24px);
  }
  p{
    font-size:14px;
  }
`
export const ButtonBox = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  width: 90%;
  transition: all 0.2s ease;
  h3 {
    font-weight: 300;
    font-size: 22px;
    display: inline-block;
    color: #566786;
    margin: 0;
    &:hover {
    background-color: transparent;
    border: 0;
    color: #566786;
    opacity: 0.5;
  }
  }
`