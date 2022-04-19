import express from "express";
import Person from "../Database/models/Person.js";


const routes = express.Router();

routes.get('/persons', (req, res) => {
    Person.find().then((persons) =>{
        res.json(persons);
    })
})

routes.post('/person', (req, res) =>{
    Person.create(req.body).then((person)=>{
        res.json({
            message : 'Personne ajoutée avec succès'
        })
    });
})


routes.delete('/person/:id', (req, res) => {
    Person.deleteOne({"_id" : req.params.id}).then((person) => {
        res.json(person);
    })
})


export default routes;