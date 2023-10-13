import React from "react";
import Link from "next/link";

const getTickets = async () => {
  const response = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0,
    },
  });
  return response.json();
};

export default async function TicketList() {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket) => {
        const { id, title, body, priority } = ticket;
        return (
          <div key={id} className="card my-5">
            <Link href={`/tickets/${id}`}>
              <h3>{title}</h3>
              <p>{body.slice(0, 200)}...</p>
              <div className={`pill ${priority}`}>{priority} priority</div>
            </Link>
          </div>
        );
      })}

      {tickets.length === 0 && (
        <p className="text-center">There No open tickets</p>
      )}
    </>
  );
}
