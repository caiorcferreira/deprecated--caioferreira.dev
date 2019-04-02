import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Footer from "./Footer"
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  renderHeader() {
    const { location, title } = this.props

    const headerTitleStyle = location.pathname.includes("/post/")
      ? {}
      : scale(0.8)

    const subtitle = (
      <Text>
        Simple Made <SubtitleDetail>Daily</SubtitleDetail> (or whenever I can)
      </Text>
    )

    return (
      <Header>
        <span>
          <HeaderTitle style={headerTitleStyle}>
            <HeaderTitleLink to={`/`}>{title}</HeaderTitleLink>
          </HeaderTitle>
          {subtitle}
        </span>
        <Link to="/about">
          <Text>About me</Text>
        </Link>
      </Header>
    )
  }

  render() {
    const { children } = this.props

    return (
      <Background>
        <Container>
          {this.renderHeader()}
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
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  min-height: 100vh;
  color: var(--primary);
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)} ${rhythm(1 / 2)} ${rhythm(3 / 4)};
`

const Text = styled.p`
  margin-bottom: 0;
`

const Header = styled.header`
  margin-bottom: ${rhythm(1.5)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderTitle = styled.h1`
  margin-bottom: 0;
  margin-top: 0;
`

const HeaderTitleLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const SubtitleDetail = styled.span`
  color: var(--secondary);
  text-decoration: line-through;
`

export default Layout
