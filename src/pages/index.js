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
  padding: 16px 32px;
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
      "We’re building a plugin orientated system so we can easily extend your IDE. Git, RPG conversion and more, as plugins.",
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
      variables: file(relativePath: { eq: "variables.png" }) {
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
        <Title>The future of IBM&nbsp;i</Title>
        <Intro>
          Bring your development up to speed with the fastest, most advanced
          cross-platform tool for IBM&nbsp;i development yet.
        </Intro>
        <ButtonGroup>
          <Button
            variant="icon"
            href="https://github.com/halcyon-tech/ileditor2-issues/releases/download/v0.9.1/ILEditor-2-Setup-0.9.1.exe"
          >
            <svg
              role="img"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              style={{ marginRight: "0.5em" }}
            >
              <title>Windows icon</title>
              <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
            </svg>
            Windows
          </Button>
          <Button
            variant="icon"
            href="https://github.com/halcyon-tech/ileditor2-issues/releases/download/v0.9.1/ILEditor-2-0.9.1.dmg"
          >
            <svg
              role="img"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              style={{ marginRight: "0.5em" }}
            >
              <title>Apple icon</title>
              <path d="M7.078 23.55c-.473-.316-.893-.703-1.244-1.15-.383-.463-.738-.95-1.064-1.454-.766-1.12-1.365-2.345-1.78-3.636-.5-1.502-.743-2.94-.743-4.347 0-1.57.34-2.94 1.002-4.09.49-.9 1.22-1.653 2.1-2.182.85-.53 1.84-.82 2.84-.84.35 0 .73.05 1.13.15.29.08.64.21 1.07.37.55.21.85.34.95.37.32.12.59.17.8.17.16 0 .39-.05.645-.13.145-.05.42-.14.81-.31.386-.14.692-.26.935-.35.37-.11.728-.21 1.05-.26.39-.06.777-.08 1.148-.05.71.05 1.36.2 1.94.42 1.02.41 1.843 1.05 2.457 1.96-.26.16-.5.346-.725.55-.487.43-.9.94-1.23 1.505-.43.77-.65 1.64-.644 2.52.015 1.083.29 2.035.84 2.86.387.6.904 1.114 1.534 1.536.31.21.582.355.84.45-.12.375-.252.74-.405 1.1-.347.807-.76 1.58-1.25 2.31-.432.63-.772 1.1-1.03 1.41-.402.48-.79.84-1.18 1.097-.43.285-.935.436-1.452.436-.35.015-.7-.03-1.034-.127-.29-.095-.576-.202-.856-.323-.293-.134-.596-.248-.905-.34-.38-.1-.77-.148-1.164-.147-.4 0-.79.05-1.16.145-.31.088-.61.196-.907.325-.42.175-.695.29-.855.34-.324.096-.656.154-.99.175-.52 0-1.004-.15-1.486-.45zm6.854-18.46c-.68.34-1.326.484-1.973.436-.1-.646 0-1.31.27-2.037.24-.62.56-1.18 1-1.68.46-.52 1.01-.95 1.63-1.26.66-.34 1.29-.52 1.89-.55.08.68 0 1.35-.25 2.07-.228.64-.568 1.23-1 1.76-.435.52-.975.95-1.586 1.26z" />
            </svg>
            Mac OS
          </Button>
          <Button
            variant="icon"
            href="https://github.com/halcyon-tech/ileditor2-issues/releases/download/v0.9.1/ileditor2_0.9.1_amd64.deb"
          >
            <svg
              role="img"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              style={{ marginRight: "0.5em" }}
            >
              <title>Linux icon</title>
              <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zm3.279 17.68c-.766.441-1.029 1.422-.586 2.189.441.765 1.422 1.028 2.188.584.766-.441 1.029-1.422.585-2.189-.441-.765-1.421-1.028-2.187-.584zm-3.279-1c-.705 0-1.373-.157-1.971-.435L8.916 18.24c.93.459 1.978.721 3.084.721.646 0 1.268-.091 1.86-.256.104-.643.485-1.234 1.095-1.587.609-.351 1.313-.386 1.92-.156 1.186-1.163 1.957-2.749 2.07-4.515l-2.285-.033c-.21 2.391-2.215 4.266-4.66 4.266zM7.32 12c0-1.583.787-2.981 1.99-3.83L8.14 6.209c-1.404.93-2.445 2.369-2.881 4.035.506.404.83 1.034.83 1.74 0 .704-.324 1.319-.83 1.739.436 1.665 1.477 3.104 2.881 4.034l1.17-1.965C8.107 14.97 7.32 13.574 7.32 12zm-3.48-1.602c-.885 0-1.602.717-1.602 1.602s.717 1.602 1.602 1.602S5.441 12.885 5.441 12s-.716-1.602-1.601-1.602zM12 7.32c2.445 0 4.45 1.875 4.66 4.265l2.285-.034c-.113-1.765-.885-3.35-2.07-4.516-.609.232-1.313.194-1.92-.154-.609-.352-.99-.945-1.095-1.591-.594-.16-1.214-.25-1.86-.25-1.11 0-2.155.26-3.084.72l1.113 1.995c.6-.279 1.268-.435 1.971-.435zm3.279-1.001c.765.442 1.746.181 2.189-.585.441-.765.181-1.746-.588-2.19-.765-.44-1.746-.179-2.189.589-.441.764-.18 1.744.588 2.186z"/>
            </svg>
            Linux
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
            As well as code-coverage support, ILEditor 2 includes functionality
            to better navigate and understand you code - with features like "Go
            to Definition" and the ability to see all references at a glance.
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
              fluid={data.variables.childImageSharp.fluid}
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
                  Yes! Choose one of the buttons at the top of the page to begin
                  your download of ILEditor2 and click "Request a trial" to get
                  started, no account needed.
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
            </Accordion>
          </HelpColumn>
        </HelpGrid>
      </Section>
    </Layout>
  )
}

export default Home
