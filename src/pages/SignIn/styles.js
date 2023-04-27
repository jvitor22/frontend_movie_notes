import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 6.3rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > button {
    margin-top: 2.4rem;
  }

  > a {
    margin-top: 12.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Background = styled.div`
  flex: 1;
  background: linear-gradient(0deg, rgba(35, 33, 41, 0.8), rgba(35, 33, 41, 0.8)), url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`