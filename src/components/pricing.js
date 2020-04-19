import React from "react"
import styled from "styled-components"
import { getSpace } from "../theme"

const Icon1 = styled(props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="82"
    height="82"
    fill="none"
    viewBox="0 0 82 82"
    {...props}
  >
    <path
      fill="#fff"
      stroke="url(#paint0_linear)"
      strokeWidth="7"
      d="M4.95 41L41 4.95 77.05 41 41 77.05 4.95 41z"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="0.694"
        x2="84.278"
        y1="-4.016"
        y2="88.338"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#47BDFF"></stop>
        <stop offset="0" stopColor="#6FFAF2"></stop>
        <stop offset="0.365" stopColor="#62E3FF"></stop>
        <stop offset="0.646" stopColor="#62E3FF"></stop>
        <stop offset="1" stopColor="#4FFFB5"></stop>
      </linearGradient>
    </defs>
  </svg>
))`
  position: absolute;
  top: -55px;
  left: 0;
  z-index: -1;
`
const Icon2 = styled(props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="62"
    height="62"
    fill="none"
    viewBox="0 0 62 62"
    {...props}
  >
    <path
      fill="#33BEDC"
      fillOpacity="0.4"
      d="M0 31L31 0l31 31-31 31L0 31z"
    ></path>
  </svg>
))`
  position: absolute;
  bottom: 48px;
  right: -48px;
  z-index: -1;
`

const Icon3 = styled(props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="49"
    height="49"
    fill="none"
    viewBox="0 0 49 49"
    {...props}
  >
    <path fill="#6FF8D1" d="M0 24.5L24.5 0 49 24.5 24.5 49 0 24.5z"></path>
  </svg>
))`
  position: absolute;
  top: -39px;
  right: 82px;
  z-index: -1;
`

const Icon4 = styled(props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="42"
    height="42"
    fill="none"
    viewBox="0 0 42 42"
    {...props}
  >
    <path
      fill="#fff"
      stroke="url(#paint0_linear)"
      strokeWidth="5"
      d="M38.465 21L21 38.465 3.536 21 21 3.536 38.465 21z"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="41.644"
        x2="-1.167"
        y1="44.057"
        y2="-3.246"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#47BDFF"></stop>
        <stop offset="0" stopColor="#6FFAF2"></stop>
        <stop offset="0.365" stopColor="#62E3FF"></stop>
        <stop offset="0.646" stopColor="#62E3FF"></stop>
        <stop offset="1" stopColor="#4FFFB5"></stop>
      </linearGradient>
    </defs>
  </svg>
))`
  position: absolute;
  bottom: 37px;
  right: 10px;
  z-index: -1;
`

const SmallButton = styled.a`
  font-weight: 800;
  font-size: 18px;
  line-height: 1.3;
  text-decoration: none;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.brand};
  border: 2px solid ${({ theme }) => theme.colors.brand};
  padding: 16px 24px;
  border-radius: 8px;
  transition: all 0.1s linear;
  display: inline-block;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.brand};
    background: ${({ theme }) => theme.colors.white};
  }
`

const Pricing = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${getSpace(24)};
  padding: ${getSpace(56)} ${getSpace(24)};
  margin-bottom: ${getSpace(80)};
  overflow: hidden;

  @media (min-width: 678px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0;
    margin-bottom: ${getSpace(160)};
  }
`

const PricingMain = styled.div`
  position: relative;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.offWhite};
  padding: ${getSpace(24)};

  @media (min-width: 678px) {
    grid-column: span 2;
    padding: ${getSpace(56)};
  }
`

const Pill = styled.span`
  background: #12ca88;
  border-radius: 6px;
  padding: 4px 12px;
  font-weight: 800;
  font-size: 14px;
  line-height: 1.5;
  color: #ffffff;
  display: inline-block;
  margin-bottom: 16px;
`

const PricingTitle = styled.h4`
  font-weight: 800;
  font-size: 28px;
  line-height: 1.3;
  margin: 0 0 24px;

  @media (min-width: 678px) {
    max-width: 485px;
  }
`

const PriceContainer = styled.div`
  margin-bottom: 24px;
`

const Price = styled.span`
  font-weight: bold;
  font-size: 40px;
  line-height: 1.3;
  margin-right: 8px;
`

const PriceDetail = styled.span`
  font-weight: bold;
  font-size: 18px;
  line-height: 1.5;
`

const PriceList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  margin: 0 0 24px;
  padding: 0;

  @media (min-width: 678px) {
    grid-template-columns: 1fr 1fr;
  }
`

const PriceItem = styled.li`
  margin: 0;
  padding: 0 0 0 28px;
  max-width: 260px;
  font-size: 16px;
  color: #333;
  line-height: 1.5;
  position: relative;

  &::before {
    content: "";
    width: 0.71rem;
    height: 0.71rem;
    position: absolute;
    top: 5px;
    left: 0;
    background: linear-gradient(
      137.85deg,
      #47bdff -2.17%,
      #6ffaf2 -2.16%,
      #62e3ff 37.04%,
      #62e3ff 67.29%,
      #4fffb5 105.38%
    );
    transform: rotate(45deg);
  }
`

const PricingAside = styled.div`
  position: relative;
`

const PricingAsideContainer = styled.div`
  background: #f4fbff;
  border-radius: 12px;
  margin-bottom: 16px;
  padding: 40px 32px;
`

const PricingAsideTitle = styled.h4`
  font-weight: 800;
  font-size: 28px;
  line-height: 1.3;
  color: #40b2f1;
  margin: 0 0 16px;
`

const PricingAsideCopy = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #333333;
  margin: 0 0 24px;
`

const PricingAsideAsterisk = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #676767;
  margin: 0;
`

export default () => (
  <Pricing id="pricing">
    <PricingMain>
      <Icon1 />
      <Icon2 />
      <Pill>Limited offer</Pill>
      <PricingTitle>Sign up today and join our community</PricingTitle>
      <PriceContainer>
        <Price>£24.99</Price>
        <PriceDetail>per month</PriceDetail>
      </PriceContainer>
      <PriceList>
        <PriceItem>Rolling monthly contract, cancel any time!</PriceItem>
        <PriceItem>Regular updates and on-hand support</PriceItem>
        <PriceItem>
          View all issues and feature requests on our public board
        </PriceItem>
        <PriceItem>Open plugin system coming soon</PriceItem>
      </PriceList>
      <SmallButton href="https://ileditorweb.herokuapp.com/signup">
        Sign Up
      </SmallButton>
    </PricingMain>
    <PricingAside>
      <Icon3 />
      <Icon4 />
      <PricingAsideContainer>
        <PricingAsideTitle>COVID-19 Notice</PricingAsideTitle>
        <PricingAsideCopy>
          We are offereing free* licences to software developers working in the
          medical or healthcare industry using IBM&nbsp;i.
        </PricingAsideCopy>
        <SmallButton href="mailto:support@ileditor.dev">
          Get in touch
        </SmallButton>
      </PricingAsideContainer>
      <PricingAsideAsterisk>
        * This license will be free for one month
      </PricingAsideAsterisk>
    </PricingAside>
  </Pricing>
)
