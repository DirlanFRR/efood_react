import { createGlobalStyle } from 'styled-components'

export const colors = {
  vermelhoCoral: '#E66767',
  ligthYellow: '#FFEBD9',
  red: '#FF4D4F'
}

export const breakpoints = {
  tablet: '768px',
  desktop: '1024px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    color: ${colors.vermelhoCoral};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      width: 80%;
    }
  }
`
