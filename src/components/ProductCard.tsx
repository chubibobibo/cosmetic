interface ProductProps {
  prodName: string;
  prodDesc: string;
  prodPrice: number;
  prodIngredients: string[];
  prodShipping: string;
  prodVolume: number;
  prodImage: string;
}
function ProductCard({
  prodName,
  prodDesc,
  prodPrice,
  prodIngredients,
  prodShipping,
  prodVolume,
  prodImage,
}: ProductProps) {
  return (
    <>
      <main className='w-screen p-4 flex flex-col gap-1'>
        <section
          className={`h-screen bg-cover bg-center flex flex-col justify-start`}
        >
          {/* Contents of card */}
          <section className='bg-red-300 h-70 mb-10 object-contain'>
            <img
              src={prodImage}
              alt=''
              className='w-80 h-70 object-cover object-center'
            />
          </section>
          <section className='flex flex-col gap-1'>
            <p>Name: {prodName}</p>
            {/* <p>Description: {prodDesc}</p> */}
            <p>Price: {prodPrice}</p>
            <p>
              Ingredients:{" "}
              {prodIngredients.map((allIngredients, idx) => {
                return <span key={idx}>{`${allIngredients}, `}</span>;
              })}
            </p>

            {/* <p className='overflow-x-scroll h-20 border-1 border-gray-300 p-1'>
              shipping: {prodShipping}
            </p> */}
            <p>Volume: {prodVolume}</p>
          </section>
          {/* Contents of card */}
        </section>
      </main>
    </>
  );
}
export default ProductCard;
