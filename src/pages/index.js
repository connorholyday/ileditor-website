import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Tilt from "react-tilt"
import Video from "../assets/clip.mp4"
import { getSpace } from "../theme"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo"
import hero from "../assets/hero.svg"
import ArrowCircle from "../components/arrow-circle"
import ConsoleIcon from "../components/console"
import Pricing from "../components/pricing"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion"
import "@reach/accordion/styles.css"

const Section = styled.section`
  margin-bottom: ${getSpace(80)};

  @media (min-width: 1240px) {
    margin-bottom: ${getSpace(160)};
  }
`

const CenterSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${getSpace(80)};

  @media (min-width: 1240px) {
    margin: 0;
  }
`

const Title = styled.h1`
  font-size: ${({ theme }) => getSpace(theme.fontSizes[5])};
  font-weight: 800;
  line-height: 1.3;
  text-align: center;
  margin: ${getSpace(40)} 0 ${getSpace(24)};

  @media (min-width: 1240px) {
    font-size: ${({ theme }) => getSpace(theme.fontSizes[6])};
  }
`

const Intro = styled.p`
  font-size: ${({ theme }) => getSpace(theme.fontSizes[0])};
  color: ${({ theme }) => theme.colors.grey};
  line-height: 1.4;
  text-align: center;
  max-width: ${getSpace(620)};
  margin: 0 auto ${getSpace(40)};
  padding: 0 1rem;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => getSpace(theme.fontSizes[2])};
    padding: 0;
  }

  @media (min-width: 1240px) {
    font-size: ${({ theme }) => getSpace(theme.fontSizes[3])};
  }
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
  padding: 16px 24px;
  border-radius: 8px;
  transition: all 0.1s linear;

  ${({ variant }) =>
    variant === "icon" &&
    `
      display: flex;
      align-items: center;
    `}

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.brand};
    background: ${({ theme }) => theme.colors.white};
  }
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  ${Button} {
    margin: 1em;
  }
`

const Subtitle = styled.h1`
  font-size: ${({ theme }) => getSpace(theme.fontSizes[4])};
  font-weight: 800;
  line-height: 1.3;
  text-align: center;
  margin: ${getSpace(24)} 0;

  @media (min-width: 1240px) {
    font-size: ${({ theme }) => getSpace(theme.fontSizes[5])};
  }
`

const HeroSection = styled.section`
  display: none;

  @media (min-width: 1240px) {
    display: block;
    position: relative;
    margin: 0 ${getSpace(-80)};
  }
`

const Hero = styled.img`
  width: 100%;
  margin: ${getSpace(60)} 0 ${getSpace(160)};
`

const HeroVideoWrapper = styled.div`
  position: absolute;
  top: 19%;
  left: 22.53466076696165%;
  height: 0;
  width: 54.852507374631266%;
  padding-bottom: 62.5%;
`

const HeroVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

const BlockContent = styled.div`
  flex: 1;
  max-width: 400px;
`

const BlockMedia = styled.div`
  flex: 1;
`

const Block = styled.section`
  background: ${({ alternate, theme }) =>
    alternate ? theme.colors.white : theme.colors.offBlue};
  padding: 48px 2rem;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: ${({ alternate }) => (alternate ? "row-reverse" : "row")};
    align-items: center;
    padding: 48px 64px;
    margin-bottom: 104px;
    overflow: hidden;

    ${BlockContent} {
      padding: 36px 0;
      ${({ alternate }) =>
        alternate ? "margin-left: 64px;" : "margin-right: 64px;"}
    }

    ${BlockMedia} {
      ${({ alternate }) =>
        alternate ? "margin-left: -56px;" : "margin-right: -56px;"}
    }
  }

  @media (min-width: 1240px) {
    overflow: visible;

    ${BlockContent} {
      padding: 72px 0;
      ${({ alternate }) =>
        alternate ? "margin-left: 128px;" : "margin-right: 128px;"}
    }

    ${BlockMedia} {
      ${({ alternate }) =>
        alternate ? "margin-left: -112px;" : "margin-right: -112px;"}
    }
  }
`

const BlockIcon = styled.div`
  width: 51px;
`

const BlockTitle = styled.h3`
  font-size: ${({ theme }) => getSpace(theme.fontSizes[3])};
  font-weight: 800;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.grey};
  margin: 24px 0 16px;

  @media (min-width: 1240px) {
    font-size: ${({ theme }) => getSpace(theme.fontSizes[5])};
  }
`

const BlockCopy = styled.p`
  font-size: ${({ theme }) => getSpace(theme.fontSizes[1])};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 3rem;

  @media (min-width: 1240px) {
    margin-bottom: 0;
  }
`

const BlockImage = styled(Img)`
  box-shadow: 15px 20px 95px rgba(0, 0, 0, 0.15);
  cursor: crosshair;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minMax(300px, 1fr));
  grid-gap: ${getSpace(24)};
  padding: ${getSpace(24)};

  @media (min-width: 1240px) {
    padding: 0;
    margin: ${({ space }) => (space === "large" ? getSpace(72) : getSpace(48))}
      0;
  }
