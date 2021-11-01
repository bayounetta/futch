const Image = require('@11ty/eleventy-img');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownIt = require('markdown-it')({
  html: true,
}).use(
  require('markdown-it-footnote')
);

async function imageShortcode(image_name, alt, classes = '', sizes = 'null') {
  console.log(`Generating image from: ${image_name}`);

  return await Image(image_name, {
    widths: [200, 750, 1500, null],
    formats: ['jpeg'],
    urlPath: '/static/images/',
    outputDir: 'build/static/images/',
  }).then((metadata) =>
    Image.generateHTML(metadata, {
      alt,
      sizes,
      class: classes,
      loading: 'lazy',
      decoding: 'async',
    })
  );
}

async function backgroundShortcode(image_name) {
  console.log(`Generating background from: ${image_name}`);

  return await Image(image_name, {
    widths: [null],
    formats: ['jpeg'],
    urlPath: '/static/images/',
    outputDir: 'build/static/images/',
  })
    .then((images) => images.jpeg[0])
    .then(
      (image) =>
        `style = "background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${image.url})"`
    );
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addLiquidShortcode('image', imageShortcode);
  eleventyConfig.addJavaScriptFunction('image', backgroundShortcode);

  eleventyConfig.addPassthroughCopy({ 'resources/static/': '/static' });

  eleventyConfig.addFilter('toISODate', function(date) {
    return date.toISOString().split('.')[0] + 'Z';
  });

  eleventyConfig.addFilter('toReadableDate', function(date) {
    const localedate = new Date(date);

    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return `${
      days[localedate.getDay()]
    } ${months[localedate.getMonth()]} ${localedate.getDate()}, ${localedate.getFullYear()}`;
  });

  eleventyConfig.setBrowserSyncConfig({
    files: 'build/css/**/*.css',
  });

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.setLibrary('md', markdownIt);

  return {
    dir: {
      output: 'build',
      data: 'resources/data',
      layouts: 'resources/layouts',
    },
  };
};
