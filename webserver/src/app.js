const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

// setup handlebars for handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../templates/views'));
hbs.registerPartials(path.join(__dirname, '../templates/partials'));

// Setup static directory to serve
app.use(express.static(path.join(__dirname, '../public')));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Misael Burboa'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Misael Burboa'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is a helpful text',
        title: 'Help',
        name: 'Misael Burboa'
    });
});


app.get('/weather', (req, res) => {
    const location = req.query.address;
    if (!location) {
        return res.send({
            error: 'Please provide an location'
        });
    }

    geocode(location, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error });
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error });
            }

            res.send({
                location: location,
                forecast: forecastData,
            });
        });
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        notFoundError: 'Help article not found',
        title: '404 Not Found',
        name: 'Misael Burboa'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        notFoundError: 'Page not found',
        title: '404 Not Found',
        name: 'Misael Burboa'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});