var webpackConfig = require('./webpack.config.js');

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.initConfig({
        clean: {
            production: [webpackConfig.output.path]
        },
        copy: {
            production: {
                files: [
                    {
                        src: 'src/index.html',
                        dest: webpackConfig.output.path + 'index.html'
                    },
                    {
                        src: 'src/favicon.ico',
                        dest: webpackConfig.output.path + 'favicon.ico'
                    }
                ],
                options: {
                    process: hashFilter
                }
            }
        },
        webpack: {
            production: webpackConfig
        }
    });

    grunt.registerTask('default', ['clean:production', 'webpack:production', 'copy:production']);

    function hashFilter(content) {
        return content.replace(/(=".*-)(hash)(\..*")/g, replaceWithCompileHash);

        function replaceWithCompileHash(match, prefix, hash, sufix) {
            return prefix + grunt.template.process('<%=' + webpackConfig.storeStatsTo + '.hash%>') + sufix;
        }
    }
};

