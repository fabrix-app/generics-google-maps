import { Generic } from '@fabrix/spool-generics'
import * as googleMaps from '@google/maps'

export class GoogleMapsGeneric extends Generic {
  public config: {
    key: string,
    Promise: Promise<any>
  }
  /**
   * Create GoogleMaps Instance
   * @returns {*} GoogleMaps Instance
   */
  googleMaps() {
    return googleMaps.createClient({
      key: this.config.key,
      Promise: Promise
    })
  }

  addressToString(address) {
    let street = ''
    let city = ''
    let postalCode = ''
    let province = ''
    let country = ''

    if (address.address_1) {
      street = address.address_1
    }

    if (address.address_2) {
      street = `${street} ${address.address_2}`
    }

    if (address.address_3) {
      street = `${street} ${address.address_3}`
    }

    if (address.company) {
      street = `${street} ${address.company}`
    }

    if (street !== '') {
      street = `${street}, `
    }

    if (address.city) {
      city = address.city
    }

    if (city !== '') {
      city = `${city} `
    }

    if (address.postal_code) {
      postalCode = address.postal_code
    }

    if (postalCode !== '') {
      postalCode = `${postalCode} `
    }

    if (address.province_code || address.province) {
      if (address.province_code) {
        province = `${address.province_code}`
      }
      else {
        province = `${address.province}`
      }
    }

    if (address.country_code || address.country) {
      if (address.country_code) {
        country = `${address.country_code}`
      }
      else {
        country = `${address.country}`
      }
    }

    if (province !== '' && country !== '') {
      province = `${province}, `
      country = `${country}`
    }

    return `${street}${city}${province}${postalCode}${country}`
  }

  locate(address) {
    const formattedAddress = this.addressToString(address)

    return this.googleMaps().geocode({
      address: formattedAddress
    })
      .asPromise()
      .then((response) => {
        console.log('BROKE', response.json.results)
        const proxySchema = address
        if (response.json && response.json.results.length > 0) {
          // Formatted Address
          proxySchema.formatted_address = response.json.results[0].formatted_address || formattedAddress
          if (response.json.results[0].geometry && response.json.results[0].geometry.location) {
            proxySchema.latitude = response.json.results[0].geometry.location.lat
            proxySchema.longitude = response.json.results[0].geometry.location.lng
          }
          proxySchema.google_maps = response.json.results
        }
        else {
          proxySchema.formatted_address = formattedAddress
          proxySchema.latitude = 0
          proxySchema.longitude = 0
        }
        return proxySchema
      })

      // this.googleMaps().geocode({
      //   address: formattedAddress
      // }, function(err, response) {
      //   if (err) {
      //     return reject(err)
      //   }
      //   const proxySchema = address
      //   if (response.json && response.json.results.length > 0) {
      //     // Formatted Address
      //     proxySchema.formatted_address = response.json.results[0].formatted_address || formattedAddress
      //     if (response.json.results[0].geometry && response.json.results[0].geometry.location) {
      //       proxySchema.latitude = response.json.results[0].geometry.location.lat
      //       proxySchema.longitude = response.json.results[0].geometry.location.lng
      //     }
      //     proxySchema.google_maps = response.json.results
      //   }
      //   else {
      //     proxySchema.formatted_address = formattedAddress
      //     proxySchema.latitude = 0
      //     proxySchema.longitude = 0
      //   }
      //   return resolve(proxySchema)
  }
}

