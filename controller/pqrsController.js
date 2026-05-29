import {pqrs} from "../model/pqrsModel.js";

const createPqrs = (req, res) => {
  pqrs
  res.json({
    mensaje: "Las PQRS creadas: ",
    data: pqrs
  })
};

const listPqrs = (req, res) => {
  pqrs
  res.json({
    mensaje: "PQRS por id",
    data:pqrs

  })
};

const listIdPqrs = (req, res) => {
  pqrs/id
  res.json({
    mensaje: "PQRS por id",
    data:pqrs/id

  })
};

const UpdatePqrs = (req, res) => {
  pqrs
  res.json({
    mensaje: "PQRS actualizadas",
    data:pqrs
  })
};

const DeletePqrs = (req, res) => {
  res.json({
    mensaje: "PQRS eliminadas correctamente"
  })
};


export {
  createPqrs,
  listPqrs,
  listIdPqrs,
  UpdatePqrs,
  DeletePqrs
}