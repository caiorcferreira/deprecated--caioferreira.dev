import React from "react"
import styled from "styled-components"
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
          <CoverImage
            sizes={coverImage.childImageSharp.sizes}
            alt="Post Cover Image"
          />
        )}
        <Metadata>
          <span>{post.frontmatter.date}</span>
          <span>{post.timeToRead} min read</span>
        </Metadata>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        <Divider />
        <Bio />

        <Navigation>
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
        </Navigation>
      </Layout>
    )
  }
}

const CoverImage = styled(Image)`
  margin-left: -50%;
  margin-right: -50%;
  margin-bottom: ${rhythm(2)};
  max-height: 28rem;
`

const Metadata = styled.p`
  display: flex;
  justify-content: space-between;
  color: var(--secondary);
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(-1)};
`

const Content = styled.section`
  text-align: justify;
`

const Divider = styled.hr`
  margin-bottom: ${rhythm(1)};
`

const Navigation = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

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
