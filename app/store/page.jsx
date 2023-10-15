import React from "react";
import StoreList from "./StoreList";

export default function page() {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h1>Store</h1>
        <StoreList />
      </div>
    </section>
  );
}
