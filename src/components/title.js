import React from "react"
import styled from "styled-components"
import { getSpace } from "../theme"

const Title = styled.h1`
  margin-bottom: 0.5rem;
`

const Date = styled.p`
  margin-top: 0;
  margin-bottom: ${getSpace(40)};
  color: ${({ theme }) => theme.colors.offBlack};
`

export default ({ title, date, datetime }) => (
  <>
    <Title>{title}</Title>
    <Date>
      Last Updated: <time dateTime={datetime}>{date}</time>
    </Date>
  </>
)
