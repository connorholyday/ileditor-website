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
  margin: ${getSpace(24)} 0;
`

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minMax(300px, 1fr));
  grid-gap: ${getSpace(32)};
  margin: ${({ space }) => (space === "large" ? getSpace(72) : getSpace(48))} 0;
`

const Card = styled.article`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 10px 28px rgba(0, 101, 255, 0.05);
  border-radius: 12px;
  padding: ${getSpace(32)};
`

const CardIcon = styled.img`
  margin-bottom: ${getSpace(8)};
`
const CardTitle = styled.h3`
  font-size: ${({ theme }) => getSpace(theme.fontSizes[4])};
  font-weight: 800;
  line-height: 1.3;
  margin: ${getSpace(12)} 0;
`
const CardContent = styled.p`
  font-size: ${({ theme }) => getSpace(theme.fontSizes[0])};
  line-height: 1.5;
  margin: 0;
`

const Column = styled.article`
  background: linear-gradient(180deg, #f4f9ff 46.53%, transparent 100%);
  border-radius: 12px;
  padding: ${getSpace(24)} ${getSpace(24)} ${getSpace(170)};
`
const ColumnTitle = styled.h3`
  font-size: ${({ theme }) => getSpace(theme.fontSizes[4])};
  font-weight: 800;
  line-height: 1.3;
  margin: 0 0 ${getSpace(16)};
`

const SmallCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding: ${getSpace(16)};
  margin-bottom: ${getSpace(16)};
`

const SmallCardText = styled.p`
  font-size: ${({ theme }) => getSpace(theme.fontSizes[2])};
  line-height: 1.3;
  margin: 0 0 ${getSpace(12)};
`

const Authors = styled.div`
  display: flex;
`

const Author = styled.div`
  font-size: ${getSpace(12)};
  width: ${getSpace(32)};
  height: ${getSpace(32)};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: ${getSpace(16)};
  background-color: ${({ theme, color = "brand" }) => theme.colors[color]};
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:first-of-type) {
    margin-left: -${getSpace(6)};
  }
`

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

const authors = {
  liam: {
    initials: "LA",
    color: "brand",
  },
  connor: {
    initials: "CH",
    color: "green",
  },
}

const Roadmap = [
  {
    title: "In The Future",
    items: [
      {
        text: "CL Formatter",
        authors: [authors.liam, authors.connor],
      },
      {
        text: "Fixed format to free format",
        authors: [authors.liam],
      },
      {
        text: "Quick open",
        authors: [authors.liam, authors.connor],
      },
    ],
  },
  {
    title: "Coming Soon",
    items: [
      {
        text: "Preset and customizable themes",
        authors: [authors.connor],
      },
      {
        text: "Context menus",
        authors: [authors.liam, authors.connor],
      },
      {
        text: "Public plugin system",
        authors: [authors.liam, authors.connor],
      },
    ],
  },
  {
    title: "Finished",
    items: [
      {
        text: "IFS Plugin",
        authors: [authors.liam],
      },
      {
        text: "Member Plugin",
        authors: [authors.liam],
      },
      {
        text: "Compiling",
        authors: [authors.liam, authors.connor],
      },
    ],
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
      <Grid space="large">
        {Roadmap.map(column => (
          <Column key={column.title}>
            <ColumnTitle>{column.title}</ColumnTitle>
            <div>
              {column.items.map(item => (
                <SmallCard key={item.text}>
                  <SmallCardText>{item.text}</SmallCardText>
                  <Authors>
                    {item.authors.map(author => (
                      <Author key={author.initials} color={author.color}>
                        {author.initials}
                      </Author>
                    ))}
                  </Authors>
                </SmallCard>
              ))}
            </div>
          </Column>
        ))}
      </Grid>
    </section>
  </Layout>
)

export default Home
