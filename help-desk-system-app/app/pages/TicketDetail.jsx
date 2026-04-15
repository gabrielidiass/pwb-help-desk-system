import { useParams } from "react-router-dom";

export default function TicketDetail() {
  const { id } = useParams();

  return <h1>Detalhe do Ticket {id}</h1>;
}