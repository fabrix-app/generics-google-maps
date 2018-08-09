# generics-google-maps

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Follow @FabrixApp on Twitter][twitter-image]][twitter-url]

Generic Geolocation Provider for google-maps supplied by Spool-Generics.

Looking for [Generics?](https://github.com/fabrix-app/spool-generics)

## Install

```sh
$ npm install --save @fabrix/generics-google-maps
```

## Configure

```js
// config/generics.ts
import { GoogleMapsGeneric } from '@fabrix/generics-google-maps'
export const generics = {
  // make the key googleMaps, alternatively make the key geolocation_provider to be the default geolocation provider 
  googleMaps: {
    adapter: GoogleMapsGeneric,
    config: {
        key: '<your api key>'
    }
  }
}
```

[npm-image]: https://img.shields.io/npm/v/@fabrix/generics-google-maps.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fabrix/generics-google-maps
[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/generics-google-maps/master.svg
[ci-url]: https://circleci.com/gh/fabrix-app/generics-google-maps/tree/master
[daviddm-image]: http://img.shields.io/david/fabrix-app/generics-google-maps.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/generics-google-maps
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/fabrix-app/Lobby
[twitter-image]: https://img.shields.io/twitter/follow/FabrixApp.svg?style=social
[twitter-url]: https://twitter.com/FabrixApp
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/fabrix-app/generics-google-maps.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/fabrix-app/generics-google-maps/coverage
