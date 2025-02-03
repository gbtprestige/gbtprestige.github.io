const axios = require('axios');

async function sendPrices() {
    try {
        const khacnResponse = await axios.get('https://gbtprestige.github.io/api/khacn');
        const khacnData = khacnResponse.data;

        const strbResponse = await axios.get('https://gbtprestige.github.io/api/strb');
        const strbData = strbResponse.data;

        // Envoyer les prix aux plateformes externes (simulé)
        console.log('Sending prices to external platforms...');
        console.log('KHACN Price:', khacnData.price);
        console.log('STRB Price:', strbData.price);

        // Ici, vous pouvez ajouter des appels API réels aux plateformes externes si elles fournissent des webhooks
        // Exemple : await axios.post('https://external-platform.com/webhook', { symbol: 'KHACN', price: khacnData.price });

        console.log('Prices sent successfully');
    } catch (error) {
        console.error('Error sending prices:', error);
    }
}

sendPrices();
