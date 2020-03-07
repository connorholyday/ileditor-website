import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { getSpace } from "../theme"

const Title = styled.h1`
  font-size: ${({ theme }) => getSpace(theme.fontSizes[6])};
  font-weight: 800;
  line-height: 1.3;
  text-align: center;
  margin: ${getSpace(40)} 0 ${getSpace(24)};
`

const Intro = styled.p`
  font-size: ${({ theme }) => getSpace(theme.fontSizes[3])};
  line-height: 1.4;
  text-align: center;
  max-width: ${getSpace(620)};
  margin: ${getSpace(24)} auto ${getSpace(40)};
`

const Button = styled.a`
  font-weight: 800;
  font-size: ${({ theme }) => getSpace(theme.fontSizes[3])};
  line-height: 1.3;
  text-decoration: none;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) =>
    `${getSpace(theme.fontSizes[0])} ${getSpace(theme.fontSizes[4])}`};
  background: #0065ff;
  box-shadow: 0px 0px 24px rgba(0, 101, 255, 0.2);
  border-radius: 4px;
`

const Home = () => (
  <Layout>
    <SEO title="ILEditor - The future of IBM i" />
    <Title>The future of IBM i</Title>
    <Intro>
      Bring your development up to speed with the fastest, most advanced tool
      for IBM i development yet.
    </Intro>
    <Button href="#">Start your free trial</Button>
  </Layout>
)

export default Home
