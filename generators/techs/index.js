const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  prompting() {
    this.fountainPrompting();
  },

  configuring() {
    this.mergeJson('package.json', {
      dependencies: {
        superagent: '^1.6.1'
      }
    });
  },

  writing() {
    const files = [
      'src/index.js',
      'src/index.css',
      'src/app/footer.js',
      'src/app/header.js',
      'src/app/main.js',
      'src/app/title.js',
      'src/app/techs/tech.js',
      'src/app/techs/techs.js',
      'src/app/techs/techs.json'
    ];

    files.map(file => {
      this.copyTemplate(file, file);
    });

    this.fs.copy(
      this.templatePath('src/assets'),
      this.destinationPath('src/assets')
    );
  }
});