import styled from "styled-components";

export const Container = styled.span`
  height: 2.4rem;
  font-size: 1.2rem;
  padding: .5rem 1.6rem;
  border-radius: 5px;
  margin-right: .8rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  color: ${({ theme }) => theme.COLORS.WHITE};
`