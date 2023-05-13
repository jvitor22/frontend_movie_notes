import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 11.6rem;
  padding: 2.4rem 12.3rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.4rem;
  
`

export const Brand = styled(Link)`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.2rem;
  color: ${({ theme }) => theme.COLORS.PINK};
  margin-right: 6.4rem;
`

export const Profile = styled.div`
  min-width: 24.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-left: 6.4rem;
  
   
  > div {
    display: flex;
    flex-direction: column;    

    > strong {
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }

    > button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: right;
    text-decoration: none;
    }
  }

  > a img {
    border: ${({ theme }) => theme.COLORS.GRAY_300};
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`