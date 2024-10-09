const express=require('express')
const userController=require('../controllers/userController')
const projectController=require('../controllers/projectController')
const jwtMiddle=require("../middlewares/jwtmiddleware")

const routes=express.Router()
routes.post('/reg',userController.userRegistration)
routes.post('/log',userController.userLogin)

routes.post('/addproject',jwtMiddle,projectController.addProject)




// routes.get('/products',userController.productSet)
// routes.get('/products/:pid',userController.getProduct)

module.exports=routes