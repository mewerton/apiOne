const {Router} = require("express")

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()


const usersController = new UsersController()

usersRoutes.post("/", usersController.create) 

module.exports = usersRoutes

// Criando Middleware 
/*
function myMiddleware(request, response, next){
 console.log("você passou pelo Middleware")
 
 if(!request.body.isAdmin){
    return response.json({message: "user unauthorized"})
 }

 next()
}
*/
