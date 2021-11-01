exports.data = {
  layout: 'base',
};

exports.render = async function(data) {
  return `
  <div class="blog">
    <div class="hero-image" ${await this.image(data.hero)}>
      <div class="title hero-title">${data.title}</div>
      <div class="date hero-date">${this.toReadableDate(data.date)}</div>
    </div>
    <div class="content">
      ${data.content || data.site.safe}
    </div>
  </div>
  `;
};
