import NavbarTwo from "../_components/NavbarTwo";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default async function TestComponent() {
  const data = await getData();
  return (
    <>
      <NavbarTwo />
      <h1>Test Component</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-2">
        {data.map((d, idx) => (
          <div className="bg-gray-400 p-4" key={idx}>
            <h1>{d.title}</h1>
            <p>{d.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
