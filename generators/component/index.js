var path = require('path');
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
    this.argument('componentName', {type: String, required: true});
    this.option('type', {
      type: String,
      alias: 't',
      desc: 'The type of component (function, class, legacy)',
      defaults: 'class'
    });

    this.option('root', {
      type: String,
      alias: 'r',
      desc: 'component root (e.g. components vs containers)',
      defaults: 'components',
      hide: true,
    });
  },

  generateComponent: function() {
    this.fs.copyTpl(
      this.templatePath('component_' + this.options.type + '.js'),
      this.destinationPath(path.join('static/js', this.options.root, this.componentName + '.js')),
      { componentName: path.basename(this.componentName) }
    );
  }
});