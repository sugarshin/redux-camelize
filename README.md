# redux-camelize

[![CircleCI][circleci-image]][circleci-url]
[![Codecov][codecov-image]][codecov-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

FSA-compliant camelize payload middleware for [Redux](http://redux.js.org/).

```bash
yarn add redux-camelize

# or

npm i redux-camelize
```

## FSA-compliant

Using in combination with [redux-actions](https://github.com/acdlite/redux-actions).

Because it supports FSA actions, you can use this in combination with redux-actions.

## Usage

```js
import { createStore, applyMiddleware, compose } from 'redux'
import camelize from 'redux-camelize'

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(camelize)
)

dispatch({
  type: 'RECIEVE_USER_ENTITY',
  payload: { user_id: 1, user_name: 'sugarshin' },
  meta: { camelize: true },
})
```

## License

[MIT][license-url]

© sugarshin

[circleci-image]: https://circleci.com/gh/sugarshin/redux-camelize/tree/master.svg?style=svg&circle-token=fce7a1b89ecdbdb59e570ae5277063193e224fd0
[circleci-url]: https://circleci.com/gh/sugarshin/redux-camelize/tree/master
[codecov-image]: https://codecov.io/gh/sugarshin/redux-camelize/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/sugarshin/redux-camelize
[npm-image]: https://img.shields.io/npm/v/redux-camelize.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/redux-camelize
[license-image]: https://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: https://sugarshin.mit-license.org/
