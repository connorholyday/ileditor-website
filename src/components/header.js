import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { getSpace } from "../theme"
import logo from "../assets/logo.svg"

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.wrapper};
  margin: ${getSpace(56)} auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
`

const NavLink = styled(Link)`
  font-weight: 500;
  font-size: ${({ theme }) => getSpace(theme.fontSizes[0])};
  line-height: 1.2;
  text-align: center;
  color: #000000;
  text-decoration: none;
  margin: 0 ${getSpace(20)};
`

const Button = styled.a`
  font-weight: 800;
  font-size: ${({ theme }) => getSpace(theme.fontSizes[1])};
  line-height: 1.3;
  text-decoration: none;
  text-align: center;
  color: ${({ theme }) => theme.colors.brand};
  padding: ${({ theme }) =>
    `${getSpace(theme.fontSizes[0])} ${getSpace(theme.fontSizes[4])}`};
  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(0, 101, 255, 0.13);
  border-radius: 4px;
`

const Construction = styled.div`
  position: fixed;
  top: 1em;
  left: 1em;
  color: white;
  font-weight: bold;
  font-size: 16px;
  background: #fd9644;
  padding: 0.5em;
  border-radius: 8px;
`

const Header = () => (
  <header>
    <Construction>Under Construction</Construction>
    <Wrapper>
      <img src={logo} alt="ILEDITOR Logo" />
      <Nav>
        <NavLink to="/#features">Features</NavLink>
        <NavLink to="/documentation">Documentation</NavLink>
        <NavLink to="/#roadmap">Roadmap</NavLink>
        <NavLink to="/#help">Help &amp; FAQs</NavLink>
      </Nav>
      <Button href="/">Buy Now</Button>
    </Wrapper>
  </header>
)

export default Header
