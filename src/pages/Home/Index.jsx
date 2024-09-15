import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import {
  Title,
  Container,
  Form,
  ContainerInputs,
  Input,
  InputLabel,
} from "./styles";




import  Button  from "../../components/Button";
import TopBackround from "../../components/TopBackround";
import  FundoBackround  from "../../components/Image-fundo";



function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const navigate = useNavigate() 

  async function registerNewUser() {
    await api.post("/usuarios", {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value,
    });

    navigate('/Lista-de-Usuarios')
  }

  return (
    
    <Container>
     <TopBackround></TopBackround>

      <Form>
        <Title>Cadastro de Usuário</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome <span> *</span>
            </InputLabel>
            <Input
              type="text"
              placeholder="Nome do Usuário"
              ref={inputName}
            ></Input>
          </div>

          <div>
            <InputLabel>
              Idade <span> *</span>
            </InputLabel>
            <Input
              type="number"
              placeholder="Idade do Usuário"
              ref={inputAge}
            ></Input>
          </div>
        </ContainerInputs>

        <div style={{ width: "100%" }}>
          <InputLabel>
            Email <span> *</span>
          </InputLabel>
          <Input
            type="email"
            placeholder="Email do Usuário"
            ref={inputEmail}
          ></Input>
        </div>

        <Button type="button" onClick={registerNewUser} theme="primary">
          Cadastrar Usuário
        </Button>
      </Form>
      
      <Button type="button" onClick={() => navigate('/Lista-de-Usuarios')}>
          Lista de usuários
        </Button>


        <FundoBackround></FundoBackround>


    </Container>

    
  );
}

export default Home;
