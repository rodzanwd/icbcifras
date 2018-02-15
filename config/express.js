const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const multiparty = require('connect-multiparty');

module.exports = () => {
    const app = express();

    app.set('views', 'app/views');
    app.set('view engine', 'ejs');

    app.use(express.static('app/public'));

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(multiparty());

    app.use(function(req, res){
    
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Credentials", true);
      
    });

    consign()
        .include('app/models')
        .then('app/controllers')
        .then('app/routes')
        .into(app)
    ;

    return app;
}