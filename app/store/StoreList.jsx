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
        const { title, price, category, description, image } = d;
        return (
          <div key={index}>
            <img src={image} alt={title} />
          </div>
        );
      })}
    </div>
  );
}
