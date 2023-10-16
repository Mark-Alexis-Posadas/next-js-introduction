import Link from "next/link";

const getData = async () => {
  const response = await fetch("https://fakestoreapi.com/products", {
    next: {
      revalidate: 0,
    },
  });

  return response.json();
};

export default async function StoreList() {
  const data = await getData();

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((d, index) => {
        const { id, title, image } = d;
        return (
          <div key={index}>
            <Link href={`/store/${id}`}>
              <img src={image} alt={title} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
