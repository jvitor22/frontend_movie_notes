import { Container, Title } from "./styles";
import { Tag } from "../Tag"
import { AiOutlineStar, AiFillStar } from "react-icons/ai"

export function Item() {
  return(
    <Container >
      <Title to="/movie-preview/:id">
        Nome do filme
      </Title>
      <div className="rating">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
      </div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil temporibus, accusamus autem aperiam tenetur laboriosam dolorum, nulla assumenda esse quia culpa labore, sed excepturi debitis. Fugit adipisci culpa nam reiciendis!</p>
      <div className="tags">        
        <Tag title="Ficção científica" />
        <Tag title="Drama" />
        <Tag title="Família" /> 
      </div>
    </Container>
  )
}