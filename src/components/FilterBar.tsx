/**@col-span dictates how many spaces will it take in the grid set in the parent element*/
import { useState } from "react";

function FilterBar() {
  const [active, setActive] = useState(null);
  const handleClick = (id) => {
    setActive(id);
  };
  const styleActive = {
    1: "active: bg-blue-400",
    2: "active: bg-yellow-400",
  };

  console.log(active);
  console.log(styleActive[active]);

  return (
    <>
      <main className='grid grid-cols-10 -mt-10 gap-2'>
        <section
          className={`flex col-span-2 justify-center rounded-3xl h-7 ${styleActive[active]}`}
          onClick={() => handleClick(1)}
        >
          All
        </section>
        <section
          className={`flex col-span-2 justify-center rounded-3xl h-7 ${styleActive[active]}`}
          onClick={() => handleClick(2)}
        >
          Hair
        </section>
        <section className='flex col-span-3 justify-center rounded-3xl h-7'>
          Body
        </section>
        <section className='flex col-span-3 justify-center rounded-3xl h-7 px-2'>
          Wellness
        </section>
      </main>
    </>
  );
}
export default FilterBar;
