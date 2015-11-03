var webpackProduction = require('./webpack.prod.config.js');

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.initConfig({
        clean: {
            production: [webpackProduction.output.path]
        },
        copy: {
            production: {
                files: [
                    {
                        src: 'src/index.html',
                        dest: webpackProduction.output.path + 'index.html'
                    },
                    {
                        src: 'src/favicon.ico',
                        dest: webpackProduction.output.path + 'favicon.ico'
                    }
                ],
                options: {
                    process: hashFilter
                }
            }
        },
        webpack: {
            production: webpackProduction
        }
    });

    grunt.registerTask('default', ['clean:production', 'webpack:production', 'copy:production']);

    function hashFilter(content) {
        return content.replace(/(=".*-)(hash)(\..*")/g, replaceWithCompileHash);

        function replaceWithCompileHash(match, prefix, hash, sufix) {
            return prefix + grunt.template.process('<%=' + webpackProduction.storeStatsTo + '.hash%>') + sufix;
        }
    }
};

