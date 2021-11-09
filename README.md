# ClaireSunStudio 

[![Netlify Status](https://api.netlify.com/api/v1/badges/b654c94e-08a6-4b79-b443-7837581b1d8d/deploy-status)](https://app.netlify.com/sites/clairesun-netlify-app-new/deploys)

A portfolio site of Minghua Sun. 
>All rights reserved for the creative content served on the site and saved under `src/img`, `src/pages`, `static/img`. 


This site is built with [Gatsby v2](https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/), and [Netlify CMS](https://www.netlifycms.org), leveraging [gatsby netlify cms starter](https://github.com/netlify-templates/gatsby-starter-netlify-cms).

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Prerequisites
- Node v14.18.0
- npm v6.14.15

## Quick Start
- $ `nvm use` - to use the specified node version
- $ `yarn` — to install dependencies
- $ `npm run start` — to start the gatsby site


To test the CMS locally, you'll need to run a production build of the site:
- $ `npm run build`
- Uncomment `# local_backend: true` in [netlify admin config](./static/admin/config.yml)
- $ `npx netlify-cms-proxy-server` in terminal window 1
- $ `npx netlify dev` in terminal window 2
- checkout `http://localhost:[port]/admin`


### Media Libraries (installed, but optional)

Media Libraries have been included in this starter as a default. If you are not planning to use `Uploadcare` or `Cloudinary` in your project, you **can** remove them from module import and registration in `src/cms/cms.js`. Here is an example of the lines to comment or remove them your project.

```javascript
import CMS from 'netlify-cms-app'
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

// CMS.registerMediaLibrary(uploadcare);
// CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
```

Note: Don't forget to also remove them from `package.json` and `yarn.lock` / `package-lock.json` using `yarn` or `npm`. During the build netlify-cms-app will bundle the media libraries as well, having them removed will save you build time.
Example:
```
yarn remove netlify-cms-media-library-uploadcare
```
OR
```
yarn remove netlify-cms-media-library-cloudinary
```

### Setting up the CMS

Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

## Debugging

Windows users might encounter `node-gyp` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.

```
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')

MacOS users might also encounter some errors, for more info check [node-gyp](https://github.com/nodejs/node-gyp). We recommend using the latest stable node version.

## Purgecss

This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and [bulma](https://bulma.io/). The bulma builds are usually ~170K but reduced 90% by purgecss.

## Authoring

Custom editor for a image gallery (a list of images that rendered in a grid and a lightbox) is not fulling working, as a stop gap:
```
<lightbox col='3'>
    <rehype-image src="yes-delislicer.jpg" text="text"></rehype-image>
    <rehype-image src="yes-cleaner.jpg" text="text"></rehype-image>
    <rehype-image src="yes-fryolator.jpg" text="text"></rehype-image>
    <rehype-image src="yes-ladder.jpg" text="text"></rehype-image>
    <rehype-image src="yes-register.jpg" text="text"></rehype-image>
    <rehype-image src="yes-wheelchair.jpg" text="text"></rehype-image>
</lightbox>
```

For a single image to leverage the grid for responsive widths and gatsby image:
```
<div class="grid grid--col_2">
    <rehype-image src="facebookfan.jpg" caption="This is one of the four postcards I designed for this event. "></rehype-image>
</div>
```

For a gif with a play button:
```
<gif src="fashion-interact.gif"></gif>
```