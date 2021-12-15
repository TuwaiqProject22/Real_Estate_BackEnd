const AqarModel= require("../../db/models/AqarModel")

// عرض جميع العقارات 
const geAqars = async (req,res)=>{
    try {
         const  Aqar = await AqarModel.find({});
        res.status(200).json( Aqar)
    } catch (error){
        res.send(error)
    }
}


module.exports = { geAqars, postAqars, deleteAqar };