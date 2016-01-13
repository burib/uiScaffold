#uiScaffold  

```
.
└── ui
    ├── Gruntfile.js            
    ├── bower.json                              # bower dependencies in case if you don't have it on npm.
    ├── js-styleguide.jscsrc                    # javascript styleguide rules description
    ├── karma.conf.js                           # config that defines who the unit tests get executed
    ├── package.json                            # project description, build scripts, npm dependencies
    ├── dist                                    # place of production files. Copy the content of this folder after successful build.
    ├── src
    │   ├── index.html                          # main entry of the webpage.
    │   ├── index.js                            # main entry of the whole application, everything starts here.
    │   ├── index.scss                          
    │   ├── tests.js
    │   └── todo                                # todo module
    │       ├── todo-data-service.js            # communicates with REST API and returns data
    │       ├── todo-data-service.spec.js       # unit test for the DATA service
    │       ├── todo-directive.js               # <todo></todo> directive
    │       ├── todo-module.js                  # entry point of the todo module
    │       ├── todo.scss                       # css files for the todo module.
    │       └── todo.tpl.html                   # template file of the <todo><todo> directive.
    ├── vendor
    │   ├── index.js                            # main entry for vendor files. ( import angular, import jquery, etc )
    │   └── tests-common.js                     # helper utilities for writing unit tests
    ├── webpack.base.config.js                  # webpack configuration for the devServer.
    ├── webpack.config.js                   
    └── webpack.prod.config.js                  # webpack configuration for production.

```