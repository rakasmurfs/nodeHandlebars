var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers/", function(req, res){
    burger.insertOne("burgers", "burger_name", "devoured", req.body.name, req.body.devoured, function(result){
        console.log(req.body.name)
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res){
    var eatThisBurger = req.params.id;

    burger.updateOne("burgers", "devoured", 1, eatThisBurger, function(result){
        if (result.changedRows == 0) {
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = req.params.id;
  
    burger.deleteOne("burgers", condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  module.exports = router;
  