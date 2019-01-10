# map-values-deep

[![Build Status](https://travis-ci.org/glennreyes/map-keys-deep.svg?branch=master)](https://travis-ci.org/glennreyes/map-keys-deep) [![Coverage Status](https://coveralls.io/repos/github/glennreyes/map-keys-deep/badge.svg?branch=master)](https://coveralls.io/github/glennreyes/map-keys-deep?branch=master)

🔑 Maps object values recursively, like [`mapValues`](https://lodash.com/docs/#mapValues) by Lodash but recursive.

# Usage

## Install

```
yarn add map-values-deep
```

## Simple sample usage

```js
import mapValuesDeep from 'map-values-deep';

mapValuesDeep({ Hello: { World: true } }, values => values.toLowerCase());
// { hello: { world: true } }
```

## FP style

```js
import { camelCase } from 'lodash/fp';
import mapValuesDeep from 'map-values-deep/fp';

mapValuesDeep(camelCase)({ hello_world: { bye_world: true } });
// { helloWorld: { byeWorld: true } }

mapValuesDeep(values => values.toLowerCase())({ Hello: { World: true } });
// { hello: { world: true } }
```

## Test

```js
yarn jest
```

# License

MIT
