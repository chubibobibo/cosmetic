/**@col-span dictates how many spaces will it take in the grid set in the parent element*/
import { useState } from "react";
import ChipComponent from "./ChipComponent";

function FilterBar() {
  const [active, setActive] = useState(0);

  return (
    <>
      <main className='flex'>
        <ChipComponent
          title={"All"}
          active={active}
          setActive={setActive}
          id={1}
          size={"2"}
          link={"/shop"}
        />
        <ChipComponent
          title={"Hair"}
          active={active}
          setActive={setActive}
          id={2}
          size={"2"}
          link={"/shop/hairProducts"}
        />
        <ChipComponent
          title={"Body"}
          active={active}
          setActive={setActive}
          id={3}
          size={"2"}
          link={"/shop/bodyProducts"}
        />
        <ChipComponent
          title={"Wellness"}
          active={active}
          setActive={setActive}
          id={4}
          size={"3"}
          link={"/shop/wellnessProducts"}
        />
      </main>
    </>
  );
}
export default FilterBar;
