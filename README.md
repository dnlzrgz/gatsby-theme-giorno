# Giorno - A modern theme for Gatsby

- Gatsby Theme powered by [Sanity](https://www.sanity.io/).
- Responsive design.
- Great SEO.
- Developed with accessibility in mind.
- Customisable styles and easy theming thanks to [Tailwind CSS](https://tailwindcss.com/).
- Demo at https://giorno-demo.netlify.app/
- Made by [Danielkvist](https://dkvist.com/).

## Why?

Building and updating a site using Gatsby is incredible, but only if you are a developer familiarized with React & GraphQL. Giorno let's you have the best part of Gatsby and the JAMStack leaving much of the heavy lifting to Sanity.

Thanks to this you will be able to create and configure pages as you wish by adding or removing different blocks that will then be rendered by Gatsby.

## Under active development

Giorno is under active development so things can break or change until the project reaches the version `v1.0.0`. Please, until then use it with caution.

## Installation

To starting using Giorno run:

```shell
npm install gatsby-theme-giorno
```

Then we need to install and configure Tailwind CSS:

```shell
npm install gatsby-plugin-postcss tailwindcss@latest postcss@latest autoprefixer@latest
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
    token: SANITY_TOKEN,
  },
},
"gatsby-plugin-postcss",
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

## What's next?

I am currently working on:

- Blogging.
- A Sanity starter.
- More blocks.
