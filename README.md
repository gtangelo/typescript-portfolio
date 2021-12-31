# Personal Portfolio Website - Typescript Edition
This repository serves as the codebase for my personal portfolio website. The deployed version of the website can be accessed [here](!https://gtangelo.com/).

## Technology Stack
This website is powered using the [Gatsby](https://www.gatsbyjs.com/) framework which enables us to write using the React library whilst having the option to build static HTML pages when deployed. Pages on the website are written in a combination of markdown and React components.

It was created with the [gatsby-starter-typescript-plus](https://github.com/resir014/gatsby-starter-typescript-plus) template as a starter kit. The website is written using Typescript and is using the Material UI framework and styled components for CSS stylings.

## Workflow
Currently, there is a github actions workflow set in place. Every time a push has been made to the `main` branch, changes are reflected in the deployed version.
## Getting Started
### Prerequisites
- [Git](https://github.com/git-guides/install-git)
- [Nodejs](https://nodejs.org/en/download/package-manager/) and [npm](https://www.npmjs.com/) (or yarn)
- [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/)
#### Installing Gatsby
Install the Gatsby CLI using `npm install -g gatsby-cli`. If needed, more details on setting up an environment for Gatsby can be found [here](https://www.gatsbyjs.com/docs/tutorial/part-zero/).

### Installation
After cloning the repository, follow the instructions below to install the project's dependencies and start up a server to run the website.

```bash
cd typescript-portfolio
yarn install          # run once to install the project's dependencies
yarn start            # start the local development server
```

Local development server should be hosted on http://localhost:8000/
