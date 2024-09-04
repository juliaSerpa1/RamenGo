const broths = require('../models/brothModel');

const getBroths = (req, res) => {
    res.json(broths);
};

const getBrothById = (req, res) => {
    const brothId = parseInt(req.params.id, 10);
    const selectedBroth = broths.find(b => b.id === brothId);
    
    if (selectedBroth) {
        res.json(selectedBroth);
    } else {
        res.status(404).json({ error: 'Broth not found' });
    }
};

module.exports = { getBroths, getBrothById };