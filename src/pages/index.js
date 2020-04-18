import React from "react"
import styled from "styled-components"
import { getSpace } from "../theme"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo"
import hero from "../assets/hero.svg"
import ArrowCircle from "../components/arrow-circle.js"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion"
import "@reach/accordion/styles.css"

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
  color: ${({ theme }) => theme.colors.grey};
  line-height: 1.4;
  text-align: center;
  max-width: ${getSpace(620)};
  margin: 0 auto ${getSpace(40)};
`

const Button = styled.a`
  font-weight: 800;
  font-size: ${({ theme }) => getSpace(theme.fontSizes[3])};
  line-height: 1.3;
  text-decoration: none;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.brand};
  border: 2px solid ${({ theme }) => theme.colors.brand};
  padding: 16px 32px;
  border-radius: 8px;
  transition: all 0.1s linear;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.brand};
    background: ${({ theme }) => theme.colors.white};
  }
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

const Hero = styled.img`
  width: 100%;
  margin: ${getSpace(60)} 0 ${getSpace(160)};
`

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minMax(300px, 1fr));
  grid-gap: ${getSpace(24)};
  margin: ${({ space }) => (space === "large" ? getSpace(72) : getSpace(48))} 0;
`

const Card = styled.article`
  background: ${({ theme }) => theme.colors.offWhite};
  border-radius: 12px;
  padding: ${getSpace(32)};
`

const CardIcon = styled(Logo)`
  color: ${({ theme }) => theme.colors.brand};
  width: 50px;
  margin-bottom: ${getSpace(20)};
`
const CardTitle = styled.h3`
  font-size: ${({ theme }) => getSpace(theme.fontSizes[4])};
  font-weight: 800;
  line-height: 1.3;
  margin: 0 0 ${getSpace(12)};
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

const HelpCopy = styled.p`
  font-size: ${({ theme }) => getSpace(theme.fontSizes[2])};
  line-height: 1.4;
  text-align: left;
  max-width: ${getSpace(570)};
  margin: 0 auto;

  &:not(:last-of-type) {
    margin-bottom: 1em;
  }
`

const HelpGrid = styled.section`
  display: grid;
  grid-template-columns: minMax(300px, 1fr) minMax(600px, 2fr);
  grid-gap: ${getSpace(32)};
  margin: ${getSpace(72)} 0;
`

const HelpColumn = styled.div``

const HelpPanel = styled(AccordionItem)`
  background: ${({ theme }) => theme.colors.offBlue};
  border-radius: 12px;
  padding: 32px;

  &:not(:last-of-type) {
    margin-bottom: 24px;
  }
`

const HelpTitleWrap = styled.h3`
  margin: 0;
`

const HelpIcon = styled(ArrowCircle)`
  color: ${({ theme }) => theme.colors.brand};
  width: 32px;
  transition: transform 0.2s ease;

  [data-state="open"] & {
    transform: rotate(-0.5turn);
  }
`

const HelpTitle = styled(AccordionButton)`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  font-family: Inter;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  line-height: 1.3;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`

const HelpContent = styled(AccordionPanel)`
  margin-top: 24px;
  line-height: 1.5;
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
    title: "Finished",
    items: [
      {
        text: "Code Coverage Plugin",
        authors: [authors.liam],
      },
      {
        text: "Error listing",
        authors: [authors.liam, authors.connor],
      },
      {
        text: "SRCDAT Support",
        authors: [authors.connor, authors.liam],
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
        text: "Public plugin system",
        authors: [authors.liam, authors.connor],
      },
      {
        text: "Content assist",
        authors: [authors.liam],
      },
    ],
  },
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
        authors: [authors.connor],
      },
    ],
  },
]

const FAQs = [
  {
    title: "Can I get a free trial?",
    description:
      "While ILEditor 2 is in open-beta, we are not offering free trials. You can expect to see this by the time we reach 1.0.",
  },
  {
    title: "Can my team get support?",
    description:
      "Absolutely. We are still working out the kinks but we want to help you in any way possible. If you are in need of support with ILEditor 2, you can reach out to support@ileditor.dev.",
  },
  {
    title: "Where can I report a bug?",
    description:
      "You can report a bug for ILEditor 2 or the website on the public GitHub repository.",
  },
  {
    title: "How do I get started with ILEditor 2?",
    description:
      "Either check out our documentation or see our introductory videos.",
  },
  {
    title: "COVID-19 Update",
    description:
      "If you are a software developer working for a medical or healthcare business using IBM i, then we are happy to offer a temporary free licence. Please contact us at support@ileditor.dev to find out more.",
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
      <Button href="https://ileditorweb.herokuapp.com/signup">
        Get started today
      </Button>
    </CenterSection>
    <section>
      <Hero src={hero} alt="" />
    </section>
    <section id="features" style={{ marginBottom: "160px" }}>
      <Grid>
        {Cards.map(card => (
          <Card key={card.title}>
            <CardIcon />
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
    <section id="help" style={{ marginBottom: "160px" }}>
      <HelpGrid space="large">
        <HelpColumn>
          <Subtitle style={{ textAlign: "left" }}>Help &amp; FAQs</Subtitle>
          <HelpCopy>
            We’re here to help you get set up and using the ILEditor with ease.
          </HelpCopy>
          <HelpCopy>Don’t see an answer to your question?</HelpCopy>
          <HelpCopy>
            <a href="mailto:support@ileditor.dev">Get in touch.</a>
          </HelpCopy>
        </HelpColumn>
        <HelpColumn>
          <Accordion collapsible multiple>
            {FAQs.map(({ title, description }) => (
              <HelpPanel key={title}>
                <HelpTitleWrap>
                  <HelpTitle>
                    <span>{title}</span>
                    <HelpIcon />
                  </HelpTitle>
                </HelpTitleWrap>
                <HelpContent>{description}</HelpContent>
              </HelpPanel>
            ))}
          </Accordion>
        </HelpColumn>
      </HelpGrid>
    </section>
  </Layout>
)

export default Home
