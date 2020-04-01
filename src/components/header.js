import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { getSpace } from "../theme"
import logo from "../assets/logo.svg"

const Header = styled.header`
  background: ${({ theme, solid }) =>
    solid ? theme.colors.white : "transparent"};
  z-index: 10;

  ${({ sticky }) =>
    sticky &&
    css`
      position: sticky;
      top: 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
    `}
`

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.wrapper};
  margin: 0 auto;
  padding: ${({ slim }) => (slim ? getSpace(28) : getSpace(56))} 0;
  z-index: 10;
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

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.brand};
  }
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

export default ({ slim, sticky, solid }) => (
  <Header sticky={sticky} solid={solid}>
    <Construction>Under Construction</Construction>
    <Wrapper slim={slim}>
      <Link to="/">
        <img src={logo} alt="ILEditor2 Logo" />
      </Link>
      <Nav>
        <NavLink to="/#features">Features</NavLink>
        <NavLink to="/docs">Documentation</NavLink>
        <NavLink to="/#roadmap">Roadmap</NavLink>
        <NavLink to="/#help">Help &amp; FAQs</NavLink>
      </Nav>
      <Button href="/">Buy Now</Button>
    </Wrapper>
  </Header>
)
