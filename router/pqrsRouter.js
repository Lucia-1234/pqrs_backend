import {Router}from "express";

import {createPqrs,
        listPqrs,
        listIdPqrs,
        UpdatePqrs,
        DeletePqrs
}from "../controller/pqrsController.js"

const pqrsRouter = Router ();

pqrsRouter.get("/pqrs", listPqrs);
pqrsRouter.get("/pqrs/:id", listIdPqrs);
pqrsRouter.post("/pqrs", createPqrs);
pqrsRouter.put("/pqrs/:id", UpdatePqrs);
pqrsRouter.delete("/pqrs/:id", DeletePqrs);

export default pqrsRouter;