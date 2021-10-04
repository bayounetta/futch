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
    <main> <!-- TODO: maybe not needed? -->
      <header>
        <h1 class="home"><a href="${ '/' || data.url }">${ data.title || data.metadata.title }</a></h1>
      </header>
      ${ data.content || data.metadata.safe }
      <footer>
        <small>© juniper wilde 2019-2021</small>
      </footer>
    </main>
  </body>
</html>`;
};

// <main>
// <Sidebar/>
// <section className="page">
//   {children}
//   <footer>
//     <small>© juniper wilde 2019-2020</small>
//   </footer>
// </section>
// </main>
