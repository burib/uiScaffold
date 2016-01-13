#uiScaffold  

```
.
└── ui
    ├── Gruntfile.js            
    ├── README.md
    ├── bower.json
    ├── js-styleguide.jscsrc                    # javascript styleguide
    ├── karma.conf.js
    ├── package.json                            # project description, build scripts, npm dependencies
    ├── src
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── index.js                            # main entry of the whole application, everything starts here.
    │   ├── index.scss                          
    │   ├── tests.js
    │   └── todo                                # todo module
    │       ├── todo-data-service.js            # communicates with REST API and returns data
    │       ├── todo-data-service.spec.js       # unit test for the DATA service
    │       ├── todo-directive.js               
    │       ├── todo-module.js
    │       ├── todo.scss                       
    │       └── todo.tpl.html
    ├── vendor
    │   ├── index.js                            # main entry for vendor files. ( import angular, import jquery, etc )
    │   └── tests-common.js                     # helper utilities for writing unit tests
    ├── webpack.base.config.js
    ├── webpack.config.js
    └── webpack.prod.config.js

```