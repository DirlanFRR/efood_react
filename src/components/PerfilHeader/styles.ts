import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const Header = styled.header`
  height: 186px;
`

export const HeaderContent = styled.nav`
  display: grid;
  align-items: center;
  padding-top: 64px;
  grid-template-columns: 1fr 1fr 1fr;
  font-weight: 900;
  font-size: 18px;

  & > a {
    color: ${colors.vermelhoCoral};
    text-decoration: none;
  }

  & > p {
    display: flex;
    justify-self: flex-end;
  }

  & > img {
    justify-self: center;
  }
`
export const HomeLink = styled(Link)`
  display: flex;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const LinkMobile = styled(Link)`
  display: none;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
  }
`

export const CartButton = styled.span`
  display: flex;
  justify-self: flex-end;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const CartMobile = styled.span`
  display: none;
  text-align: right;
  justify-self: flex-end;
  cursor: pointer;

  span {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
  }
`
