exports.render = async function(data) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="/static/favicon.ico" type="image/x-icon">
    <title>
      ${data.site.title + (data.title ? ' | ' + data.title : '')}
    </title>
    <meta name="description" content="${data.description}">
    <link rel="stylesheet" href="/css/reset.css">
    <link rel="stylesheet" href="/css/prism.css">
    <link rel="stylesheet" href="/css/sidebar.css">
    <link rel="stylesheet" href="/css/global.css">
  </head>
  <body>
    <main>
      <nav>
        <button class="hamburger-button">
          <img src="/static/images/hamburger.svg" alt="hamburger menu icon" />
        </button>
        <div class="container" style="display:block">
          <ul>
            <li class="div_one title">
              <a href="/">
                <img src="/static/images/portrait.jpeg" alt="a cute pic of me" />
              </a>
              juniper wilde
            </li>
            <li class="div_two">
              <a href="/">
                ho
                <span role="img" aria-label="fleur de lis">⚜️</span>
                me
              </a>
            </li>
            <li class="div_three">
              <a href="/blog">
                bl
                <span role="img" aria-label="ledger">📒</span>
                og
              </a>
            </li>
            <li class="div_four">
              <a href="/work">
                wo
                <span role="img" aria-label="warning">⚠️</span>
                rk
              </a>
            </li>
            <li class="div_five">
              <a href="/love">
                lo
                <span role="img" aria-label="yellow heart">💛</span>
                ve
              </a>
            </li>
            <li class="div_six">
              <a href="/about">
                about
                <span role="img" aria-label="woman technologist: light skin tone">👩🏻‍💻</span>
              </a>
            </li>
            <li class="div_final">
              <footer><small>© juniper wilde 2019-${new Date().getFullYear()}</small></footer>
            </li>
          </ul>
        </div>
      </nav>
      ${data.content || data.site.safe}
    </main>
  </body>
  <script>
    let isExpanded, toggleExpansion = false;
    // () => toggleExpansion(!isExpanded)

    function fartbutt() {
      let display = isExpanded ? 'block' : 'none';
      alert(1);
    }

    // TODO: get hamburger button to work
  </script>
</html>`;
};
