// var express = require('express');
// var router = express.Router();
// const db = require('../db');
// const Student = require('../db/models/Student');
// const Campus = require('../db/models/Campus');

// router.route('/students')
// .get((req, res, next) => {
//     Student.findAll()
//     .then(student => {
//         res.json(student);
//     })
//     .catch(next);
// })

// // // .post((req, res, next) => {

// // //     const title = req.body.title;
// // //     const content = req.body.content;

// // //     if (!content){
// // //         res.status(500).json('This Article Should Not Be Allowed')
// // //     } else {
// // //         Article.create({
// // //             title: title,
// // //             content: content
// // //         })
// // //         .then(newUser => {
// // //             res.json({
// // //                 message: 'Created successfully',
// // //                 article: newUser
// // //             })
// // //         })
// // //         .catch(next);
// // //     }
// // // });

// // // router.route('/:id')
// // // .get((req, res, next) => {

// // //     Article.findOne({
// // //         where: { id : req.params.id},
// // //     })
// // //     .then(article => {
// // //         if(!article) {
// // //             res.status(404).json()
// // //         } else{
// // //             res.json(article)
// // //         }
// // //     })
// // //     .catch(next);
// // // })
// // // .put((req, res, next) => {
// // //     const id = req.params.id
// // //     const newTitle = req.body.title

// // //     Article.findOne({
// // //         where: {id: id}
// // //     })
// // //     .then(article => {
// // //         return article.update({
// // //             title: newTitle
// // //         });
// // //     })
// // //     .then(updatedArticle => {
// // //         res.json({
// // //             message: 'Updated successfully',
// // //             article: updatedArticle
// // //         })
// // //     })
// // //     .catch(next)
// // // });

// // module.exports = router;

//i added app, routes, and files in routes. 