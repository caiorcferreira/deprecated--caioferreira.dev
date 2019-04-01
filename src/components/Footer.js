import React from "react"
import Twiter from "../../content/assets/img/social/twitter.svg"
import Dev from "../../content/assets/img/social/dev.svg"
import Github from "../../content/assets/img/social/github.svg"
import Medium from "../../content/assets/img/social/medium.svg"
import Linkedin from "../../content/assets/img/social/linkedin.svg"
import { rhythm } from "../utils/typography"
import { useStaticQuery, graphql } from "gatsby"

const FooterLink = ({ children, style, ...props }) => (
  <a
    style={{
      boxShadow: "none",
      color: "var(--secondary)",
      marginRight: rhythm(1 / 2),
      ...style,
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

export default () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              twitter
              dev
              github
              medium
              linkedin
            }
          }
        }
      }
    `
  )

  const social = site.siteMetadata.social

  return (
    <footer
      style={{
        alignItem: "end",
        marginTop: rhythm(2.5),
      }}
    >
      <div>
        <FooterLink href={social.twitter}>
          <Twiter alt="Caio Ferreira's Twitter Profile" style={ICON_STYLE} />
        </FooterLink>
        <FooterLink href={social.dev}>
          <Dev alt="Caio Ferreira's DEV Profile" style={ICON_STYLE} />
        </FooterLink>
        <FooterLink href={social.github}>
          <Github alt="Caio Ferreira's Github Profile" style={ICON_STYLE} />
        </FooterLink>
        <FooterLink href={social.medium}>
          <Medium alt="Caio Ferreira's Medium Profile" style={ICON_STYLE} />
        </FooterLink>
        <FooterLink href={social.linkedin}>
          <Linkedin alt="Caio Ferreira's LinkedIn Profile" style={ICON_STYLE} />
        </FooterLink>
      </div>
      <p style={{ marginBottom: "0" }}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <FooterLink
          style={{ boxShadow: "0 1px 0 0 var(--secondary)" }}
          href="https://www.gatsbyjs.org"
        >
          Gatsby
        </FooterLink>
      </p>
    </footer>
  )
}
