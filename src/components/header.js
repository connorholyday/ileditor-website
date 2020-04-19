import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { getSpace } from "../theme"
import logo from "../assets/logo.svg"
import Menu from "./menu"
import Close from "./close"

const Hamburger = styled(Menu)`
  @media (min-width: 678px) {
    display: none;
  }
`

const CloseIcon = styled(Close)`
  position: fixed;
  top: 3.3em;
  right: 1.8em;

  @media (min-width: 678px) {
    display: none;
  }
`

const Header = styled.header`
  background: ${({ theme, solid }) =>
    solid ? theme.colors.white : "transparent"};
  z-index: 10;
  position: relative;

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
  padding: 2rem;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 678px) {
    padding: ${({ slim }) => (slim ? getSpace(28) : getSpace(56))} 0;
  }
`

const Home = styled.div`
  flex: 1;
`

const Nav = styled.nav`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: white;

  @media (min-width: 678px) {
    position: static;
    flex: 2;
    display: flex;
    flex-direction: row;
    background: none;
  }
`

const NavLink = styled(Link)`
  font-weight: 500;
  font-size: ${({ theme }) => getSpace(theme.fontSizes[4])};
  line-height: 1.2;
  text-align: center;
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.black};
  text-decoration: none;
  margin: 0;
  position: relative;
  padding: ${getSpace(32)} ${getSpace(8)};
  width: 100%;

  @media (min-width: 678px) {
    font-size: ${({ theme }) => getSpace(theme.fontSizes[0])};
    padding: 0;
    margin: 0 ${getSpace(20)};
    width: auto;

    &::before {
      display: block;
    }
  }

  &::before {
    display: none;
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
  display: none;

  @media (min-width: 678px) {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
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
    margin-right: ${getSpace(16)};
  }

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.brand};
    color: ${({ theme }) => theme.colors.white};
  }
`

export default ({ slim, sticky, solid }) => {
  const [open, setOpen] = React.useState(true)
  return (
    <Header sticky={sticky} solid={solid}>
      <Wrapper slim={slim}>
        <Home>
          <Link to="/">
            <img src={logo} alt="ILEditor2 Logo" />
          </Link>
        </Home>
        <Nav isOpen={open}>
          <CloseIcon onClick={() => setOpen(false)} />
          <NavLink to="/#features">Features</NavLink>
          <NavLink to="/docs">Documentation</NavLink>
          <NavLink to="/#help">FAQs</NavLink>
          <NavLink to="/#pricing">Pricing</NavLink>
        </Nav>
        <Buttons>
          <Button href="https://ileditorweb.herokuapp.com/signup">
            Sign Up
          </Button>
          <Button href="https://ileditorweb.herokuapp.com/login">
            Sign In
          </Button>
        </Buttons>
        <Hamburger onClick={() => setOpen(true)} />
      </Wrapper>
    </Header>
  )
}
