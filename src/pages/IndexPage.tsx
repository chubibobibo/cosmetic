import { NavbarMobile, HeroImage, ProductCard } from "../utils";
import { products } from "../utils/productList";

function IndexPage() {
  return (
    <main className='h-screen'>
      <NavbarMobile />
      <HeroImage />
      {products.map((allProducts) => {
        return (
          <section key={allProducts.id.$oid}>
            <ProductCard
              prodName={allProducts.name}
              prodDesc={allProducts.description}
              prodPrice={allProducts.price}
              prodIngredients={allProducts.ingredients}
              prodShipping={allProducts.shipping}
              prodVolume={allProducts.volume}
            />
          </section>
        );
      })}
    </main>
  );
}
export default IndexPage;
