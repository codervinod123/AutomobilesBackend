const express=require("express");
const router=express.Router();

const CityController=require('../../controllers/city-controller')

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
// router.get('/city/:id', CityController.readcity);
router.patch('/city/:id', CityController.update);
router.get('/city', CityController.getall);
router.get('/city/:text', CityController.filtercity);


module.exports=router;