import React from "react"
import styled from "styled-components"
import Wrapper from "./wrapper"
import { getSpace } from "../theme"

const Footer = styled.footer`
  padding: ${getSpace(24)};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: 640px) {
    padding: ${getSpace(60)} ${getSpace(24)};
  }

  @media (min-width: 1240px) {
    padding: ${getSpace(60)} 0;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Copyright = styled.p`
  margin-top: ${getSpace(16)};
  margin-bottom: 0;

  @media (min-width: 640px) {
    margin: 0;
  }
`

const Link = styled.a`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.brand};
  }

  svg {
    margin-left: 0.5em;
  }
`

export default () => (
  <Footer>
    <Wrapper>
      <Content>
        <Copyright>© {new Date().getFullYear()} Halcyon Tech</Copyright>
        <Link
          href="https://twitter.com/ILEditor2"
          target="_blank"
          rel="noopener"
        >
          Follow us on Twitter
          <svg
            width="16"
            heght="16"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"
            />
          </svg>
        </Link>
      </Content>
    </Wrapper>
  </Footer>
)
