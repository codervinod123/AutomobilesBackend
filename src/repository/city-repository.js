const {City}=require("../models/index");
const { Op } =require("sequelize");

class CityRepository{
    
    async createCity({name}){
        try {
            const city=await City.create({name:name});
            return city;
        } catch (error) {
            console.log("error has occured on repository Layer",error);
            return false;
        }
    }


    async deleteCity(cityId){
        try {
            const city=await City.destroy({
                where:{
                    id:cityId
                }
            });
            return city;
        } catch (error) {
            console.log("error has occured on repository Layer",error);
            return false;
        }
    }


    async getCity(cityId){
        try {
            const city=await City.findByPk({
                where:{
                    id:cityId
                }
            });
            return city;
        } catch (error) {
            console.log("error has occured on repository Layer",error);
            return false;
        }
    }

    
    async updateCity(cityId,data){
        try {
            const city=await City.update(data,{
                where:{
                    id:cityId
                }
            });
            return city;
        } catch (error) {
            console.log("error has occured on repository Layer",error);
            return false;
        }
    }

    async getAll(){
        try {
            const city=await City.findAll();
            return city;
        } catch (error) {
            console.log("error has occured on repository Layer",error);
            return false;
        }
    }

    async filterCity(text){
        try {
            const filterCities=await City.findAll({
                where:{
                    name:{
                        [Op.like]: `${text}%`
                    }
                }
            });
            return filterCities;
        } catch (error) {
            console.log("error has occured on repository Layer",error);
            return false;
        }
    }

};

module.exports=CityRepository;