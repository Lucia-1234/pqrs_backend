export const pqrs = [
  {
    id: 1,
    type: "queja",
    descripcion: "El servicio de salud es muy malo, las lienas siempre estan colapsadas"
  },
  {
    id: 2,
    type: "Peticion",
    descripcion: "Solicito que agregen más lineas telefonicas y más personal de atención"
  },
  {
    id: 3,
    type: "Reclamo",
    descripcion: "Llevo una semana tratando de sacar una cita medica y la liena de atención no pasa del timbre"
  },
  {
    id: 4,
    type: "Sugerencia",
    descripcion: "Sugiero que pongan un punto fisico eficiente para las citas en la EPS"
  },
];

export const getPqrs = () => {
  return pqrs;
};

export const getPqrsById = (id) => {
  return pqrs.find((u) => u.id === id);
};