const CityRepository=require("../repository/index");

class CityService{
   
    constructor(){
         this.cityRepository=new CityRepository();
    }

    async createCity(data){
           try {
              const city=await this.cityRepository.createCity(data);
              return city;
           } catch (error) {
              console.log("Error Has occured while creating city from Service");
              throw {error};
           }
    }

    async deleteCity(id){
        try {
           const city=await this.cityRepository.deleteCity(id);
           return city;
        } catch (error) {
           console.log("Error Has occured while deleting city from service");
           throw {error};
        }
    }


    async getCity(id){
    try {
       const city=await this.cityRepository.getCity(id);
       return city;
    } catch (error) {
       console.log("Error Has occured whilet getting ones city from Service");
       throw {error};
    }
    }

    async updateCity(id,data){
    try {
       const city=await this.cityRepository.updateCity(id,data);
       return city;
    } catch (error) {
       console.log("Error Has occured while updating city from Service");
       throw {error};
    }
    }

   async getAll(){
      try {
         const city=await this.cityRepository.getAll();
         return city;
      } catch (error) {
         console.log("Error Has occured gatt all city from Service");
         throw {error};
      }
   }

   async filterCity(text){
      try {
         const filterCities=await this.cityRepository.filterCity(text);
         return filterCities;
      } catch (error) {
         console.log("Error Has occured while filtering city from Service");
         throw {error};
      }
   }


   
}

module.exports=CityService;