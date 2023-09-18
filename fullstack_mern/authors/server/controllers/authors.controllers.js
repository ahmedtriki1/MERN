const Authors = require("../models/authors.models")

// READ ALL
module.exports.readAll = (req, res) => {
    Authors.find().sort({Name:1})
    .then((allAuthors) =>{
        res.json(allAuthors)
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    })

}

// CREATE
module.exports.create = (req, res) => {
    Authors.create(req.body)
    .then((newlAuthors)=>{
        res.json({Show: newlAuthors})
    })
    .catch((err)=>{
        res.status(400).json({ message: "Something went wrong", error: err });
    });
};

//READ ONE
module.exports.findOne = (req, res) => {
    Authors.findOne({ _id: req.params.id })
        .then(oneSingleAuthors => {
            res.json({ Authors: oneSingleAuthors })
        })
        .catch((err) => {
            res.js
            on({ message: 'Something went wrong', error: err })
        });}

// UPDATE 
module.exports.update = (req, res) =>{
    Authors.findOneAndUpdate({_id: req.params.id}, req.body,
    {new: true, runValidators: true})
    .then((updatedAuthors)=>{
        res.json({Show: updatedAuthors})
    })
    .catch((err) => {
        res.status(400).json({ message: 'Something went wrong', error: err })
    });
}

// DELETE
module.exports.delete = (req, res) => {
    Authors.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}