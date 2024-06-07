const {City}=require('../models/index');

class cityRepository{
   
    async createCity({name}){
        try {
            const city=await City.create({
                name:name
            });
            return city;
        } catch (error) {
            console.log("Somewhere error has occured");
            throw {error}; 
        }
    }

    async getCity(cityId) {
        try {
            const city=await City.findByPk(cityId);
            return city; 
        } catch (error) {
            console.log("Error Has occured", error);
            throw {error};
        }
    }

    async updateCity(cityId,newName){
        try {
             const city=await City.update(newName,{
                where:{
                    id:cityId
                }
             })
             return city
        } catch (error) {
            console.log("Somewhere error has occured");
            throw {error} 
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where:{
                    id:cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Somewhere error has occured");
            throw {error} 
        }
    }

}

module.exports=cityRepository;