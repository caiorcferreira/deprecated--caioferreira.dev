import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"

import { StaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <BioWrapper>
            <Avatar
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              I am passionate by functional programming, software architecture
              and making simple code.
              {` `}
            </p>
          </BioWrapper>
        )
      }}
    />
  )
}

const BioWrapper = styled.div`
  display: flex;
  margin-top: ${rhythm(1)};
`

const Avatar = styled(Image)`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  min-width: 50px;
  border-radius: 100%;
`

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/me.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default Bio
