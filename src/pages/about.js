import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/Layout.component"
import SEO from "../components/Seo.component"
import { rhythm } from "../utils/typography"

class AboutMe extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const author = data.site.siteMetadata.author

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="About me"
          keywords={[`blog`, `Caio Ferreira`, `javascript`]}
        />
        <AvatarWrapper>
          <Avatar
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        </AvatarWrapper>
        <Description>
          <p>
            I am a Software Engineer currently working at B2W, the biggest
            online retailer in Latin America. There, me and my team tackle the
            challenges of a fast pacing market and the complexity of
            e-commerce's domain.
          </p>
          <p>
            Being passionate by knowlegde, my interests spread from philosophy,
            through football, to functional programming and software
            architecture.
          </p>
          <p>
            I'm always lurking for simpler ways to build software and I will be
            sharing this journey here, so please feel free to comment and
            present new ideas.
          </p>
        </Description>
      </Layout>
    )
  }
}

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Avatar = styled(Image)`
  margin-top: ${rhythm(1.5)};
  min-width: 0;
  border-radius: 100%;
`

const Description = styled.div`
  margin-top: ${rhythm(1.5)};
`

export default AboutMe

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/me.png/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        title
      }
    }
  }
`
