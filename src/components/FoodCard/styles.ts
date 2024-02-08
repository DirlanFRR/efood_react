import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 338px;
  width: 320px;
  background-color: ${cores.vermelhoCoral};
  color: ${cores.ligthYellow};
  padding: 8px;

  img {
    width: 100%;
    magin-bottom: 8px;
  }

  h2 {
    font-size: 16px;
    font-weight: 900;
    height: 19px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 8px;
  }

  button {
    background-color: ${cores.ligthYellow};
    color: ${cores.vermelhoCoral};
    border: none;
    font-size: 14px;
    font-weight: 700;
    padding: 4px 0;
    cursor: pointer;
    width: 304px;
    height: 24px;
  }
`
