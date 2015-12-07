# [uiScaffold](https://github.com/burib/uiScaffold/)
### angular webpack es5/es6 project base by [@burib](https://github.com/burib/)
scaffold project for angular based heavy enterprise application

Supports the followings:

  - [x] live dev server via webpack ( http://localhost:1337/ )
  - [x] jasmine 2 unit test support
  - [x] phantomjs support
  - [x] Concatenation of css files into a single file.
  - [x] Concatenation js files into a single file.
  - [x] seperate js 3rd party vendor files from app files.
  - [x] checkStyle support for js based on [http://jscs.info/](http://jscs.info/)
  - [ ] jshint check 


prerequisites:
 - nodejs

```
 npm install // installs npm and bower dependencies
 npm start // starts the devServer http://localhost:1337/webpack-dev-server/
 npm test // runs unit tests continuously
 npm run testOnce // runs unit tests only once
 npm run dist // create a distribution of the current version
 npm run checkStyle // runs style checker on js files
```
