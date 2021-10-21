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
    <link rel="stylesheet" href="/css/global.css">
    <link rel="stylesheet" href="/css/sidebar.css">
    <link rel="stylesheet" href="/css/prism.css">
  </head>
  <body>
    <main>
      <nav>
        <button className="hamburger-button">
          <img src="/static/images/hamburger.svg" alt="hamburger menu icon" />
        </button>
        <div className="sidebarStyles.container" style="display:block"> <!-- TODO: remove 'sidebar' from class names -->
          <ul>
            <li className="sidebarStyles.div_one sidebarStyles.title">
            <a href="/">
              <img src="/static/images/portrait.jpeg" alt="a cute possum" />
            </a>
            juniper wilde
            </li>
            <li className="sidebarStyles.div_two">
              <a href="/">
                <span role="img" aria-label="fleur de lis">⚜️</span>
                home
              </a>
            </li>
            <li className="sidebarStyles.div_three">
              <a href="/blog">
                <span role="img" aria-label="spiral notepad">🗒️</span>
                blog
              </a>
            </li>
            <li className="sidebarStyles.div_four">
              <a href="/work">
                <span role="img" aria-label="hammer and pick">⚒️</span>
                work
              </a>
            </li>
            <li className="sidebarStyles.div_five">
              <a href="/love">
                <span role="img" aria-label="yellow heart">💜</span>
                love
              </a>
            </li>
            <li className="sidebarStyles.div_six">
              <a href="/about">
                <span role="img" aria-label="woman technologist: light skin tone">👩🏻‍💻</span>
                about
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="page"> <!-- TODO: rename className -->
        ${data.content || data.site.safe}
        <footer>
          <small>© juniper wilde 2019-2021</small>
        </footer>
      </section>
    </main>
    <script>
      let isExpanded, toggleExpansion = false;
      // () => toggleExpansion(!isExpanded)

      function fartbutt() {
        let display = isExpanded ? 'block' : 'none';
        alert(1);
      }

      // TODO: get hamburger button to work
    </script>
  </body>
</html>`;
};
