import { Container, Brand, Profile } from "./styles";
import { Input } from "../Input";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api";

export function Header() {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  return(
    <Container>
      <Brand to="/">MovieNotes</Brand>
      
      <Input placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <strong>{user.name}</strong>
          <button
            type="button"
            onClick={handleSignOut}
            >Sair
          </button>
        </div>   
        <Link to="/profile">        
          <img src={avatarUrl} alt="Imagem do usuário"  />
        </Link>     
        
      </Profile>
    </Container>
  )
}