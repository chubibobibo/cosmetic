interface ProductProps {
  prodName: string;
  prodDesc: string;
  prodPrice: number;
  prodIngredients: string[];
  prodShipping: string;
  prodVolume: number;
}
function ProductCard({
  prodName,
  prodDesc,
  prodPrice,
  prodIngredients,
  prodShipping,
  prodVolume,
}: ProductProps) {
  return (
    <>
      <main className='w-screen h-screen bg-red-400'>
        <section>
          <p>Name: {prodName}</p>
          <p>Description: {prodDesc}</p>
          <p>Price: {prodPrice}</p>
          {/* <p>
            Ingredients:{" "}
            {`${prodIngredients[0]}, ${prodIngredients[1]}, ${prodIngredients[2]}`}
          </p> */}
          <p>
            Ingredients:{" "}
            {prodIngredients.map((allIngredients) => {
              return <span>{`${allIngredients}, `}</span>;
            })}
          </p>
          {/* <p>Ingredients: {`${[...prodIngredients]} `}</p> */}

          <p>shipping: {prodShipping}</p>
          <p>Volume: {prodVolume}</p>
        </section>
      </main>
    </>
  );
}
export default ProductCard;
