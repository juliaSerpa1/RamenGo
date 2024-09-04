let orders = [];
let orderId = 1;

const createOrder = (brothId, proteinId, externalOrderId) => {
    const newOrder = { id: externalOrderId, brothId, proteinId };
    orders.push(newOrder);
    return newOrder;
};

module.exports = { createOrder };