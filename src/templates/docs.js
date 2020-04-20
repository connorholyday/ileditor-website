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
  grid-template-columns: 1fr;
  padding: ${getSpace(24)};

  @media (min-width: 1024px) {
    grid-template-columns: 200px 1fr;
  }

  @media (min-width: 1240px) {
    grid-template-columns: 200px 1fr;
    padding: 0;
  }

  p {
    line-height: 1.5;
    max-width: 80ch;
  }

  li {
    margin-bottom: 0.5rem;
  }
`

const Sidebar = styled.aside`
  overflow: hidden;

  @media (min-width: 1024px) {
    overflow: visible;
    padding: ${getSpace(60)} 0;
    border-right: 1px solid ${({ theme }) => theme.colors.border};
  }
`

const SideNav = styled.div`
  @media (min-width: 1024px) {
    position: sticky;
    top: 12.5rem;
  }
`

const Contents = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;

  @media (min-width: 1024px) {
    white-space: initial;
    overflow: hidden;
  }
`

const ContentsItem = styled.li`
  margin-right: 1rem;
  margin-bottom: 0.25rem;
  display: inline-block;

  @media (min-width: 1024px) {
    margin-right: 0;
    white-space: initial;
    overflow: hidden;
    display: list-item;
  }
`

const ContentsLink = styled(({ active, ...props }) => <Link {...props} />)`
  display: block;
  color: ${({ theme, active }) =>
    active ? theme.colors.brand : theme.colors.offBlack};
  text-decoration: none;
  padding: 1em 0;
  margin: 0;

  @media (min-width: 1024px) {
    padding: 0.25rem 0.5rem;
    margin: 0 -0.25rem;
  }

  &:hover,
  &:focus {
    color: ${({ theme, active }) =>
      active ? theme.colors.brand : theme.colors.black};
  }
`

const Main = styled.main`
  @media (min-width: 1024px) {
    padding: ${getSpace(60)};
  }
`

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
`

const PaginationLink = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  margin: 0;
  padding: ${getSpace(8)} 0;
  text-align: ${({ right }) => (right ? "right" : "left")};

  span {
    margin-bottom: ${getSpace(8)};
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 640px) {
    padding: ${getSpace(32)} 0;
  }
`

const DocsLayout = props => {
  const { previous, next } = props.pageContext
  const posts = props.data.allMdx.edges
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
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
            <Pagination>
              {previous && (
                <PaginationLink>
                  <span>Previous</span>
                  <Link to={previous.frontmatter.path}>
                    {previous.frontmatter.title}
                  </Link>
                </PaginationLink>
              )}
              {next && (
                <PaginationLink right>
                  <span>Next</span>
                  <Link to={next.frontmatter.path}>
                    {next.frontmatter.title}
                  </Link>
                </PaginationLink>
              )}
            </Pagination>
          </Main>
        </Container>
      </Wrapper>
      <Footer />
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
    allMdx(sort: { fields: [frontmatter___order], order: ASC }) {
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
