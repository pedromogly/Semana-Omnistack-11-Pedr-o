const express = require('express'); //importando o modulo 'express' pra dentro
                                    //da váriavel express

const cors = require('cors');
const routes = require('./routes');
// a expressão ./ significa buscar na mesma pasta

const app = express(); //variavel que vai armazenar a aplicação

app.use(cors());
app.use(express.json()); //Antes das requisições, converter em json.
app.use(routes);

app.listen(3333); 
//npm instala um pacote / npx executa um pacote

/* Metodos HTTP
*   GET: Buscar uma informação no back-end
*   POST: crian uma informação no back-end
*   PUT: alterar uma informação no back-end
*   DELETE: deletar uma informação no back-end
*/

/*  Tipos de parametros

    Query Params: Parametros enviados na rota após o '?'(Filtros/Paginação)
    Route Params: Parametros utilizados para identificar recursos usados com '/:id'
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*  SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Sever
    NoSQL: MongoDB, CouchDB, etc
*/

//essa aplicação vai ouvir a porta 33
//Não usaremos a porta 80 porque ela da muitos problemas
//Se colocarmos apenas a listen e executarmos o index, não teremos nenhuma rota