#uiScaffold  

```
.
└── ui
    ├── Gruntfile.js            
    ├── README.md
    ├── bower.json
    ├── js-styleguide.jscsrc
    ├── karma.conf.js
    ├── package.json
    ├── src
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── index.js
    │   ├── index.scss
    │   ├── tests.js
    │   └── todo                                # todo module
    │       ├── todo-data-service.js            # this service communicates with the REST API and returns data
    │       ├── todo-data-service.spec.js       
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