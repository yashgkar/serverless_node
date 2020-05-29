const claudiaapi = require("claudia-api-builder")
const getPizzas = require("./handlers/get-pizzas").getPizzas
const createOrder = require("./handlers/create-order").createOrder
const updateOrder = require("./handlers/update-order").updateOrder
const deleteOrder = require("./handlers/delete-order").deleteOrder

const api = new claudiaapi()

api.get('/', () => 'Welcome to pizzas api!')

api.get('/pizzas', () => {
    return getPizzas()
})

api.get('/pizzas/{id}', (request) => {
    return getPizzas(request.pathParams.id)
}, {
    error: 404
})

api.post('/orders', (request) => {
    return createOrder(request.body)
}, {
    success: 201,
    error: 400
})

api.put('/orders/{id}', (request) => {
    return updateOrder(request.pathParams.id, request.body)
}, {
    error: 404
})

api.delete('/orders/{id}', (request) => {
    return deleteOrder(request.pathParams.id)
}, {
    error: 400
})

module.exports = api