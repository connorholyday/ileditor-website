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
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
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

const Home = styled.div`
  flex: 1;
`

const Nav = styled.nav`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NavLink = styled(Link)`
  font-weight: 500;
  font-size: ${({ theme }) => getSpace(theme.fontSizes[0])};
  line-height: 1.2;
  text-align: center;
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.black};
  text-decoration: none;
  margin: 0 ${getSpace(20)};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -4px;
    right: -8px;
    bottom: -4px;
    left: -8px;
    background: transparent;
    border-radius: 4px;
    z-index: -1;
    ${({ theme, active }) => active && `background: ${theme.colors.brand};`}
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};

    &::before {
      background: ${({ theme }) => theme.colors.brand};
    }
  }
`

const Buttons = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

const Button = styled.a`
  font-weight: 800;
  font-size: ${({ theme }) => getSpace(theme.fontSizes[1])};
  line-height: 1.3;
  text-decoration: none;
  text-align: center;
  color: ${({ theme }) => theme.colors.brand};
  padding: 12px 24px;
  background: #ffffff;
  border: 2px solid ${({ theme }) => theme.colors.brand};
  border-radius: 8px;
  transition: all 0.1s linear;

  &:first-child {
    margin-right: 16px;
  }

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.brand};
    color: ${({ theme }) => theme.colors.white};
  }
`

export default ({ slim, sticky, solid }) => (
  <Header sticky={sticky} solid={solid}>
    <Wrapper slim={slim}>
      <Home>
        <Link to="/">
          <img src={logo} alt="ILEditor2 Logo" />
        </Link>
      </Home>
      <Nav>
        <NavLink to="/#features">Features</NavLink>
        <NavLink to="/docs">Documentation</NavLink>
        <NavLink to="/#roadmap">Roadmap</NavLink>
        <NavLink to="/#help">FAQs</NavLink>
        <NavLink to="/#pricing">Pricing</NavLink>
      </Nav>
      <Buttons>
        <Button href="https://ileditorweb.herokuapp.com/signup">Sign Up</Button>
        <Button href="https://ileditorweb.herokuapp.com/login">Sign In</Button>
      </Buttons>
    </Wrapper>
  </Header>
)
