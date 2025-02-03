const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/khacn', async (req, res) => {
    try {
        // Vous pouvez ajouter ici une logique pour obtenir le prix actuel de KHACN si nécessaire
        const price = 550; // Prix minimum
        res.json({ symbol: 'KHACN', price: price });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/api/strb', async (req, res) => {
    try {
        // Vous pouvez ajouter ici une logique pour obtenir le prix actuel de STRB si nécessaire
        const price = 0.00000059; // Prix minimum
        res.json({ symbol: 'STRB', price: price });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
