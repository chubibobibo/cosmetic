interface OpenStateProps {
  isOpenState: boolean;
}

function MenuMobile({ isOpenState }: OpenStateProps) {
  /**@modalOpen determines if component will be visible or hidden depending on the state value*/
  const modalOpen = isOpenState ? "flex" : "hidden";
  return (
    <>
      <main
        className={`${modalOpen} w-screen bg-red-500 fixed  flex items-start justify-center pt-20 transition-opacity duration-300 ${
          isOpenState
        } ? opacity-100 pointer-events-auto : opacity-0 pointer-events-none`}
      >
        <section>MenuMobile</section>
      </main>
    </>
  );
}
export default MenuMobile;
