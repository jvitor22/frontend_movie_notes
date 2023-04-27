import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  height: 5rem;
  border: 0;
  padding: 0 3.2rem;
  border-radius: 10px;
  font-weight: 400;

  &:disabled {
    opacity: 0.5;
  }
`