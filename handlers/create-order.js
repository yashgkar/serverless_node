module.exports = {
    createOrder: (order) => {
        if (!order || !order.pizzaId || !order.address)
            throw new Error('To place an order please make sure you provide the pizza you would like and address where the pizza should be delivered.')

        return { }

    }
}