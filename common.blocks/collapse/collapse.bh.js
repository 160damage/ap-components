module.exports = function(bh) {

  bh.match('collapse', function(ctx, json) {
    ctx
        .js(true)
        .content([
            {
                elem : 'header',
                mix: {elem : 'switcher'},
                content : [
                    json.preview,
                    {elem : 'switcher'}
                ]
            },
            {
                elem: 'content',
                content: json.content
            }
        ], true);
  });
};