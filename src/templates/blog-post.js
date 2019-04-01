import React from "react"
import { Link, graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Image from "gatsby-image"

import Bio from "../components/Bio.component"
import Layout from "../components/Layout.component"
import SEO from "../components/Seo.component"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const coverImage = post.frontmatter.cover_image

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1>{post.frontmatter.title}</h1>
        {Boolean(coverImage) && (
          <Image
            sizes={coverImage.childImageSharp.sizes}
            alt="Post Cover Image"
            style={{
              marginLeft: "-50%",
              marginRight: "-50%",
              marginBottom: rhythm(2),
              maxHeight: "28rem",
            }}
          />
        )}
        <p
          style={{
            ...scale(-1 / 10),
            display: `flex`,
            justifyContent: "space-between",
            color: `var(--secondary)`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          <span>{post.frontmatter.date}</span>
          <span>{post.timeToRead} min read</span>
        </p>
        <div
          style={{ textAlign: "justify" }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      timeToRead
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        cover_image {
          publicURL
          childImageSharp {
            sizes(maxWidth: 1240) {
              srcSet
              sizes
              src
              aspectRatio
            }
          }
        }
      }
    }
  }
`
