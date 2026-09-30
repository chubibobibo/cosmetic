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
        <section className={`bg-cover bg-center flex flex-col justify-start`}>
          {/* Contents of card */}
          <section className='bg-red-300 h-70 mb-4 object-contain'>
            <img
              src={prodImage}
              alt=''
              className='w-80 h-70 object-cover object-center'
            />
          </section>
          <section className='flex flex-col gap-1'>
            <p className='font-Roboto text-base text-gray-800 font-semibold'>
              {prodName}
            </p>
            <p className='text-gray-500'>{prodVolume}ml</p>
            <p className='font-bold mb-10'>€ {prodPrice}</p>
            {/* <p>
              Ingredients:{" "}
              {prodIngredients.map((allIngredients, idx) => {
                return <span key={idx}>{`${allIngredients}, `}</span>;
              })}
            </p> */}
          </section>
          {/* Contents of card */}
        </section>
      </main>
    </>
  );
}
export default ProductCard;
