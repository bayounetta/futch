exports.data = {
  layout: 'base',
};

exports.render = function(data) {
  return `
  <div class="page">
    ${data.content || data.site.safe}
    <footer>
      <small>© juniper wilde 2019-2021</small>
    </footer>
  </div>
  `;
};
