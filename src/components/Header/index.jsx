import { Container, Brand, Profile } from "./styles";
import { Input } from "../Input";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { signOut } = useAuth()

  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  return(
    <Container>
      <Brand to="/">MoviesNotes</Brand>
      
      <Input placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <strong>João Vitor de Assumpção</strong>
          <button
            type="button"
            onClick={handleSignOut}
            >Sair
          </button>
        </div>   
        <Link to="/profile">        
          <img src="https://github.com/jvitor22.png" alt="Imagem do usuário"  />
        </Link>     
        
      </Profile>
    </Container>
  )
}