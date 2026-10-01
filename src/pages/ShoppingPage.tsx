import { HeroImage, FilterBar, NavbarMobile } from "../utils";
import { Outlet } from "@tanstack/react-router";

function ShoppingPage() {
  return (
    <>
      <main className='h-screen'>
        <NavbarMobile />
        <HeroImage />
        <section className='flex justify-center'>
          <FilterBar />
        </section>
        <section>
          <Outlet />
        </section>
      </main>
    </>
  );
}
export default ShoppingPage;
