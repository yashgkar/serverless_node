module.exports = {
    updateOrder: (id, updates) => {
        if (!id || !updates)
            throw new Error('Order ID and updates are required to update an order')

        return {
            message: `Order ${id} was successfuly updated`
        }
    }
}