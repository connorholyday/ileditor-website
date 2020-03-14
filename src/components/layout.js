import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import Header from "./header"
import { theme, GlobalStyles } from "../theme"

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.wrapper};
  margin: 0 auto;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Wrapper>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} Halcyon Tech</footer>
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout
