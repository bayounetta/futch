exports.render = function(data) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${ data.metadata.title }</title>
    <meta name="description" content="${ data.description || data.metadata.description }">
  </head>
  <body>
    <header>
      <h1 class="home"><a href="${ '/' || data.url }">${ data.title || data.metadata.title }</a></h1>
    </header>
    <main>
      ${ data.content || data.metadata.safe }
    </main>
  </body>
</html>`;
};


