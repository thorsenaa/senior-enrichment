'use strict'
const api = require('express').Router()
const db = require('../db')
const Student = require('../db/models/Student');
const Campus = require('../db/models/Campus');


// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.get('/students', (req, res, next) => {
    Student.findAll()
    .then(student => {
        res.json(student);
    })
    .catch(next);
})

api.get('/campuses', (req, res, next) => {
    Campus.findAll()
    .then(campus => {
        res.json(campus);
    })
    .catch(next);
})

api.get('/campuses/:id', (req, res, next) => {

    Campus.findOne({
        where: { id : req.params.id},
    })
    .then(campus => {
        if(!campus) {
            res.status(404).json()
        } else{
            res.json(campus)
        }
    })
    .catch(next);
})

api.get('/students/:id', (req, res, next) => {
	
	Student.findOne({
		where: { id : req.params.id},
	})
	.then(student => {
		if(!student) {
			res.status(404).json()
		} else{
			res.json(student)
		}
	})
	.catch(next);
})

api.post('/students',(req, res, next) => {

	Student.create(req.body)
	.then(student => {
		if(!student) {res.sendStatus(404)} 
		res.json(student)
	})
	.catch(next);
});

api.post('/campuses',(req, res, next) => {

	Campus.create(req.body)
	.then(campus => {
		if(!campus) {res.sendStatus(404)}
		res.json(campus)
	})
	.catch(next);
});

//how to check in postico
api.put('campuses/:id', function (req, res, next) {
	const id = req.params.id;

	Campus.findById(id)
		.then(newInfo => newInfo.update(req.body))
		.catch(next);
});

api.put('campuses/:id', function (req, res, next) {
	const id = req.params.id;

	Campus.findById(id)
		.then(newInfo => newInfo.update(req.body))
		.catch(next);
});

api.delete('/campuses/:id',(req, res, next) => {
	const id = req.params.id;
	
	Campus.destroy({ where: { id } })
		.then(() => res.status(204).end())
		.catch(next);
})

api.delete('/students/:id',(req, res, next) => {
	const id = req.params.id;
	
	Student.destroy({ where: { id } })
		.then(() => res.status(204).end())
		.catch(next);
})

module.exports = api