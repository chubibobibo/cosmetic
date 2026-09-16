import { FaAlignJustify } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Avatar from "./Avatar";
import MenuMobile from "./MenuMobile";
import { useState } from "react";

function NavbarMobile() {
  const [isOpenState, setIsOpenState] = useState(false);

  const handleIsOpenClick = () => {
    setIsOpenState((prev: boolean) => !prev);
    console.log("clicked");
  };

  return (
    <>
      <main className='h-1/12 flex items-center justify-between border-b-1 border-gray-300'>
        <section className='p-2' onClick={handleIsOpenClick}>
          {!isOpenState ? (
            <button>
              <FaAlignJustify size={25} color='#474745' />
            </button>
          ) : (
            <button>
              <IoClose size={25} color='#474745' />
            </button>
          )}

          {/* modal for home menu */}
        </section>
        <section className='flex fixed mt-10 h-fit'>
          <MenuMobile isOpenState={isOpenState} />
        </section>
        <section className='pl-8 w-20'>
          <img src='../src/assets/HERO TITLE.png' alt='Hero logo' />
        </section>
        <section className='p-2 flex flex-row gap-2 items-center'>
          <MdOutlineShoppingCart size={25} />
          <Avatar />
        </section>
      </main>
    </>
  );
}
export default NavbarMobile;
