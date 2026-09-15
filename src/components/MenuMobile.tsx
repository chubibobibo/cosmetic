interface OpenStateProps {
  isOpenState: boolean;
}

function MenuMobile({ isOpenState }: OpenStateProps) {
  /**@modalOpen determines if component will be visible or hidden depending on the state value*/
  const modalOpen = isOpenState ? "flex" : "hidden";
  const opacityActive = isOpenState
    ? "opacity-100 pointer-events-auto"
    : "opacity-0 pointer-events-none";
  return (
    <>
      <main
        className={`${modalOpen} w-screen absolute bg-gray-50 flex items-start justify-center pt-5 pb-2 transition-opacity duration-300 ${opacityActive}`}
      >
        <section className='flex flex-col items-center gap-2'>
          <section>Shop</section>
          <section>Bundles</section>
          <section>Our Story</section>
        </section>
      </main>
    </>
  );
}
export default MenuMobile;
