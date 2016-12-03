var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  run: function() {
    throw new Error('Do not attempt to run the main generator');
  }
});