const { signedCookie } = require('cookie-parser');
var Compdb = require('../model/model');

// create data

exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({massage: "Content can not be empty"});
        return;
    }
    
    const company = new Compdb({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        status: req.body.status
    })
     //save to mongo db 

     company
       .save(company)
       .then(data =>{
        //res.send(data)
        res.redirect('/')
       })
       .catch(err =>{
        res.status(500).send({
            massage: err.massage || "some error occurred while creating operation"
        });
       });
    

}

// retreive all user and single
exports.find = (req,res) => {

    if(req.query.id){
        const id = req.query.id;
        Compdb.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({massage: `Can not found the company with ${id}. Maybe company not found`})
            }else{
                res.send(data)
            }
    
        })
        .catch(err =>{
            res.status(500).send({
                massage: "Error retriving company with id" +id})
        })



    }else{
        Compdb.find()
    .then(company=>{
        res.send(company)
    })
    .catch(err =>{
        res.status(500).send({
            massage: err.massage || "Error occured while retriving company information"
        })
    })

    }
    
}

//update by id
exports.update = (req,res) => {
    if(!req.body){
        return res
        .status(400)
        .send({massage: "Data to update can not be empty"});      
    }

    const id = req.params.id;
    Compdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data =>{
        if(!data){
            res.status(404).send({massage: `Can not update the company with ${id}. Maybe company not found`})
        }else{
            res.send(data)
        }

    })
    .catch(err =>{
        res.status(500).send({
            massage: "Error occured while retriving company information"})
    })
}

//delete by id

exports.delete = (req,res) => {
    const id = req.params.id;
    Compdb.findByIdAndDelete(id)
    .then(data =>{
        if(!data){
            res.status(404).send({massage: `Can not delete the company with ${id}. Maybe company id wrong`})
        }else{
            res.send({
                message: "Company eas deleted successfuly!"
            })
        }
    })
    .catch(err =>{
        res.status(500).send({
            massage: "Can not delete company with id = " +id
        });
    });
    
}