`

const Card = styled.article`
  background: ${({ theme }) => theme.colors.offWhite};
  border-radius: 12px;
  padding: ${getSpace(24)};

  @media (min-width: 1240px) {
    padding: ${getSpace(32)};
  }
`

const CardIcon = styled(Logo)`
  color: ${({ theme }) => theme.colors.brand};
  width: 50px;
  margin-bottom: ${getSpace(20)};
`
const CardTitle = styled.h3`
  font-size: ${({ theme }) => getSpace(theme.fontSizes[3])};
  font-weight: 800;
  line-height: 1.3;
  margin: 0 0 ${getSpace(12)};

  @media (min-width: 1240px) {
    font-size: ${({ theme }) => getSpace(theme.fontSizes[4])};
  }
`
const CardContent = styled.p`
  font-size: ${({ theme }) => getSpace(theme.fontSizes[0])};
  line-height: 1.5;
  margin: 0;
`

const HelpCopy = styled.p`
  font-size: ${({ theme }) => getSpace(theme.fontSizes[1])};
  line-height: 1.4;
  text-align: left;
  max-width: ${getSpace(570)};
  margin: 0;

  a {
    font-weight: 800;
  }

  &:not(:last-of-type) {
    margin-bottom: 1em;
  }
`

const HelpGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${getSpace(32)};
  padding: ${getSpace(24)};
  margin: ${getSpace(72)} 0;

  @media (min-width: 1024px) {
    grid-template-columns: minMax(300px, 1fr) minMax(600px, 2fr);
  }

  @media (min-width: 1240px) {
    padding: 0;
  }
`

const HelpColumn = styled.div``

