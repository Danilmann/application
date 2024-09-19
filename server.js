const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Привет, мир!');
});

app.listen(port, () => {
    console.log(`Сервер работает на порту ${port}`);
});
