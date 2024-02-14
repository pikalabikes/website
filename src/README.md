## Developer documentation

The website is built with [Astro](https://astro.build) as a statically-generated site and hosted on GitHub Pages. The build runs in the GitHub Action configured inside `.github/workflows`.

The development build is served on the `/website` path.
Refer to Astro documentation for how to develop locally.

All source code is inside `src`. Global SCSS styles are in `src/styles`.

We use CSS variables for brand colours, and `rem` units for sizing.

Booking forms are embedded Google Forms.

The `public` folder contains static files not processed by Astro, including favicons and PDFs such as the Cafe menu.

We use JavaScript very sparingly, writing TypeScript and manipulating the DOM directly instead of using a UI framework.

Images and iframes should always be lazyloaded using `loading="lazy"`.
