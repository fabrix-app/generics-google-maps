'use strict'
/* global describe, it */
const assert = require('assert')
describe('Geolocation Generic Google maps', () => {
  let GeolocationGenericService
  let GoogleMaps
  before((done) => {
    GeolocationGenericService = global.app.services.GeolocationGenericService
    GoogleMaps = global.app.config.get('generics.googleMaps')
    done()
  })

})
