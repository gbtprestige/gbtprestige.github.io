const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/khacn', (req, res) => {
    const price = 550; // Prix minimum
    res.json({ symbol: 'KHACN', price: price });
});

app.get('/api/strb', (req, res) => {
    const price = 0.00000059; // Prix minimum
    res.json({ symbol: 'STRB', price: price });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
