import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #eef4f7;
`

export const Heading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: x-large;
  padding-bottom: 10px;
  border-bottom: 2px solid #52bbf0;
`

export const TravelCards = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px;

  min-height: 85vh;
`
