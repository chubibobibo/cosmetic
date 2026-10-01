import React from "react";
import { useNavigate } from "@tanstack/react-router";

interface PropType {
  title: string;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  id: number;
  size: string;
  link: string;
}

function ChipComponent({ title, active, setActive, id, size, link }: PropType) {
  const handleClick = (id: number) => {
    setActive(id);
  };
  const navigate = useNavigate({ from: "/shop" });
  return (
    <main
      className='grid grid-cols-3 -mt-10'
      onClick={() => navigate({ to: link })}
    >
      <button
        className={`flex col-span-${size} rounded-3xl h-7 ${active === id ? "bg-gray-300" : "bg-white"} px-2`}
        onClick={() => handleClick(id)}
      >
        {title}
      </button>
    </main>
  );
}
export default ChipComponent;
