const Image = require('@11ty/eleventy-img');
const path = require('path');

async function imageShortcode(src, alt) {
  console.log(`Generating image from: ${src}`);

  if (alt === undefined) {
    throw new Error(`Missing 'alt' tag for: ${src}`);
  }

  return await Image(src, {
    widths: [1500],
    formats: ['jpeg'],
    urlPath: '/images/',
    outputDir: 'build/images/',
    filenameFormat: function(id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);
      return `${name}-${width}w.${format}`;
    },
  })
    .then((images) => images.jpeg[0])
    .then((image) => {
      return `<picture>
        <source
          type="${image.sourceType}"
          srcset="${image.srcset}"
          sizes="(min-width: 1024px) 100vw, 50vw">
        <img
          src="${image.url}"
          width="${image.width}"
          height="${image.height}"
          alt="${alt}"
          loading="lazy"
          decoding="async">
      </picture>`;
    });
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addLiquidShortcode('image', imageShortcode);

  return {
    dir: {
      output: 'build',
      data: 'resources/data',
      layouts: 'resources/layouts',
    },
  };
};
