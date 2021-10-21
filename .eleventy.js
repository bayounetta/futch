const Image = require('@11ty/eleventy-img');
const path = require('path');

async function imageShortcode(image_name, alt, sizes) {
  console.log(`Generating image from: ${image_name}`);

  let metadata = await Image(image_name, {
    widths: [200, 750, 1500, null],
    formats: ['jpeg'],
    urlPath: '/static/images/',
    outputDir: 'build/static/images/',
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: 'lazy',
    decoding: 'async',
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addLiquidShortcode('image', imageShortcode);

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

  return {
    dir: {
      output: 'build',
      data: 'resources/data',
      layouts: 'resources/layouts',
    },
  };
};
