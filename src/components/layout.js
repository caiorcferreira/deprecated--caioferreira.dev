import React from "react"
import { Link } from "gatsby"
import Footer from "./Footer"
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  renderHeader() {
    const { location, title } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    const headerTitleStyle = location.pathname.includes("/post/")
      ? {}
      : scale(0.8)

    const subtitle = (
      <p style={{ marginBottom: 0 }}>
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

    return (
      <section
        style={{
          marginBottom: rhythm(1.5),
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>
          <h1
            style={{
              ...headerTitleStyle,
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
        </span>
        <Link to="/about">
          <p style={{ marginBottom: 0 }}>About me</p>
        </Link>
      </section>
    )
  }

  render() {
    const { children } = this.props

    return (
      <div
        style={{
          background: "var(--bg)",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            minHeight: "100vh",
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
