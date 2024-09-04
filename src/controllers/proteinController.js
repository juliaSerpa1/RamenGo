const proteins = require('../models/proteinModel');

const getProteins = (req, res) => {
    res.json(proteins);
}


const getProteinById = (req, res) => {
    const proteinId = parseInt(req.params.id, 10);
    const selectedProtein = proteins.find(b => b.id === proteinId);
    
    if (selectedProtein) {
        res.json(selectedProtein);
    } else {
        res.status(404).json({ error: 'Protein not found' });
    }
};

module.exports = { getProteins, getProteinById };