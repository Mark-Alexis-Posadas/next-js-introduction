import CreateForm from "./CreateForm";

export default function CreateTicket() {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-primary text-center">Add new ticket</h2>
        <CreateForm />
      </div>
    </section>
  );
}
