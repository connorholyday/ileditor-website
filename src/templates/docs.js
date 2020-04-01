import React from "react"
import { graphql, Link } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"

import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import Wrapper from "../components/wrapper"
import Title from "../components/title"
import { theme, GlobalStyles, getSpace } from "../theme"

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;

  p {
    line-height: 1.5;
    max-width: 80ch;
  }
`

const Sidebar = styled.aside`
  padding: ${getSpace(60)} 0;
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
`

const SideNav = styled.div`
  position: sticky;
  top: 12.5rem;
`

const Contents = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const ContentsItem = styled.li`
  margin-bottom: 0.25rem;
`

const ContentsLink = styled(({ active, ...props }) => <Link {...props} />)`
  display: block;
  color: ${({ theme, active }) =>
    active ? theme.colors.brand : theme.colors.offBlack};
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  margin: 0 -0.25rem;

  &:hover {
    color: ${({ theme, active }) =>
      active ? theme.colors.brand : theme.colors.black};
  }
`

const Main = styled.main`
  padding: ${getSpace(60)};
`

const DocsLayout = props => {
  const posts = props.data.allMdx.edges
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles hideGuidelines solid />
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <Header siteTitle={siteTitle} slim sticky solid />
      <Wrapper>
        <Container>
          <Sidebar>
            <SideNav>
              <Contents>
                {posts.map(({ node }) => (
                  <ContentsItem key={node.id}>
                    <ContentsLink
                      to={node.frontmatter.path}
                      active={node.id === post.id}
                    >
                      {node.frontmatter.title}
                    </ContentsLink>
                  </ContentsItem>
                ))}
              </Contents>
            </SideNav>
          </Sidebar>
          <Main>
            <Title
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              datetime={post.frontmatter.datetime}
            />
            <MDXRenderer>{post.body}</MDXRenderer>
          </Main>
        </Container>
        <Footer />
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        datetime: date(formatString: "YYYY-MM-DD")
      }
    }
  }
`
