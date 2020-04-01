import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.wrapper};
  margin: 0 auto;
`

export default ({ children }) => <Wrapper>{children}</Wrapper>
