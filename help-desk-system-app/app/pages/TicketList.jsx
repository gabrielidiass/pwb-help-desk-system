import { useEffect, useState } from "react";
import { getTickets } from "../services/ticketService";

export default function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    loadTickets();
  }, []);

  const loadTickets = async () => {
    const data = await getTickets();
    setTickets(data);
  };

  return (
    <div>
      <h1>Tickets</h1>

      <ul>
        {tickets.map((t) => (
          <li key={t.id}>{t.title}, {t.description}, {t.status}, {t.categoryId},  {t.user}, {t.dev}</li>
        ))}
      </ul>
    </div>
  );
}
