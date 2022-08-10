const AppError = require("../utils/AppError")

class UsersController{
    create(request, response){
        const {name, email, password} = request.body;

        if(!name){
            throw new AppError("Nome é obrigatório")
        }

        response.status(201).json({name, email, password});
    }

}

module.exports = UsersController



/**
Um controller pode ter no máximo 5 métodos
* Index -  GET para LISTAR vários registros
* show -  GET para EXIBIR um usuário específico
* create - POST para CRIAR um registro
* update - PUT para ATUALIZAR uum registro
* delete - DELETE para REMOVER um registro
*/
