import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

export default ({ location, title }) => {
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
      <HeaderTitleWrapper>
        <HeaderTitle style={headerTitleStyle}>
          <HeaderTitleLink to={`/`}>{title}</HeaderTitleLink>
        </HeaderTitle>
        {subtitle}
      </HeaderTitleWrapper>
      <Link
        style={{ boxShadow: "-0.2px 1px 0 0 var(--secondary)" }}
        to="/about"
      >
        <Text>About me</Text>
      </Link>
    </Header>
  )
}

const Text = styled.p`
  margin-bottom: 0;
`

const Header = styled.header`
  margin-bottom: ${rhythm(1.5)};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const HeaderTitleWrapper = styled.span`
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
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
