import { useEffect, useState } from "react";
import api from "../../services/api";
import Button from "../../components/Button";
import TopBackround from "../../components/TopBackround";
import { Container, ContainerUsers, CardUsers, TrashIcon, AvatarUsers, } from "./styles";
import Trash from "../../assets/trash.svg";
import { useNavigate } from "react-router-dom";
import { Title } from "./styles";
import  FundoBackround  from "../../components/Image-fundo";




function ListUsers() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");
      setUsers(data);

      
    }

    getUsers();
  }, []);

  async function deletUsers (id) {
    await api.delete (`usuarios/${id}`)

    const upadatedUsers = users.filter (user => user.id !== id) 

    setUsers(upadatedUsers)
  }


  return (
    <Container>
      <TopBackround />
      <Title>Listagem de Usuários</Title>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUsers  src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon src={Trash} alt="image-lixo" onClick={() => deletUsers (user.id)}/>
          </CardUsers>
        ))}
      </ContainerUsers>

      <Button type="button" onClick ={() => navigate('/')} 
        >Voltar</Button>

      
     <FundoBackround></FundoBackround>

    </Container>
  );
}

export default ListUsers;
