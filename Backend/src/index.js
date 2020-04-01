const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();
app.use(cors()); // dentro do cors é a url origem da aplicação
/**
 * KNEX é um querry builder para JS
 * Após instalá-lo iniciar com "npx knex init"
 * Alterar no knexfile.js o diretorio do banco
 * Criar arquivo da tabela com "npx knex migrate:make <nome>
 * Aplicar com comandos dos arquivos ↑ e criar db com "npx knex migrate:latest"
 * Desfazer ultima alteração use "rollback", ou "status" para saber o que foi aplicado
 */
app.use(express.json());
app.use(routes);

app.listen(3333);