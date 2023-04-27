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
    overflow-y: scroll;
    padding: 0 12rem;
    margin: 4rem 0;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.PINK};
      display: flex;
      gap: 8px;
      align-items: center;
      margin-bottom: 2.4rem;
    }
    
    h2 {
      font-weight: 500;
      font-size: 3.6rem;
      line-height: 4.7rem;
      margin-bottom: 4rem;
    }

    div {
      display: flex;
      gap: 4rem;
    }

    textarea {
      margin-top: 2rem;
      margin-bottom: 4rem;
    }

    span {
      font-size: 2rem;
      line-height: 2.6rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    .tags {
      background-color: #0D0C0F;
      min-height: 8.8rem;
      border-radius: 8px;
      margin: 4rem 0;
      padding: 16px;
      
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2.4rem;
      flex-wrap: wrap;
    }
    
    .buttons :nth-child(1) {
      border-radius: 10px;
      background-color: #0D0C0F;
      color: ${({ theme }) => theme.COLORS.PINK};
      width: 100%;
      border: none;
    }
  }
`
