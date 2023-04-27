import { Container, NewMovie, MoviesList } from './style'
import { Header } from '../../components/Header'
import { Item } from '../../components/Item'
import { FiPlus } from 'react-icons/fi'

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <div>
          <h2>Meus filmes</h2>
          <NewMovie to="/create-movie">
            <FiPlus />
            Criar nota
          </NewMovie>
        </div>
        
        <MoviesList>
          <Item />
          <Item />
          <Item />
          <Item />
        </MoviesList>
      </main>
    </Container>
  )
}
