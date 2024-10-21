const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); //cors necesario para que acceda la api


const app = express();
const port = 3000;

// conexion con la DB
const db = mysql.createConnection({
    host: '194.163.140.159',
    user: 'extrauser', 
    password: 'extrauser', 
    database: 'petshop' 
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conexión exitosa a la base de datos MySQL');
});

app.use(cors());

// Endpoint para obtener todos los usuarios
app.get('/api/users', (req, res) => {
    const query = 'SELECT * FROM Usuarios'; //esta es el nombre de la tabla usuaios
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results); // Envía los resultados como JSON
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
