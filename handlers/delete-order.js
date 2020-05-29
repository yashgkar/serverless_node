module.exports = {
    deleteOrder: (id) => {
        if (!id)
            throw new Error('Order ID is required for deleting the order')

        return {
            message: `Order ${id} was deleted`
        }
    }
}