import { FaAlignJustify } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import Avatar from "./Avatar";

function NavbarMobile() {
  return (
    <>
      <main className='w-screen h-9 flex items-center justify-between'>
        <section className='p-2'>
          <FaAlignJustify size={25} color='#474745' />
        </section>
        <section className='w-10'>
          <img src='../src/assets/HERO TITLE.png' alt='Hero logo' />
        </section>
        <section className='p-2 flex flex-row gap-2'>
          <MdOutlineShoppingCart size={25} />
          <Avatar />
        </section>
      </main>
    </>
  );
}
export default NavbarMobile;
