import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  margin-bottom: .8rem;
  border-radius: 1.0rem;
  padding: 2.4rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`