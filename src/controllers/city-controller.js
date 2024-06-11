const CityService=require("../services/index");


const CityController=new CityService();

const create=async(req,res)=>{
      try {
          const city=await CityController.createCity(req.body);
          return res.status(201).json({
              data:city,
              success:true,
              message:"City has been added successfully!2345678",
              error:{}
          })
      } catch (error) {
        return res.status(500).json({
            data:null,
            success:false,
            message:"City Can't be added to the TABLE",
            error:error
        })
      }
}

const destroy=async(req,res)=>{
    try {
        const city=await CityController.deleteCity(req.params.id);
        return res.status(201).json({
            data:city,
            success:true,
            message:"City has been Deleted successfully",
            error:{}
        })
    } catch (error) {
      return res.status(500).json({
          data:null,
          success:false,
          message:"City Can't be Deleted from the TABLE",
          error:error
      })
    }
}

const readcity=async(req,res)=>{
    try {
        const city=await CityController.getCity(req.params.id);
        return res.status(201).json({
            data:city,
            success:true,
            message:"one City has been fetched successfully",
            error:{}
        })
    } catch (error) {
      return res.status(500).json({
          data:null,
          success:false,
          message:"City Can't be fetched from the TABLE",
          error:error
      })
    }
}

const update=async(req,res)=>{
    try {
        const city=await CityController.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"City has been Updated successfully",
            error:{}
        })
    } catch (error) {
      return res.status(500).json({
          data:null,
          success:false,
          message:"City Can't be Updated from the TABLE",
          error:error
      })
    }
}


const getall=async(req,res)=>{
    try {
        const city=await CityController.getAll();
        // console.log();
        return res.status(201).json({
            data:city,
            success:true,
            message:"All City has fetched successfully Reso from Controller",
            error:{}
        })
    } catch (error) {
      return res.status(500).json({
          data:null,
          success:false,
          message:"All City Can't be fetched from the TABLE",
          error:error
      })
    }
}


const filtercity=async(req,res)=>{
  try {
      const filtercities=await CityController.filterCity(req.params.text);
      return res.status(200).json({
        data:filtercities,
        success:true,
        message:"City has filtered successfully",
        error:{}
      })
  } catch (error) {
    return res.status(200).json({
        data:{},
        success:false,
        message:"City has not filtered successfully",
        error:{}
      })
  }
} 


module.exports={
    create,
    destroy,
    readcity,
    update,
    getall,
    filtercity
}