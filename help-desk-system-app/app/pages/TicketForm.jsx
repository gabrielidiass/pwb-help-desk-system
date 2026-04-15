import { useParams } from "react-router-dom";

export default function TicketForm() {
  const { id } = useParams();

  return (
    <h1>{id ? `Editando ticket ${id}` : "Novo ticket"}</h1>
  );
}