const claudiaapi = require("claudia-api-builder")
const getPizzas = require("./handlers/get-pizzas").getPizzas

const app = new claudiaapi()

app.get('/', () => 'Welcome to pizzas api!')

app.get('/pizzas', () => {
    return getPizzas()
})

app.get('/pizzas/{id}', (request) => {
    return getPizzas(request.pathParams.id)
}, {
    error: 404
})

module.exports = app

//https://tple8gkrke.execute-api.eu-central-1.amazonaws.com/latest/pizzas