const express = require('express');
const route = express.Router()
const services = require('../services/render');
const controller = require('../controller/controler');

route.get('/',services.homeRoutes)


route.get('/add-company',services.add_company)



route.get('/update-company',services.update_company)


//API route

route.post('/api/companies', controller.create);
route.get('/api/companies', controller.find);
route.put('/api/companies/:id', controller.update);
route.delete('/api/companies/:id', controller.delete);



module.exports = route