import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

import Header from "./Header.component"
import Footer from "./Footer"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    const { location, title } = this.props

    return (
      <Background>
        <Container>
          <Header location={location} title={title} />
          <main>{children}</main>
          <Footer />
        </Container>
      </Background>
    )
  }
}

const Background = styled.div`
  background: var(--bg);
  height: 100%;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  min-height: 100vh;
  color: var(--primary);
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)} ${rhythm(1 / 2)} ${rhythm(3 / 4)};
`

export default Layout
