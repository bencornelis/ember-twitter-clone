App.Router.map(function() {
  this.resource('ravens', {path: '/'});
  this.resource('about');
  this.resource('raven', {path: '/ravens/:raven_id'});
  this.resource('new-raven')
  this.resource('house-tag', {path: '/house-tags/:house_tag_id'})
});
