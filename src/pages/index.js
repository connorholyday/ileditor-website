import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Tilt from "react-tilt"
import { getSpace } from "../theme"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo"
import hero from "../assets/hero.svg"
import ArrowCircle from "../components/arrow-circle"
import ConsoleIcon from "../components/console"
// import Roadmap from "../components/roadmap"
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
  padding: 48px 64px;
  margin-bottom: 104px;
  display: flex;
  flex-direction: ${({ alternate }) => (alternate ? "row-reverse" : "row")};

  ${BlockContent} {
    padding: 72px 0;
    ${({ alternate }) =>
      alternate ? "margin-left: 128px;" : "margin-right: 128px;"}
  }

  ${BlockMedia} {
    ${({ alternate }) =>
      alternate ? "margin-left: -112px;" : "margin-right: -112px;"}
  }
`

const BlockIcon = styled.div`
  width: 51px;
`

const BlockTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
  font-weight: 800;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.grey};
  margin: 24px 0 16px;
`

const BlockCopy = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.grey};
`

const BlockImage = styled(Img)`
  box-shadow: 15px 20px 95px rgba(0, 0, 0, 0.15);
  cursor: crosshair;
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
      <SEO title="ILEditor - The future of IBM i" />
      <CenterSection>
        <Title>The future of IBM i</Title>
        <Intro>
          Bring your development up to speed with the fastest, most advanced
          tool for IBM i development yet.
        </Intro>
        <Button href="https://ileditorweb.herokuapp.com/signup">
          Get started today
        </Button>
      </CenterSection>
      <section>
        <Hero src={hero} alt="" />
      </section>
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
            ILEditor 2 comes with built-in code coverage support. Not only can
            you develop your applications, but you can set up test cases to see
            what code is actually being run.
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
            We want developers to live in the future, which is why ILEditor 2
            comes with a git plugin for IBM i. Develop in any language in the
            IFS (including RPG, COBOL, C, PHP, etc) and use the git plugin to
            track &amp; manage source.
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
      <section style={{ marginBottom: "160px" }}>
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
      {/* <Roadmap /> */}
      <section id="help" style={{ marginBottom: "160px" }}>
        <HelpGrid space="large">
          <HelpColumn>
            <Subtitle style={{ textAlign: "left" }}>Help &amp; FAQs</Subtitle>
            <HelpCopy>
              We’re here to help you get set up and using the ILEditor with
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
                  While ILEditor 2 is in open-beta, we are not offering free
                  trials. You can expect to see this by the time we reach 1.0.
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
                  Absolutely. We are still working out the kinks but we want to
                  help you in any way possible. If you are in need of support
                  with ILEditor 2, you can reach out to{" "}
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
                  You can report a bug for ILEditor 2 or the website on the
                  public{" "}
                  <a
                    href="https://github.com/halcyon-tech/ileditor2-issues/issues"
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
                    <span>How do I get started with ILEditor 2?</span>
                    <HelpIcon />
                  </HelpTitle>
                </HelpTitleWrap>
                <HelpContent>
                  Either check out our <Link to="/docs">documentation</Link> or
                  see our introductory videos.
                </HelpContent>
              </HelpPanel>
              <HelpPanel>
                <HelpTitleWrap>
                  <HelpTitle>
                    <span>COVID-19 Update</span>
                    <HelpIcon />
                  </HelpTitle>
                </HelpTitleWrap>
                <HelpContent>
                  If you are a software developer working for a medical or
                  healthcare business using IBM i, then we are happy to offer a
                  temporary free licence. Please contact us at{" "}
                  <a href="mailto:support@ileditor.dev">support@ileditor.dev</a>{" "}
                  to find out more.
                </HelpContent>
              </HelpPanel>
            </Accordion>
          </HelpColumn>
        </HelpGrid>
      </section>
    </Layout>
  )
}

export default Home
