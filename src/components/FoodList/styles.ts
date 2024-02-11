import styled from 'styled-components'

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 32px;
  column-gap: 32px;
  padding-top: 56px;
`

export const Banner = styled.div`
  position: relative;
  height: 280px;
  padding-top: 24px;
  padding-bottom: 32px;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Title = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;

  p {
    font-size: 32px;
    font-weight: 100;
  }

  h2 {
    font-size: 32px;
    font-weight: 900;
  }
`
