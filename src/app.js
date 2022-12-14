import express from "express";
import fs from "fs";
import https from "https";
import cors from "cors";
import router from "./routes.js";
import path from "path";

import bodyParser from "body-parser";

const app = express();
//body

// const path = require('path')
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use(express.static("public"));

app.set("views", path.join("src", "views"));

app.use(router);

app.listen(3000, () => console.log("Api Rodando."));

https
  .createServer(
    {
      cert: fs.readFileSync("src/SSL/code.crt"),
      key: fs.readFileSync("src/SSL/code.key"),
    },
    app
  )
  .listen(3001, () => console.log("Rodando em https"));
