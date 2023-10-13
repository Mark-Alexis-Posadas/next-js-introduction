import React from "react";
import TicketList from "./TicketList";

export default function Tickets() {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <nav>
          <div>
            <h1>Tickets</h1>
            <p>
              <small>Currently open tickets.</small>
            </p>
          </div>
        </nav>

        <TicketList />
      </div>
    </section>
  );
}
