const axios = require('axios');
const { createOrder } = require('../models/orderModel');
const broths = require('../models/brothModel');
const proteins = require('../models/proteinModel');
require('dotenv').config();

const generateOrderNumber = async () => {
    try {
        const response = await axios.post('https://api.tech.redventures.com.br/orders/generate-id', {}, {
            headers: {
                'x-api-key': process.env.API_KEY
            }
        });

        console.log('Response from external API:', response.data);

        const { orderId } = response.data;
        if (!orderId) {
            throw new Error('Order ID not found in the response');
        }
        return orderId;
    } catch (error) {
        console.error('Error generating order number:', error.message);
        throw new Error('Unable to generate order number');
    }
};

const createOrderHandler = async (req, res) => {
    const { brothId, proteinId } = req.body;

    console.log('Received IDs:', { brothId, proteinId });

    const broth = broths.find(b => b.id === brothId);
    const protein = proteins.find(p => p.id === proteinId);

    if (!broth || !protein) {
        return res.status(400).json({ error: 'Invalid broth or protein ID' });
    }

    try {
        const externalOrderId = await generateOrderNumber();
        const order = createOrder(brothId, proteinId, externalOrderId);

        res.json({
            id: order.id,
            description: `Order with broth ${brothId} and protein ${proteinId}`,
            image: 'https://tech.redventures.com.br/icons/ramen/ramenChasu.png'
        });
    } catch (error) {
        console.error('Error in createOrderHandler:', error.message);
        res.status(500).json({ error: 'Failed to create order' });
    }
};

module.exports = { createOrderHandler };