const express = require('express');
const app = express();
const consign = require('consign');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

consign().include('routes').into(app);


app.listen(8080, () => {
    console.log("rodando...")
});