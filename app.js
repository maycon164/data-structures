const express = require('express');
const app = express();
const consign = require('consign');
const MongoConnection = require('./database/MongoConnection');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('uploads'));

//Conexao com MongoDB
MongoConnection.getConnection();

consign().include('routes').into(app);

app.listen(8080, () => {
    console.log("rodando...")
});