import React from "react"
import styled from "styled-components"
import { getSpace } from "../theme"

const Footer = styled.footer`
  padding: ${getSpace(16)} 0;
`

export default () => <Footer>© {new Date().getFullYear()} Halcyon Tech</Footer>
