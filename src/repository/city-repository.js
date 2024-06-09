const { where } = require("sequelize");
const {City}=require("../models/index");

class CityRepository{
    
    async createCity({name}){
        try {
            const city=await City.create({name:name});
            return city;
        } catch (error) {
            console.log("error has occured",error);
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
            console.log("error has occured",error);
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
            console.log("error has occured",error);
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
            console.log("error has occured",error);
        }
    }

};

module.exports=CityRepository;