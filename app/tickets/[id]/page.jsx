import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamicParams = true;

export const generateStaticParams = async () => {
  const response = await fetch("http://localhost:4000/tickets");
  const tickets = await response.json();

  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
};

const getTicket = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    notFound();
  }

  return response.json();
};

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id); // id from API

  return (
    <section>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <h2>Ticket Details</h2>
          <Link href="/tickets">
            <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
              Back
            </button>
          </Link>
        </nav>
      </div>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </section>
  );
}
