/**@col-span dictates how many spaces will it take in the grid set in the parent element*/
import { useState } from "react";
import ChipComponent from "./ChipComponent";

function FilterBar() {
  const [active, setActive] = useState(0);
  // const handleClick = (id) => {
  //   setActive(id);
  // };

  return (
    <>
      <main className='flex'>
        <ChipComponent
          title={"All"}
          active={active}
          setActive={setActive}
          id={1}
          size={"2"}
        />
        <ChipComponent
          title={"Hair"}
          active={active}
          setActive={setActive}
          id={2}
          size={"2"}
        />
        <ChipComponent
          title={"Body"}
          active={active}
          setActive={setActive}
          id={3}
          size={"2"}
        />
        <ChipComponent
          title={"Wellness"}
          active={active}
          setActive={setActive}
          id={4}
          size={"3"}
        />
        {/* <section
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
        </section> */}
      </main>
    </>
  );
}
export default FilterBar;
