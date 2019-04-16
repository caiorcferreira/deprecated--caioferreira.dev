---
title: Why I Love Gatsby
date: "2019-04-16T12:00:00"
description: Let's talk about why Gatsby is an incredible tool
cover_image: ./cover.jpg
tags: javascript, jam, gatsby, blogging
---

*Photo by [Patrick Fore](https://unsplash.com/photos/0gkw_9fy0eQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/blog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

Recently I launched my own blog and it was an amazing experience. In about a Sunday I had made 90% of the site and enjoyed every moment. This was thanks to Gatsby and here I will show you why!

# Introduction

When I decided to share more about what I am doing and learning during my career I immediately thought about a blog. Being a passionate reader and [dev.to](http://dev.to/) fan, my first step was to jot down my ideas, structure them and release it at the Dev Community. It was great and the feedback was exciting.

But for me, technical writing wasn't just about sharing knowledge and build an image. It is like a diary, a personal mirror to look to myself and my history as a professional. I would like it to reflect me and my steps as a go through each one. So, being such a particular subject, I felt that I need something more individual, hence, my own page.

# **Reasons to Love**

Build a personal blog has lots of options like Wordpress, Blogspot, Jekyll, and others. In this miscellanea, the [JAM Stack](https://jamstack.org/) caught my attention a long time ago. It is a web architecture to build fast, easy and scalable websites based on Javascript + API's + Markup. It essentially builds content from Markdown and other API sources in build time and can add dynamic behavior with client-side Javascript. Most JAM frameworks are also called static site generator, like the above mentioned Jekyll and Hugo. Since Jekyll is built in Ruby and Hugo in Go, they need to use template engines to design its pages, which leads us to the first reason.

## React

Working mostly with Front-End development in React, it seemed natural for me that it could be used as a template engine and, as such, when I first met [Gatsby](https://www.gatsbyjs.org/) it fit perfectly. With React we have a well know template API that is simple JSX/HTML and easy componentization and composability.

## Architecture

Gatsby is an open source framework that allows us to build performant sites using React and multiple data sources, like Markdown, CMS (especially [headless ones](https://headlesscms.org/)), web APIs and multiple kinds of files (JSON, YAML, CSV, etc). All data sources are abstracted behind the GraphQL API, creating a uniform way to access and manage data. This provides an extensible and decoupled architecture that brings with it a large plugin library for the data end and all the tools available in the React ecosystem.

## Open source

In terms of community, documentation, and content, Gatsby is one of the best open source projects that I ever saw. If you are planning to use it, I strongly suggest that you read the [official tutorial](https://www.gatsbyjs.org/tutorial/), it is awesome and will get you an excellent overview of its architecture. Besides that, the community provides lots of starters repositories to help you with your project. In my case, the [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) provides a setup with features that any blog would like: SEO tools, RSS feed, Google Analytics, website manifest, offline support, CSS for theming and typography configuration.

## Customization

All the features listed above are provided through plugins, for example, the SEO tools are provided with the [Helmet plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet) (which allows us to configure the HTML head with a title and keywords). These allow us to easily customize our project. In my blog I also added the [plugin for SVG support](https://www.gatsbyjs.org/packages/gatsby-plugin-react-svg) (which allows me to import an SVG like a javascript module), a bunch of plugins better image rendering (including low resolution samples during page load) that you can find [here](http://stayregular.net/blog/adding-images-and-media-to-your-gatsbyjs-blog), code styling and syntax highlighting with [PrismJS plugin](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs).

But the customization that I **most** **enjoyed** was the combination of Styled Components (through [this plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components)) with Typography.js (also with a plugin, but which came with the starter) because Styled Components enables me to use common CSS tools like media queries and pseudo elements and also Javascript functions, which allowed me to use the `rhythm` Typograph.js function to set margins and paddings in a [harmonic way](https://betterwebtype.com/rhythm-in-web-typography). Also, as the starter came with CSS Module support, I could create a global stylesheet that contained CSS variables and made easy for making the theme consistent.

## Developer Experience

You just need 3 commands to use Gatsby:
```bash
    $ npm install -g gatsby-cli
    $ gatsby develop # inside the starter repository
    $ gatsby build # when you are finished implementing your site
```
And for adding plugins you just need to install an npm package and place its name in the `gatsby-config.js` file. It is easy, simple e fun to use! :smile:

## Simple and Fast Delivery

From developing to the final website you are only one command away: `gatsby build`. The generated code is simply static HTML and CSS and can be deployed to any static hosting service like Github Pages. Therefore, you can easily build and deploy your site for free.

However, for my blog, I decided to host on [Netlify](https://www.netlify.com/). Their service is so simple that not even documentation is needed, although existent with you need, because you can click to deploy your site and they will take you to point to a Github repository, choose a command to build your site (therefore, we can add gatsby-cli as a `devDependency` and create an npm script to build the site using the `node_modules` binary) and "boom", you will have it in a random domain.

Besides that, if you also want a custom domain you can buy it directly through them and your site will also be running in HTTPS using a Let's Encrypt TLS certificate provided and configured by Netlify.

It is also a platform with developer experience in mind and with lot's of features to expand your site to a web application if you want.

# Pro Tips

If you are planning to use Gatsby to build your blog I have some extra tips!

## Seek inspiration

Today the dev blog that I most consume is [Overreacted](https://overreacted.io/) by Dan Abramov and since he used Gatsby to also build his blog I learned a lot from reading his source code opened in Github. It is extremely helpful to have a ground in what you like in a blog if you, like me, don't have much UI design skills.

## Run Lighthouse

Chrome comes with an incredible tool for auditing websites in 4 pillars: Performance, Accessibility, Best Practices, and SEO. One of the Gatsby killing features is that its defaults delivery you a high score site in this evaluation, but run each is really helpful to catch any mistakes that you may let pass. Like me, that forgot to add `aria-label` 's to social media link icons.

## Theme

Have a theme for your blog will help to make a brand for yourself and improve the reader experience when using your website. As I'm a disaster with choosing colors, the [Coolors](https://coolors.co/) was my salvation and delivered a nice color schema.

# Summary

Finally, Gatsby is not just useful but also really fun to play with. I enjoyed every moment using it and in a Sunday I managed to implement 99% of the website, leaving only minor tweaks to be corrected after. In less then a busy week, I put my blog on air and enjoyed the view!