const HelpPanel = styled(AccordionItem)`
  background: ${({ theme }) => theme.colors.offBlue};
  border-radius: 12px;
  padding: ${getSpace(16)};

  @media (min-width: 1240px) {
    padding: ${getSpace(32)};
  }

  &:not(:last-of-type) {
    margin-bottom: ${getSpace(24)};
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
  font-size: ${({ theme }) => getSpace(theme.fontSizes[1])};
  line-height: 1.3;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  cursor: pointer;

  @media (min-width: 1240px) {
    font-size: ${({ theme }) => getSpace(theme.fontSizes[4])};
  }

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
      "Code for IBM i has simple integrated browsers for source-physical files and the IFS.",
  },
  {
    title: "Inline Compiling",
    content:
      "Compile any ILE language right from the editor. Easily configure your editor to add support for more languages.",
  },
  {
    title: "Syntax Highlighting",
    content:
      "Support for majority of ILE languages: RPG, CLLE, C, C++ and even COBOL, thanks to @barrettotte!",
  },
  {
    title: "Intuitive Design",
    content:
      "We’ve built the extension for simplicity. We cut down on clutter and made it easy to get started with.",
  },
  {
    title: "Inline Error List",
    content:
      "We’ve made the error listing easy to use. We show you everything you need to know about your compile.",
  },
  {
    title: "Plugin System",
    content:
      "Code for IBM i is not only an extension, it is an extension that you can use to build your own IBM i tools.",
  },
]

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      compiling: file(relativePath: { eq: "compiling.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      codeCoverage: file(relativePath: { eq: "coverage.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gitPlugin: file(relativePath: { eq: "git-client.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Code for IBM i" />
      <CenterSection>
        <Title>The future of IBM&nbsp;i</Title>
        <Intro>
          Bring your development up to speed with the fastest, most advanced
          cross-platform tool for IBM&nbsp;i development yet.
        </Intro>
        <ButtonGroup>
          <Button
            variant="icon"
            href="https://marketplace.visualstudio.com/items?itemName=HalcyonTechLtd.code-for-ibmi"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              style={{ marginRight: "0.5em" }}
            >
              <path fill="currentColor" d="M239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3zM256 68.4l192 72v1.1l-192 78-192-78v-1.1l192-72zm32 356V275.5l160-65v133.9l-160 80z"/>
            </svg>
            Try
          </Button>
          <Button
            variant="icon"
            href="https://code.ileditor.dev/pro"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
              style={{ marginRight: "0.5em" }}
            >
              <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
            </svg>
            Buy
          </Button>
        </ButtonGroup>
      </CenterSection>
      <HeroSection>
        <HeroVideoWrapper>
          <HeroVideo autoPlay muted loop>
            <source src={Video} type="video/mp4" />
          </HeroVideo>
        </HeroVideoWrapper>
        <Hero src={hero} alt="" />
      </HeroSection>
      <Block id="features">
        <BlockContent>
          <BlockIcon>
            <ConsoleIcon />
          </BlockIcon>
          <BlockTitle>No hassle compiling</BlockTitle>
          <BlockCopy>
            Don’t take your hands away from the keyboard. When you’re working on
            your RPG, COBOL or C applications, it doesn’t even take one click to
            compile your applications and see error listings.
          </BlockCopy>
        </BlockContent>
        <BlockMedia>
          <Tilt
            options={{
              reverse: true,
              max: 25,
              speed: 1000,
              reset: false,
            }}
            style={{
              transform:
                "perspective(1000px) rotateY(-12deg) scale3d(1.1, 1.1, 1.1)",
            }}
          >
            <BlockImage
              fluid={data.compiling.childImageSharp.fluid}
              alt="Code Compiling example"
            />
          </Tilt>
        </BlockMedia>
      </Block>
      <Block alternate>
        <BlockContent>
          <BlockIcon>
            <ConsoleIcon />
          </BlockIcon>
          <BlockTitle>See it on the inside</BlockTitle>
          <BlockCopy>
            Code for IBM i Pro includes support to streamline your coverage tests right within the IDE.
            We make creating, maintaining and running your tests as simple as a click.
          </BlockCopy>
        </BlockContent>
        <BlockMedia>
          <Tilt
            options={{
              reverse: true,
              max: 25,
              speed: 1000,
              reset: false,
            }}
            style={{
              transform:
                "perspective(1000px) rotateY(12deg) scale3d(1.1, 1.1, 1.1)",
            }}
          >
            <BlockImage
              fluid={data.codeCoverage.childImageSharp.fluid}
              alt="Code Coverage example"
            />
          </Tilt>
        </BlockMedia>
      </Block>
      <Block>
        <BlockContent>
          <BlockIcon>
            <ConsoleIcon />
          </BlockIcon>
          <BlockTitle>Watch it grow</BlockTitle>
          <BlockCopy>
            We want developers to live in the future, which is why Code for IBM i
            comes with a git plugin for IBM&nbsp;i. Develop in any language in
            the IFS (including RPG, COBOL, C, PHP, etc) and use the git plugin
            to track &amp; manage source.
          </BlockCopy>
        </BlockContent>
        <BlockMedia>
          <Tilt
            options={{
              reverse: true,
              max: 25,
              speed: 1000,
              reset: false,
            }}
            style={{
              transform:
                "perspective(1000px) rotateY(-12deg) scale3d(1.1, 1.1, 1.1)",
            }}
          >
            <BlockImage
              fluid={data.gitPlugin.childImageSharp.fluid}
              alt="Git Plugin example"
            />
          </Tilt>
        </BlockMedia>
      </Block>
      <Section>
        <Grid>
          {Cards.map(card => (
            <Card key={card.title}>
              <CardIcon />
              <CardTitle>{card.title}</CardTitle>
              <CardContent>{card.content}</CardContent>
            </Card>
          ))}
        </Grid>
      </Section>
      <Pricing />
      <Section id="help">
        <HelpGrid space="large">
          <HelpColumn>
            <Subtitle style={{ textAlign: "left" }}>Help &amp; FAQs</Subtitle>
            <HelpCopy>
              We’re here to help you get set up and using the Code for IBM i with
              ease.
            </HelpCopy>
            <HelpCopy>Don’t see an answer to your question?</HelpCopy>
            <HelpCopy>
              <a href="mailto:support@ileditor.dev">Get in touch.</a>
            </HelpCopy>
          </HelpColumn>
          <HelpColumn>
            <Accordion collapsible multiple>
              <HelpPanel>
                <HelpTitleWrap>
                  <HelpTitle>
                    <span>Can I get a free trial?</span>
                    <HelpIcon />
                  </HelpTitle>
                </HelpTitleWrap>
                <HelpContent>
                  Code for IBM i is <a href="https://marketplace.visualstudio.com/items?itemName=HalcyonTechLtd.code-for-ibmi">completely free</a>
                  {" "}and <a href="https://github.com/halcyon-tech/code-for-ibmi">open-source</a>. Who needs a trial when you can use it for as long as you want!
                </HelpContent>
              </HelpPanel>
              <HelpPanel>
                <HelpTitleWrap>
                  <HelpTitle>
                    <span>Can my team get support?</span>
                    <HelpIcon />
                  </HelpTitle>
                </HelpTitleWrap>
                <HelpContent>
                  Absolutely. We want to help you in any way possible. If you are in need of support
                  with Code for IBM i, you can reach out to{" "}
                  <a href="mailto:support@ileditor.dev">support@ileditor.dev</a>
                  .
                </HelpContent>
              </HelpPanel>
              <HelpPanel>
                <HelpTitleWrap>
                  <HelpTitle>
                    <span>Where can I report a bug?</span>
                    <HelpIcon />
                  </HelpTitle>
                </HelpTitleWrap>
                <HelpContent>
                  You can report a bug for Code for IBM i or the website on the
                  public{" "}
                  <a
                    href="https://github.com/halcyon-tech/code-for-ibmi/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub repository
                  </a>
                  .
                </HelpContent>
              </HelpPanel>
              <HelpPanel>
                <HelpTitleWrap>
                  <HelpTitle>
                    <span>How do I get started with Code for IBM i?</span>
                    <HelpIcon />
                  </HelpTitle>
                </HelpTitleWrap>
                <HelpContent>
                  Either check out our <Link to="/docs">documentation</Link> or
                  see our introductory videos.
                </HelpContent>
              </HelpPanel>
            </Accordion>
          </HelpColumn>
        </HelpGrid>
      </Section>
    </Layout>
  )
}

export default Home
