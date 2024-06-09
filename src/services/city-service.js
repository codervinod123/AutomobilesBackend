const CityRepository=require("../repository/city-repository");

class CityService{
   
    constructor(){
         this.cityRepository=new CityRepository();
    }

    async createCity(data){
           try {
              const city=await this.cityRepository.createCity(data);
              return city;
           } catch (error) {
              console.log("Error Has occured from create city Service");
              throw {error};
           }
    }

    async deleteCity(id){
        try {
           const city=await this.cityRepository.deleteCity(id);
           return city;
        } catch (error) {
           console.log("Error Has occured from create city Service");
           throw {error};
        }
   }


   async getCity(id){
    try {
       const city=await this.cityRepository.getCity(id);
       return city;
    } catch (error) {
       console.log("Error Has occured from create city Service");
       throw {error};
    }
}

async updateCity(id,data){
    try {
       const city=await this.cityRepository.updateCity(id,data);
       return city;
    } catch (error) {
       console.log("Error Has occured from create city Service");
       throw {error};
    }
}


   
}

module.exports=CityService;