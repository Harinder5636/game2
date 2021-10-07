
const House = require("../models/house");

module.exports = {
    new: newHouse,
    create,
    index,
    show,
}

function show(req, res){
    House.findById(req.params.id, function(err, house){
        res.render('houses/show', { title: 'House review', house: house});
    });
}

function newHouse(req, res){
    res.render('houses/new')
}


function create(req, res){

    req.body.bedrooms = parseInt(req.body.bedrooms);
    req.body.bathrooms = parseInt(req.body.bathrooms);
    req.body.squarefeet = parseInt(req.body.squarefeet);
   
    House.create(req.body, function(err, createdHouse){
        if(err) return res.redirect('/houses/new');
        console.log(createdHouse, "created house <------")
        res.redirect('/houses')
    })
}

function index(req, res){
    House.find({}, function(err, housesDocuments){
        res.render('houses/index', {
            houses: housesDocuments
        })
    })
}


