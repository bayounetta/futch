exports.data = {
  layout: 'base',
};

exports.render = async function(data) {
  return `
  <div class="blog">
    <div class="hero-image" ${await this.image(data.hero)}>
      <h1 class="title hero-title">${data.title}</h1>
      <h4 class="date hero-date">${this.toReadableDate(data.date)}</h4>
    </div>
    <div class="content">
      ${data.content || data.site.safe}
    </div>
    <footer>
      <small>© juniper wilde 2019-2021</small>
    </footer>
  </div>
  `;
};
