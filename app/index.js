const express = require('express');
const packageJson = require('../package.json');

const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        name: packageJson.name,
        version: packageJson.version,
    });
});

app.listen(port);
console.log(`API escuchando en el puerto ${port}`);
