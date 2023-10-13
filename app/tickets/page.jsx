import React, { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";

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
        <Suspense fallback={<Loading />}>
          <TicketList />
        </Suspense>
      </div>
    </section>
  );
}
