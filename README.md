# Giorno - A modern theme for Gatsby

![Netlify](https://img.shields.io/netlify/ff2d155e-966c-4aaa-b29c-e06fff1c2332?style=flat-square)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/danielkvist/gatsby-theme-giorno?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/danielkvist/gatsby-theme-giorno?style=flat-square)
![GitHub](https://img.shields.io/github/license/danielkvist/gatsby-theme-giorno?style=flat-square)

## Features

- Gatsby Theme powered by [Sanity](https://www.sanity.io/).
- Sanity template using [Sanity create](https://www.sanity.io/create?template=danielkvist%2Fsanity-template-gatsby-portfolio).
- Responsive design.
- Great SEO.
- Developed with accessibility in mind.
- Customisable styles and easy theming thanks to [Tailwind CSS](https://tailwindcss.com/).
- Support for [Preact](https://preactjs.com/) for an optional little boost in performance.
- Demo at https://giorno-demo.netlify.app/
- Made by [Danielkvist](https://dkvist.com/).

## Why?

Building and updating a site using Gatsby is incredible easy and fast, but only if you are a developer familiarized with React & GraphQL. Giorno let's you have the best part of Gatsby and the JAMStack leaving much of the heavy lifting to Sanity.

Thanks to this you will be able to create and configure pages as you wish by adding or removing different blocks that will then be rendered by Gatsby.

## Under active development

Giorno is under active development so things can break or change until the project reaches the version `v1.0.0`. Please, until then use it with caution.

## Sanity create

> The Sanity create template for Giorno is in development. Please, keep it in mind if your experiment any errors while using it.

The best and easiest way to start working with Giorno is by using the [Sanity create template](https://www.sanity.io/create?template=danielkvist%2Fsanity-template-gatsby-portfolio).

If you want to know more about how to work with Sanity create or how to work whit this template itself, please check the [README](https://github.com/danielkvist/sanity-template-gatsby-portfolio#readme) in the [saniyt-template-gatsby-portfolio](https://github.com/danielkvist/sanity-template-gatsby-portfolio) repository.

## Installation

If you don't want to use the Sanity template you can install the `gatsby-theme-giorno` independently by running:

```shell
# NPM
npm install gatsby-theme-giorno

# Yarn
yarn add gatbsy-theme-giorno
```

Then we need to install and configure Tailwind CSS:

```shell
# NPM
npm install gatsby-plugin-postcss tailwindcss@latest postcss@latest autoprefixer@latest

# Yarn
yarn add gatsby-plugin-postcss tailwindcss@latest postcss@latest autoprefixer@latest
```

And then add the `tailwind.config.js` and the `postcss.config.js` files by running:

```shell
npx tailwindcss init -p
```

> If you have any doubts or problems, please check the official [guide to setup Tailwind CSS with Gatsby](https://tailwindcss.com/docs/guides/gatsby).

## Configuration

In your `gatsby-config.js` file, under `plugins` add:

```
{
  resolve: "gatsby-theme-giorno",
  options: {
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET_NAME,
    enablePreact: true,
  },
},
{
  resolve: `gatsby-plugin-postcss`,
  options: {
    postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
  },
},
```

Now, on the `tailwind.config.js` file in the root of your project you have to extend a little the base tailwind configuration as follows (you can also just copy and paste):

```js
module.exports = {
  purge: false,
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        "darker-primary": "#2563eb",
        background: "#fff",
        "invert-background": "#1f2937",
        text: "#111827",
        "invert-text": "#fff",
        footer: "#1f2937",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

The `invert-*` colors are used when the `dark mode` is enabled. To learn more about how to enable it please, check the official documentation [here](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually).

> Check the [demo's config files](https://github.com/danielkvist/gatsby-theme-giorno/tree/main/demo) if you have any doubts.

## Sanity studio

As I have already pointed out, the best way to use Giorno is by creating a project using the [Sanity create template](https://www.sanity.io/create?template=danielkvist%2Fsanity-template-gatsby-portfolio). But if you are using an existing Gatsby project and you have installed the `gatsby-theme-giorno` independently you should know that you'll need to use the Sanity studio created for this project that is currently being developed in the [sanity-template-gatsby-portfolio](https://github.com/danielkvist/sanity-template-gatsby-portfolio/tree/master/template/studio) repository.

## Preact & Performance

Preact is a lightweight alternative to React. This means less JavaScript to download, parse and execute. But Preact is also compatible with the React ecosystem, so if you decide to enable Preact in your project you should experience any problems.

The only thing you should keep in mind if that if you decide to enable Preact and you already have an existing cache of your project using React you may experiment some problems. So before enabling or disabling Preact I recommend you to remove your existing build cache.

> Check this article for more information: [Speed up your Gatsby site with 1 line of code](https://hdoro.dev/speed-up-gatsby-site)

## What's next?

I am currently working on:

- Improve performance.
- Blogging.
- More blocks.
