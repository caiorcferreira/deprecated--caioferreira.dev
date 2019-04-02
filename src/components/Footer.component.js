import React from "react"
import styled from "styled-components"
import Twiter from "../../content/assets/img/social/twitter.svg"
import Dev from "../../content/assets/img/social/dev.svg"
import Github from "../../content/assets/img/social/github.svg"
import Medium from "../../content/assets/img/social/medium.svg"
import Linkedin from "../../content/assets/img/social/linkedin.svg"
import { rhythm } from "../utils/typography"
import { useStaticQuery, graphql } from "gatsby"

const ICON_STYLE = {
  height: "30",
  width: "30",
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
    <FooterWrapper>
      <SocialWrapper>
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
      </SocialWrapper>
      <FooterMessage>
        © {new Date().getFullYear()}, Built with
        {` `}
        <FooterLink decoration={true} href="https://www.gatsbyjs.org">
          Gatsby
        </FooterLink>
      </FooterMessage>
    </FooterWrapper>
  )
}

const FooterLink = ({ children, style, ...props }) => (
  <OutgoingLink style={style} target="_blank" {...props}>
    {children}
  </OutgoingLink>
)

const OutgoingLink = styled.a`
  box-shadow: ${props =>
    props.decoration ? "0 1px 0 0 var(--secondary)" : "none"};
  color: var(--secondary);
  margin-right: ${rhythm(1 / 2)};
  fill: var(--secondary);

  &:hover {
    fill: var(--hover);
  }
`

const FooterWrapper = styled.footer`
  align-items: center;
  margin-top: ${rhythm(2.5)};
`

const SocialWrapper = styled.section``

const FooterMessage = styled.p`
  margin-bottom: 0;
`
