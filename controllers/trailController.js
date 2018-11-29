const express = require('express');
const router = express.Router();

const Trail = require('../models/trail');

router.get('/', async (req, res, next) => {
    console.log(req.body, 'this is get all')
        try {
            const allTrails = await Trail.find();

            res.json({
                status: 200,
                data: allTrails
            });
        } catch (err){
            res.send(err)
        }
});
   
router.post('/', async (req, res) => {
    try {
        console.log(req.body, ' this is req.body');
        const addedTrail = await Trail.create(req.body);
        console.log('response happening')
        res.json({
            status: 201,
            data: addedTrail
        });
    } catch(err){
        console.log(err);
        res.send(err);
    }
});

router.get('/:trailId', async (req, res, next) => {
    try {
        const foundTrail = await Trail.findById(req.params.trailId);
        res.json({
            status: 200,
            data: foundTrail
        });
    } catch (err){
        res.send(err);
    }

});

 
router.put('/:trailId', async (req, res) => {
    try {
        const updatedTrail = await Trail.findByIdAndUpdate(req.params.trailId, req.body, {new: true});
        res.json({
            status: 200,
            data: updatedTrail
        });
    } catch(err){
      res.send(err)  
    }
});

router.delete('/:trailId', async (req, res) => {
    try {
        const deletedTrail = await Trail.findByIdAndRemove(req.params.trailId);
        res.json({
            status: 200,
            data: deletedTrail
        });
    } catch(err){
      res.send(err);
    }   
});

module.exports = router; 