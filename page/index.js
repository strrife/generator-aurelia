var generators = require('yeoman-generator');

var basePath = 'src/';
var path = require('../path');

module.exports = generators.NamedBase.extend({

    generateAureliaVM: function () {
        this.fs.copyTpl(
            this.templatePath('vm.js'),
            this.destinationPath(path(this.name, '.js', 'src/' + this.name + '/')),
            {Name: this.name}
        );
    },

    generateAureliaView: function () {
        this.fs.copyTpl(
            this.templatePath('view.html'),
            this.destinationPath(path(this.name, '.html', 'src/' + this.name + '/'),
                {
                    Name: this.name,
                    Hello: '${hello}'
                }
            )
        );
    }
});
