const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;

//conexión base de datos
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.svu57.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

const mongoose = require('mongoose');

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('Base de datos conectada...'))
.catch(e=>console.log(e));

//motor plantillas
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(__dirname + '/public'));

//import de las rutas
app.use('/', require('./router/routers'));
app.use('/project', require('./router/projects'));

app.use((req, res, next)=>{
    res.status(404).render('404');
});

app.listen(port, ()=>{
    console.log('Servidor iniciado en el puerto ', port);
});