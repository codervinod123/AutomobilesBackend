const express=require("express");

const router=express.Router();

const APIRouter=require("./version1/index");
router.use('/version1', APIRouter);

module.exports=router;
