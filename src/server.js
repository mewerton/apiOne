//const { response } = require("express");
//const { request, response } = require("express");
const express = require("express");

const routes = require("./routes")

const app = express();
app.use(express.json());

app.use(routes)

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