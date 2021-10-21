exports.data = {
  layout: 'base',
};

exports.render = function(data) {
  return `${data.content || data.site.safe}`;
};
