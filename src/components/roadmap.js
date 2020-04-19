import React from "react"
import styled from "styled-components"
import { getSpace } from "../theme"

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
  grid-gap: ${getSpace(24)};
  margin: ${({ space }) => (space === "large" ? getSpace(72) : getSpace(48))} 0;
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

const Roadmap = () => {
  return (
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
  )
}

export default Roadmap
