const express = require("express");
const listRouter = express.Router();
const createError = require("http-errors");

const User = require ("../models/user");
const List = require("../models/list");

// HELPER FUNCTIONS
const {isLoggedIn} = require("../helpers/middlewares");

// GET /lists - Show al lists
listRouter.get("/", (req, res, next) => {

    List.find()
    .populate('creator contributors')
    .then( (allLists) => {
        res
        .status(200)
        .json(allLists)
    })
    .catch( (err) => {
        res
        .status(400)
        .json(err);
    });
})

// GET /lists/:id - Show a specific list by id
listRouter.get("/:id", (req, res, next) => {

    const { id } =  req.params

    List.findById(id)
    .then( (oneList) => {
        res
        .status(200)
        .json(oneList)
    })
    .catch( (err) => {
        res
        .status(500)
        .json(err);
    });
})


// POST /lists  Create and save a new list
listRouter.post("/", isLoggedIn, (req, res, next) => {

    const  {name, tasks, status, isPrivate } = req.body;
    const { _id } = req.session.currentUser;

    List.create( {name, tasks, status, isPrivate, creator: _id } )
    .then( (createdList) => {
        res
        .status(201)
        .json(createdList)
    })
    .catch( (err) => {
        res
        .status(500)
        .json(err);
    });

})


// PUT /lists/:id - Edit a specific list, targeted by id
listRouter.put("/:id", (req, res, next) => {

    const {id} = req.params;
    const {name, tasks, status, isPrivate, contributorsIdArr} = req.body

    List.findByIdAndUpdate(id, {name, tasks, status, isPrivate, contributors: contributorsIdArr}, {new: true})
    .then( (updatedList) => {
        res.status(200).json( updatedList );
    })
    .catch( (err) => {
    })
})


// DELETE /lists/:id - Delete list by id
listRouter.delete('/:id', isLoggedIn, (req, res, next) => {

    const {id} = req.params;

    List.findByIdAndRemove(id)
    .then( () => {
        req.session.destroy( function(err) {
            res
            .status(204)
            .send();
        })
    })
    .catch( (err) => {
        res
        .status(500)
        .json(err);
    });
    });


module.exports = listRouter;