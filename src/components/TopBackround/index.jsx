
import UsersImage from "../../assets/users.png"
import { Backround } from "./styles"

function TopBackround (){

    return (

        <Backround>
            <img src={UsersImage} alt="imagem-do-usuarios"></img>
        </Backround>
    )
}

export default TopBackround