import React from "react"
import Twiter from "../../content/assets/img/social/twitter.svg"
import Dev from "../../content/assets/img/social/dev.svg"
import Github from "../../content/assets/img/social/github.svg"
import Medium from "../../content/assets/img/social/medium.svg"
import Linkedin from "../../content/assets/img/social/linkedin.svg"
import { rhythm } from "../utils/typography"

const FooterLink = ({ children, ...props }) => (
  <a
    style={{
      boxShadow: "none",
      color: "var(--secondary)",
      marginRight: rhythm(1 / 2),
    }}
    target="_blank"
    {...props}
  >
    {children}
  </a>
)

const ICON_STYLE = {
  height: "30",
  width: "30",
  fill: "var(--secondary)",
}

export default () => (
  <footer
    style={{
      alignItem: "end",
      marginTop: rhythm(2.5),
    }}
  >
    <div>
      <FooterLink href="https://twitter.com/caiorcferreira">
        <Twiter alt="Caio Ferreira's Twitter Profile" style={ICON_STYLE} />
      </FooterLink>
      <FooterLink href="https://dev.to/caiorcferreira">
        <Dev alt="Caio Ferreira's DEV Profile" style={ICON_STYLE} />
      </FooterLink>
      <FooterLink href="https://github.com/caiorcferreira">
        <Github alt="Caio Ferreira's Github Profile" style={ICON_STYLE} />
      </FooterLink>
      <FooterLink href="https://medium.com/@caiorcferreira">
        <Medium alt="Caio Ferreira's Medium Profile" style={ICON_STYLE} />
      </FooterLink>
      <FooterLink href="https://www.linkedin.com/in/caiorcferreira/">
        <Linkedin alt="Caio Ferreira's LinkedIn Profile" style={ICON_STYLE} />
      </FooterLink>
    </div>
    <p style={{ marginBottom: "0" }}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <FooterLink href="https://www.gatsbyjs.org">Gatsby</FooterLink>
    </p>
  </footer>
)
