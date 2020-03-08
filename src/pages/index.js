import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { getSpace } from "../theme"
import cardIcon from "../assets/card-icon.svg"

const CenterSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

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

const Lead = styled.p`
  font-size: ${({ theme }) => getSpace(theme.fontSizes[2])};
  line-height: 1.4;
  text-align: center;
  max-width: ${getSpace(570)};
  margin: 0 auto;
`

const Subtitle = styled.h1`
  font-size: ${({ theme }) => getSpace(theme.fontSizes[5])};
  font-weight: 800;
  line-height: 1.3;
  text-align: center;
  margin: ${getSpace(48)} 0};

  & + ${Lead} {
    margin-bottom: ${getSpace(24)};
  }
`

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minMax(300px, 1fr));
  grid-gap: ${getSpace(32)};
`

const Card = styled.article`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 10px 28px rgba(0, 101, 255, 0.05);
  border-radius: 12px;
  padding: ${getSpace(32)};
`

const CardIcon = styled.img``
const CardTitle = styled.h3``
const CardContent = styled.p``

const Cards = [
  {
    title: "Source Browsers",
    content:
      "ILEditor has simple integrated browsers for source-physical files and the IFS.",
  },
  {
    title: "Inline Compiling",
    content:
      "Compile any ILE language right from the editor. Easily configure your editor to add support for more languages.",
  },
  {
    title: "Syntax Highlighting",
    content:
      "Support for majority of ILE languages: RPG, CLLE, C, C++ and even COBOL. Plus other great languages like PHP, JS and Python.",
  },
  {
    title: "Intuitive Design",
    content:
      "We’ve built the editor for simplicity. We cut down on clutter and made it easy to get started with.",
  },
  {
    title: "Inline Error List",
    content:
      "We’ve made the error listing easy to use. We show you everything you need to know about your compile.",
  },
  {
    title: "Plugin System",
    content:
      "We’re building a plugin orientated system so we can easily extend your IDE. Git, RPG conversaion and more, as plugins.",
  },
]

const Home = () => (
  <Layout>
    <SEO title="ILEditor - The future of IBM i" />
    <CenterSection>
      <Title>The future of IBM i</Title>
      <Intro>
        Bring your development up to speed with the fastest, most advanced tool
        for IBM i development yet.
      </Intro>
      <Button href="#">Start your free trial</Button>
    </CenterSection>
    <section>{/* The laptop screen */}</section>
    <section id="features">
      <Subtitle>ILEditor Features</Subtitle>
      <Grid>
        {Cards.map(card => (
          <Card key={card.title}>
            <CardIcon src={cardIcon} alt="" />
            <CardTitle>{card.title}</CardTitle>
            <CardContent>{card.content}</CardContent>
          </Card>
        ))}
      </Grid>
    </section>
    <section id="roadmap">
      <Subtitle>Product Roadmap</Subtitle>
      <Lead>
        We’re continually working on improving the editor to make it the best it
        can be for you.
      </Lead>
    </section>
  </Layout>
)

export default Home
