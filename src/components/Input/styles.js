import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  margin-bottom: 8px;
  border-radius: 10px;
  padding-left: 1.2rem;
  
  > input {
    height: 5.6rem;
    width: 100%;
    padding-left: 1.2rem;

    
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;
    

    &::placeholder {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  } 
`