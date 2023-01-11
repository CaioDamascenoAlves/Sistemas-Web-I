const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongooseConnection = require("./config/mongooseConnection.config");

const app = express();

// ==> Rotas da API:
const index = require("./routes/index");
const pessoaRoutes = require("./routes/pessoa.routes");
const tipoSanguineoRoutes = require("./routes/tipoSanguineo.routes");
const localColetaRoutes = require("./routes/localColeta.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(morgan("dev"));
app.use(cors());

// ==> Retornando a conexão via mongoose via external file usando 'app.set()'
app.set("mongoose connection", mongooseConnection);

app.use(index);
app.use("/api/", pessoaRoutes);
app.use("/api/", tipoSanguineoRoutes);
app.use("/api/", localColetaRoutes);

module.exports = app;
