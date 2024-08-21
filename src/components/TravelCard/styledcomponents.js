import styled from 'styled-components'

export const Card = styled.li`
  list-style: none;
  width: 45%;
  margin: 10px;

  @media screen and (max-width: 576px) {
    width: 90%;
  }
`
export const Image = styled.img`
  width: 100%;
`

export const DetailsBox = styled.div`
  padding: 10px;
  background-color: #ffffff;
`

export const DeatailsH1 = styled.h1`
  color: #475569;
  font-size: large;
  font-family: 'Roboto';
  font-weight: 500;
`
export const DetailsPara = styled.p`
  color: #64748b;
  font-size: small;
  font-family: 'Roboto';
  font-weight: 500;
`
