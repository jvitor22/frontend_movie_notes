import { Container, Brand, Profile } from "./styles";
import { Input } from "../Input";
import { Link } from "react-router-dom";

export function Header() {
  return(
    <Container>
      <Brand to="/">MoviesNotes</Brand>
      
      <Input placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <strong>João Vitor de Assumpção</strong>
          <Link to="/">Sair</Link>
        </div>   
        <Link to="/profile">        
          <img src="https://github.com/jvitor22.png" alt="Imagem do usuário"  />
        </Link>     
        
      </Profile>
    </Container>
  )
}