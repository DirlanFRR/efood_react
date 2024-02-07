import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 186px;
`

export const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  font-weight: 900;
  font-size: 18px;

  & > a {
    text-decoration: none;
    color: inherit; /* Adiciona a cor padrão (pode ajustar conforme necessário) */
    width: 109px;
  }

  & > p {
    display: flex;
    justify-self: flex-end;
    text-decoration: none;
  }

  & > img {
    justify-self: center;
  }
`
