const axios = require ('axios');
//const { response } = require('express');

exports.homeRoutes = (req,res) => {
    axios.get('http://localhost:3000/api/companies')
    .then(function(response){
        res.render('index',{companies: response.data});
    })
   .catch(err =>{
    res.send(err);
   })
    
}

exports.add_company = (req,res) => {
    res.render('add_company');
    
}

exports.update_company = (req,res) => {
    axios.get('http://localhost:3000/api/companies', { params : {id:req.query.id}})
    .then(function(companydata){
        res.render("update_company", {company : companydata.data})
    })
    .catch(err =>{
        res.send(err);
    })
    
}