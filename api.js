const claudiaapi = require("claudia-api-builder")
const app = new claudiaapi()


app.get('/pizzas', () => {
    return [
        'Capricciosa',
        'Quattro Formaggi',
        'Napoletana',
        'Margherita'
    ]
});

module.exports = app


//https://tple8gkrke.execute-api.eu-central-1.amazonaws.com/latest/pizzas