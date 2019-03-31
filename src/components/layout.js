import React from "react"
import { Link } from "gatsby"
import Footer from "./Footer"
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  renderHeader() {
    const { location, title } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    const subtitle = (
      <p>
        Simple Made{" "}
        <span
          style={{
            color: "var(--secondary)",
            textDecoration: "line-through",
          }}
        >
          Daily
        </span>{" "}
        (or whenever I can)
      </p>
    )

    if (location.pathname === rootPath) {
      return (
        <div style={{ marginBottom: rhythm(1.5) }}>
          <h1
            style={{
              ...scale(0.8),
              marginBottom: 0,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          {subtitle}
        </div>
      )
    } else {
      return (
        <span>
          <h3
            style={{
              marginBottom: 0,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h3>
          {subtitle}
        </span>
      )
    }
  }

  render() {
    const { children } = this.props

    return (
      <div
        style={{
          background: "var(--bg)",
        }}
      >
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            color: `var(--primary)`,
            padding: `
              ${rhythm(1.5)} 
              ${rhythm(3 / 4)} 
              ${rhythm(1 / 2)} 
              ${rhythm(3 / 4)}
            `,
          }}
        >
          <header>{this.renderHeader()}</header>
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout
