//const { response } = require("express");
//const { request, response } = require("express");

require("express-async-errors")

const AppError = require("./utils/AppError")

const { request, response } = require("express")
const express = require("express")

const routes = require("./routes")

const app = express()
app.use(express.json())

app.use(routes)

app.use((error, request, response, next) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.error(error)

    return response.status(500).json({
        status: "error",
        message: "internal server error"
    })
})

const PORT = 3333;
app.listen(PORT, () => console.log(`server ir running on Port ${PORT}`));


/*
app.get("/message/:id/:user",(request, response) => {
    const { id, user} = request.params;

    response.send(`
    Id da mensagem: ${id}. 
    para o usuário ${user}.`);
});
*/

/*
app.get("/users",(request,response) => {
    const {page, limit} = request.query;

    response.send(`Página: ${page}. Mostrar: ${limit}`);
}) 
*/
