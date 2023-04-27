import { Container} from "./styles";
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { Button } from "../../components/Button"
import { NoteItem } from "../../components/NoteItem" // fazer novo marcador
import { FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom";


export function CreateMovie() {
  return(
    <Container>
      <Header />
      <main>
        <Link to='/'>
          <FiArrowLeft />
          Voltar
        </Link>
        <h2>Novo filme</h2>
        <div>
          <Input placeholder="Título"/>
          <Input placeholder="Sua nota (de 0 a 5)"/>
        </div>
        <Textarea placeholder="Observações" />
        <span>Marcadores</span>
        <div className="tags">
          <NoteItem value="Ficção científica" />
          <NoteItem value="Drama" />
          <NoteItem isNew placeholder="Novo marcador"/>    
    
        </div>
        <div className="buttons">
          <button>Excluir filme</button>
          <Button title="Salvar alterações" />
        </div>

      </main>
    </Container>
  )
}