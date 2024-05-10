exports.data = {
  layout: 'base',
};

exports.render = function(data) {
  return `
  <div class="page">
    ${data.content || data.site.safe}
  </div>
  `;
};
