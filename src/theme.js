import { createGlobalStyle } from "styled-components"

export const theme = {
  wrapper: "80rem",
  fontSizes: [16, 18, 20, 22, 24, 34, 72],
  colors: {
    brand: "#0065FF",
    green: "#12CA88",
    black: "#000",
    grey: "#E5E5E5",
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
    position: relative;
    background-color: ${({ theme }) => theme.colors.white};
    background-image: linear-gradient(180deg, #ECF4FF 0%, transparent 100%);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: linear-gradient(90deg, rgba(0, 101, 255, 0.1) 1px, transparent 1px);
      background-size: 20% 20%;
      pointer-events: none;
      z-index: -1;
    }
  }

  body {
    font-size: ${({ theme }) => getSpace(theme.fontSizes[0])};
    color: ${({ theme }) => theme.colors.black};
    padding: 0;
    margin: 0;
    font-family: Inter, BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }

  a {
    color: ${({ theme }) => theme.colors.brand};
  }
`
