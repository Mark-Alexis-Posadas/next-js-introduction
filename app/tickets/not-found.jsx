import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl mb-6">There was a problem.</h2>
        <p>We could not find the page you were looking for</p>
        <p>
          Go back to the <Link href="/tickets">Tickets</Link>
        </p>
      </div>
    </section>
  );
}
