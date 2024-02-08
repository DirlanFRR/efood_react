import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelhoCoral: '#E66767',
  ligthYellow: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    color: ${cores.vermelhoCoral};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
