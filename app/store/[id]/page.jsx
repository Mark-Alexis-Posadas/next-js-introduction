import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export const dynamicParams = true;
export const generateParams = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const stores = await response.json();
  return stores.map((store) => ({
    id: store.id,
  }));
};

const getStore = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: {
      revalidate: 0,
    },
  });

  if (!response.ok) {
    notFound();
  }

  return response.json();
};
export default async function page({ params }) {
  const store = await getStore(params.id);
  return (
    <div>
      <nav className="flex items-center justify-between">
        <h2>Store Details</h2>
        <Link href="/store">
          <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            Back
          </button>
        </Link>
      </nav>
      <div className="card">
        <div className="grid grid-cols-2 items-center">
          <Image
            src={store.image}
            alt={store.title}
            width={300}
            height={300}
            style={{ objectFit: "contain", width: "200px", height: "200px" }}
          />
          <div>
            <h3>{store.title}</h3>
            <p>Price: {store.price}</p>
            <span>Category: {store.category}</span>
            <p>{store.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
