import Ticket from "./Ticket.js";
import Categoria from "./Categoria.js";
import Dispositivo from "./Dispositivo.js";

Ticket.belongsTo(Categoria, { foreignKey: "categoria_id" });
Categoria.hasMany(Ticket, { foreignKey: "categoria_id" });

Ticket.belongsTo(Dispositivo, { foreignKey: "dispositivo_id" });
Dispositivo.hasMany(Ticket, { foreignKey: "dispositivo_id" });

export { Ticket, Categoria, Dispositivo };