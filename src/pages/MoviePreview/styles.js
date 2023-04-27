import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: "content";
    overflow-y: auto;
    padding: 0 12rem;
    margin: 4rem 0;
    
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.PINK};
      display: flex;
      gap: 8px;
      align-items: center;
    }

    h2 {
      font-weight: 500;
      font-size: 3.6rem;
      line-height: 4.7rem;
      margin: 2.4rem 0;
    }

    .title {
      display: flex;
      gap: 1rem;
      align-items: center;
      
      h2 {
        margin-right: 1rem;
      }
      svg {        
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }

    .author {
      display: flex;
      gap: 8px;
      line-height: 19px;

      > a {
        color: ${({ theme }) => theme.COLORS.WHITE};
        
      }
       a img {
        border: ${({ theme }) => theme.COLORS.GRAY_300};
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
      }

      svg {
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }

    .tags {
      margin: 4rem 0;     
    }

    > p {
      text-align: justify;
    }
  }
`