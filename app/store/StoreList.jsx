import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const response = await fetch("https://fakestoreapi.com/products", {
    next: {
      revalidate: 10,
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
          <div className="card my-0 hover:bg-sky-700" key={index}>
            <Link
              href={`/store/${id}`}
              className="flex items-center justify-center h-full"
            >
              <Image src={image} alt={title} width={100} height={100} />
              {/* <img /> */}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
