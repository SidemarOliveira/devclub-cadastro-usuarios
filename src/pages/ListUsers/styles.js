import styled from "styled-components";


export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px

`

export const Title = styled.h2`
  color: #ffff;
  text-align: center;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  margin-top: 30px;
`

export const ContainerUsers = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr ;
gap: 20px;
margin: 40px 0px;

@media(max-width: 800px) {
    grid-template-columns: 1fr
}

`


export const CardUsers = styled.div`
 background-color: #252d48;
 padding: 15px;
 border-radius: 32px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 gap: 20px;
 max-width: 380px;
 

 h3 {
    color: #fff;
    font-size: 24px;
    margin-bottom: 3px;
    text-transform: capitalize;
 }

 P {
    color: #fff;
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 3px;
 }

`
export const TrashIcon = styled.img`
 cursor: pointer;
 padding-left: 50px;

 &:hover{
   opacity: 0.8;
 }
    
 &:active{
    opacity: 0.5;
 }
`


export const AvatarUsers = styled.img`
 height: 80px;

`
