const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];
if (!location) {
    return console.log("Please provide a location");
}

geocode(location, (error, { latitude, longitude, location }) => {
    if (error) {
        return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.error(error);
        }
        console.log(location);
        console.log(forecastData);
    });
});