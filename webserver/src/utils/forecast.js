const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/19773cf1510fe9a5ab42b2bc0b4f7608/' + latitude + ',' + longitude + '?units=si';
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect the weather service');
        } else if (body.error) {
            callback('Unable to find location');
        } else {
            callback(undefined, {
                summary: body.daily.data[0].summary,
                temperature: 'It is currently ' + body.currently.temperature + ' degrees. ',
                precipProbability: 'There is a of ' + body.currently.precipProbability +'% chance of rain'
            });
        }
    });
};

module.exports = forecast;