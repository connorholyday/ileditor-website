import React from "react"
import { graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Header from "../components/header"
import SEO from "../components/seo"
import { theme, GlobalStyles, getSpace } from "../theme"

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.wrapper};
  margin: 0 auto;
`

const Footer = styled.footer`
  padding: ${getSpace(16)} 0;
`

const DocsLayout = props => {
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <Header siteTitle={siteTitle} />
      <Wrapper>
        <main>
          <h1>{post.frontmatter.title}</h1>
          <span>{post.frontmatter.date}</span>
          <MDXRenderer>{post.body}</MDXRenderer>
        </main>
        <Footer>© {new Date().getFullYear()} Halcyon Tech</Footer>
      </Wrapper>
    </ThemeProvider>
  )
}

export default DocsLayout

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`
