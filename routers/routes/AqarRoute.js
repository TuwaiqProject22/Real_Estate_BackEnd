const express = require("express");
const AqarRoute = express.Router();

const { geAqars, postAqars, deleteAqar } = require("../controllers/Aqar");

AqarRoute.get("/Aqars", geAqars);
AqarRoute.post("/Aqars", postAqars);
AqarRoute.delete("/Aqar:id", deleteAqar);

module.exports = AqarRoute;
