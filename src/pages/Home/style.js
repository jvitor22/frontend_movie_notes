import styled from "styled-components";
import { Link } from 'react-router-dom'



export const Container = styled.div`


  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header"
  "content";
  
  > main { 
    padding: 5rem 12.3rem;
    overflow-y: scroll;

    grid-area: content;

    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 4rem;

      h2 {
        font-weight: 400;
        font-size: 3.2rem;
        line-height: 4.2rem;
      }      
    }    
  }
`

export const NewMovie = styled(Link)`
  padding: 0 3.2rem;
  width: 21.1rem;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-right: 8px;
  }
`

export const MoviesList = styled.div`
  display: flex;
  flex-direction: column;
`