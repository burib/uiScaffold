# [uiScaffold](https://github.com/burib/uiScaffold/)
### angular webpack es5/es6 enterprise ready project base by [@burib](https://github.com/burib/)
scaffold project for angular based heavy enterprise application

### Supports the followings:

  - [x] live dev server via webpack ( http://localhost:1337/ )
  - [x] jasmine 2 unit test support
  - [x] phantomjs support
  - [x] Concatenation of css files into a single file.
  - [x] Concatenation js files into a single file.
  - [x] seperate js 3rd party vendor files from app files.
  - [x] checkStyle support for js based on [http://jscs.info/](http://jscs.info/)
  - [ ] jshint check 


### Prerequisites:
 - nodejs

```
 npm install // installs npm and bower dependencies
 npm start // starts the devServer http://localhost:1337/webpack-dev-server/
 npm test // runs unit tests continuously
 
 npm run testOnce // runs unit tests only once
 npm run dist // create a distribution of the current version
 npm run checkStyle // runs style checker on js files
```
  
### Structure

```
.
└── ui
    ├── Gruntfile.js            
    ├── bower.json                              # bower dependencies in case if you don't have it on npm.
    ├── js-styleguide.jscsrc                    # javascript styleguide rules description
    ├── karma.conf.js                           # config that defines who the unit tests get executed
    ├── package.json                            # project description, build scripts, npm dependencies
    ├── dist                                    # place of production files. Copy the content of this folder
    |                                             after successful build.
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
    │   ├── index.js                            # main entry for vendor files. ( import angular, jquery, etc )
    │   └── tests-common.js                     # helper utilities for writing unit tests
    ├── webpack.base.config.js                  # webpack configuration for the devServer.
    ├── webpack.config.js                   
    └── webpack.prod.config.js                  # webpack configuration for production.

```