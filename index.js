import express from "express";
const app = express();
const port = 3001;

import pqrsRouter from "./router/pqrsRouter.js"

app.use(express.json());
app.use("/api", pqrsRouter);

app.listen(port,"0.0.0.0", () => {
  console.log(`Tengo un servidor que si funciona, y nos escucha por un puerto que es ===> ${port} <===`)
});