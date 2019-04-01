import React from "react"
import { Link, graphql } from "gatsby"
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            style={{
              marginTop: rhythm(1.5),
              minWidth: 200,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        </div>
        <div style={{ marginTop: rhythm(1.5) }}>
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
        </div>
      </Layout>
    )
  }
}

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
