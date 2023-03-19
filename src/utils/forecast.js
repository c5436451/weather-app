const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=55e568832fedc267df67749d4dffd0b0&query=' + latitude + ',' + longitude
    request({url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,  ' It is currently ' + body.current.temperature + ' degress out. with ' + body.current.humidity + '% humidity. ' )
            //callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.current.temperature + ' degress out. This high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.current.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast