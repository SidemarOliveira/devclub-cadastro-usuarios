import styled from "styled-components"

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  height: 100vh;
`

export const Title = styled.h2`
  color: #ffff;
  text-align: center;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
`


export const ContainerInputs = styled.div`
  display: flex;
  gap: 20px;
`

export const Input = styled.input`
  border-radius: 10px;
  border: 1px solid #d2dae2;
  background-color: #fff;
  padding: 12px 20px;
  outline: none;
  width: 100%;
`

export const InputLabel = styled.label`
  color:#fff;
  font-size: 12px;
  font-weight: 500;

  span{
   color: #ef4f45;
   font-weight: bold;
  }
`



export const FundoBackround = styled.div`
  display: flex;
  position: absolute;
  z-index: -1;
  
img {
  
  height: 100vh;
  width: 100vw;
  
}

`

