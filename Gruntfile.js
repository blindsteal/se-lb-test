module.exports = function(grunt) {
    // Load grunt tasks automatically, when needed
    require('jit-grunt')(grunt, {
        express: 'grunt-express-server',
        useminPrepare: 'grunt-usemin',
        ngtemplates: 'grunt-angular-templates',
        cdnify: 'grunt-google-cdn',
        protractor: 'grunt-protractor-runner',
        injector: 'grunt-asset-injector',
        buildcontrol: 'grunt-build-control',
        docularserver: 'grunt-docular'
    });

    grunt.initConfig({
        yeoman: {
            // configurable paths
            client: require('./bower.json').appPath || 'client',
            dist: 'dist'
        },

        loopback_sdk_angular: {
            services: {
                options: {
                    input: 'server/server.js',
                    output: 'client/js/lb-services.js'
                }
            }
        },
        docular: {
            useHtml5Mode: true, //Use angular's html5 mode? true/false.
            docular_webapp_target: '/docular_generated', //The place where the docs will be generated
            showAngularDocs: true,
            showDocularDocs: true,
            groups: [
                {
                    groupTitle: 'LoopBack',
                    groupId: 'loopback',
                    sections: [
                        {
                            id: 'lbServices',
                            title: 'LoopBack Services',
                            scripts: [ 'client/js/lb-services.js' ]
                        }
                    ]
                }
            ]
        },
        docularserver: {
            targetDir: "docular_generated"
        },
        injector: {
            options: {

            },
            // Inject application script files into index.html (doesn't include bower)
            scripts: {
                options: {
                    transform: function(filePath) {
                        filePath = filePath.replace('/client/', '');
                        filePath = filePath.replace('/.tmp/', '');
                        return '<script src="' + filePath + '"></script>';
                    },
                    starttag: '<!-- injector:js -->',
                    endtag: '<!-- endinjector -->'
                },
                files: {
                    '<%= yeoman.client %>/index.html': [
                        ['{.tmp,<%= yeoman.client %>}/{app,components,js}/**/*.js',
                            '!{.tmp,<%= yeoman.client %>}/app/app.js',
                            '!{.tmp,<%= yeoman.client %>}/{app,components}/**/*.spec.js',
                            '!{.tmp,<%= yeoman.client %>}/{app,components}/**/*.mock.js']
                    ]
                }
            },

            // Inject component css into index.html
            css: {
                options: {
                    transform: function(filePath) {
                        filePath = filePath.replace('/client/', '');
                        filePath = filePath.replace('/.tmp/', '');
                        return '<link rel="stylesheet" href="' + filePath + '">';
                    },
                    starttag: '<!-- injector:css -->',
                    endtag: '<!-- endinjector -->'
                },
                files: {
                    '<%= yeoman.client %>/index.html': [
                        '<%= yeoman.client %>/{app,components}/**/*.css'
                    ]
                }
            }
        },
        // Automatically inject Bower components into the app
        wiredep: {
            target: {
                src: '<%= yeoman.client %>/index.html',
                ignorePath: '<%= yeoman.client %>/',
                exclude: [/bootstrap-sass-official/, /bootstrap.js/, '/json3/', '/es5-shim/']
            }
        }
    });
    // Default task(s).
    grunt.registerTask('default', ['loopback_sdk_angular', 'wiredep', 'injector']);
    grunt.registerTask('doc', ['docular', 'docularserver']);
};