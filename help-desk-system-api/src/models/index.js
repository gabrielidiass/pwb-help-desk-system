import Ticket from "./Ticket.js";
import Categoria from "./Categoria.js";
import Dispositivo from "./Dispositivo.js";


// Ticket → Categoria
Ticket.belongsTo(Categoria, {
  foreignKey: "categoria_id",
});

Categoria.hasMany(Ticket, {
  foreignKey: "categoria_id",
});


Dispositivo.belongsTo(Ticket, {
  foreignKey: "dispositivo_id",
});

Ticket.hasMany(Dispositivo, {
  foreignKey: "dispositivo_id",
});

export { Ticket, Categoria, Dispositivo };