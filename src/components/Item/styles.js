import { Link } from "react-router-dom";
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 22.2rem;
  padding: 3.2rem;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > .rating {
    margin: 8px 0 15px;
    display: flex;
    gap: 6px;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > p {
    color: #999591;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
    margin-bottom: 15px;
  }
`

export const Title = styled(Link)`
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-decoration: none;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;
` 