const House = require('../models/house');

module.exports = {
    create,
    update: updateFile, 
    delete: deleteReview,
};

function create(req, res){
    House.findById(req.params.id, function(err, house){
        req.body.userId = req.user._id;
        req.body.userName = req.user.name;
        house.reviews.push(req.body);
        house.save(function(err, house){
            res.redirect(`/houses/${req.params.id}`)

        })
    })
}

function deleteReview(req, res) {
    House.findOne({'reviews._id': req.params.id}, function(err, house) {
      const reviewSubdoc = house.reviews.id(req.params.id);
      if (!reviewSubdoc.userId.equals(req.user._id)) return res.redirect(`/houses/${house._id}`);
      reviewSubdoc.remove();
      house.save(function(err) {
        res.redirect(`/houses/${house._id}`);
      });
    });
  }



function updateFile(req, res) {
    House.findOne({'reviews._id': req.params.id}, function(err, house) {
      const reviewSubdoc = house.reviews.id(req.params.id);
      if (!reviewSubdoc.userId.equals(req.user._id)) return res.redirect(`/houses/${house._id}`);
      reviewSubdoc.description = req.body.description;
      reviewSubdoc.rating = parseInt(req.body.rating);
      house.save(function(err) {
        res.redirect(`/houses/${house._id}`);
      });
    });
  }
  