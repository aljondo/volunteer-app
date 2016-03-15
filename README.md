Volunteer App (CS4500)
====================================

[![Build Status](https://travis-ci.org/CS4500/volunteer-app.svg?branch=master)](https://travis-ci.org/CS4500/volunteer-app)

A web application to help municipalities organize and connect volunteer organizations with local volunteers. This is a project for [CS4500 Software Development](http://www.ccs.neu.edu/course/cs4500sp16-mw/) at Northeastern University.

Usage
---------------

### Run

```shell
$ npm install
$ npm start
```

Don't have [npm](https://www.npmjs.com) or (Node)? It is packaged with Node so download [Node](https://nodejs.org) or  download using [Homebrew] on OS X. Check for the latest stable version v5.6.0 (2/29/16).

```shell
$ brew update
$ brew install node
$ node -v
```

Don't have [Homebrew](http://brew.sh)?
```shell
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Libraries & Dependencies

* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org)
* [Immutable](https://facebook.github.io/immutable-js/)

[Webpack](http://webpack.github.io) is used for building/bundling.

File Structure
---------------
```
├── api // api mock files for json-server
├── app
│   ├── actions // Redux actions
│   ├── components // for dumb/presentational/stateless React components unaware of Redux
│   │   ├── Button
│   │   ├── Menu
│   │   ├── Footer
│   │   └── ...
│   ├── containers // for smart/stateful React components connected to Redux
│   │   ├── Profile
│   │   ├── OrgLocation
│   │   └── ...
│   ├── middleware // Redux middleware
|   |   └── ...
│   ├── reducers // Redux reducers
|   |   └── ...
│   ├── store // Redux stores
|   |   └── ...
│   ├── views // Maps to routes, presentational grouping of containers & components
│   │   ├── About
│   │   ├── Index
│   │   ├── Profile
│   │   └── ...
│   └── utils
├── bin  // any scripts
├── static
│   ├── dist   // project build/bundle here
│   └── images
├── tests // replicate structure similar to app for tests
└── webpack  //webpack configuration files
```

Styling
---------------

This project uses [Sass](http://sass-lang.com) with [CSS Modules](https://github.com/css-modules/css-modules).  Also uses [PostCSS](http://postcss.org) plugin [Autoprefixer](https://github.com/postcss/autoprefixer) to parse CSS and add browser vendor prefixes.

Build
---------------

Transpiles ES2015 (ES6) Javascript to widely supported ES5 Javascript with [Babel](http://babeljs.io).

TODO

Development
---------------
### Run

Start a light server with live reloading.

```shell
$ npm start
```
Run a development build/bundle. Assets are outputed to `/static/dist/`

```shell
$ npm run build
```
### Tools

Uses [Webpack's "Hot Module Replacement"](https://webpack.github.io/docs/hot-module-replacement.html) to inject changes into the active runtime.

Implements/Includes [Redux DevTools](https://github.com/gaearon/redux-devtools) for a live-editing time travel environment for Redux. Includes [Log Monitor](https://github.com/gaearon/redux-devtools-log-monitor) and [Dock Monitor](https://github.com/gaearon/redux-devtools-dock-monitor).

May be useful to download [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) for Chrome.

Includes [React Hot Loader](https://gaearon.github.io/react-hot-loader/) for live editing while the app remains mounted and state is preserved.

Production
---------------

### Run
TODO

### Build

TODO

Test
---------------
### Run
```shell
$ npm test
```
To lint code:
```shell
$ npm run lint
```
To view test coverage: (after running coverage)
```shell
$ open coverage/index.html
```
### Tools
* [Mocha](https://mochajs.org) (test framework)
* [Karma](https://karma-runner.github.io/0.13/index.html) (test runner)
* [Chai](http://chaijs.com) (assertion library)
* [Sinon](http://sinonjs.org) (test spies, stubs and mocks)
* [Istanbul](https://github.com/gotwarlost/istanbul) (test coverage)
* [JSON Server](https://github.com/typicode/json-server) (mock API)

Contributing
---------------

### How

1. Fork the repo
1. For any feature/issue/story create a branch from `master`.
2. Add tests if necessary
3. Update the documentation if necessary.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Make well formed logical commits. Squash your commits down to one or few discreet changes if a larger feature/issue.
7. Submit PR with useful notes/comments.
8. Get at least one code review before merging.

### Code Style

Follow Airbnb's [JavaScript Style Guide](https://github.com/airbnb/javascript).

[ESLint](http://eslint.org) will enforce this.

References & Tutorials
---------------
TODO

License
---------------
TODO
