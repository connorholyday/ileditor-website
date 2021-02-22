import { createGlobalStyle } from "styled-components"

export const theme = {
  wrapper: "74rem",
  fontSizes: [16, 18, 20, 22, 24, 34, 72],
  colors: {
    brand: "#40B2F1",
    lightBrand: "#004170",
    green: "#12CA88",
    offBlack: "#757575",
    grey: "#333",
    black: "#000",
    border: "rgba(0, 101, 255, 0.1)",
    offBlue: "#F4FBFF",
    offWhite: "#FAFAFA",
    white: "#fff",
  },
}

const rootFontSize = 16
export const getSpace = size => `${size / rootFontSize}rem`

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: ${rootFontSize}px;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    position: relative;
    background-color: ${({ theme }) => theme.colors.white};
  }

  body {
    font-size: ${({ theme }) => getSpace(theme.fontSizes[0])};
    color: ${({ theme }) => theme.colors.black};
    padding: 0;
    margin: 0;
    font-family: Inter, BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }

  table {
    width: 100%;
    border-collapse: collapse; 

    thead {
      text-align: left;
    }

    tr {
      border-bottom: 1px solid rgba(0,101,255,0.1)
    }

    th,
    td {
      padding: .5em 0;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.brand};

    &:hover {
      text-decoration: none;
    }
  }

  pre {
    white-space: pre-wrap;
  }
`
