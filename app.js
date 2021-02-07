const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Static
app.use(express.static(path.join(__dirname + '/public')));

// Motor de Plantillas
app.set('view engine', 'ejs');
app.set('views', path.join( __dirname + '/views'));

// Rutas
app.use('/', require(path.join( __dirname + '/routes/router')));

// Pagina 404
app.use('/', (req, res) => {
    res.sendFile(path.join( __dirname + '/public/404.html'));
});

app.listen(port, () => {
    console.log('Servidor en puerto ', port);
})