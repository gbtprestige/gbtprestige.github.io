const express = require('express');
const axios = require('axios');
const app = express();

// Endpoint pour KHACN
app.get('/api/khacn', (req, res) => {
    const price = 550; // Prix minimum
    res.json({ symbol: 'KHACN', price: price });
});

// Endpoint pour STRB
app.get('/api/strb', (req, res) => {
    const price = 0.00000059; // Prix minimum
    res.json({ symbol: 'STRB', price: price });
});

// Endpoint pour envoyer les prix aux plateformes externes
app.post('/api/send-prices', async (req, res) => {
    try {
        const khacnResponse = await fetch('https://xcryptocap.onrender.com/api/khacn');
        const khacnData = await khacnResponse.json();

        const strbResponse = await fetch('https://xcryptocap.onrender.com/api/strb');
        const strbData = await strbResponse.json();

        console.log('Sending prices to external platforms...');
        console.log('KHACN Price:', khacnData.price);
        console.log('STRB Price:', strbData.price);

        console.log('Prices sent successfully');
        res.send('Prices sent successfully');
    } catch (error) {
        console.error('Error sending prices:', error);
        res.status(500).send('Error sending prices');
    }
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
