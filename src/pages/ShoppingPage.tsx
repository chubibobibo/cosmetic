import { HeroImage, FilterBar, NavbarMobile } from "../utils";

function ShoppingPage() {
  return (
    <>
      <main className='h-screen'>
        <NavbarMobile />
        <HeroImage />
        <section className='flex justify-center'>
          <FilterBar />
        </section>
      </main>
    </>
  );
}
export default ShoppingPage;
