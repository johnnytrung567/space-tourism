import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: normal;
    }

    body {
        font-family: Barlow, sans-serif;
        color: #d0d6f9;
        font-size: 18px;
    }

    h1, h2, h3, h4 {
        font-family: Bellefair, serif;
        color: #fff;
        text-transform: uppercase;
    }

    h1 {
        font-size: 150px;
        margin-top: ${({ mt }) => (mt ? mt : '0px')};
        margin-bottom: ${({ mb }) => (mb ? mb : '0px')};
    }

    h5 {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 28px;
        letter-spacing: 4.75px;
        text-transform: uppercase;
    }
`
