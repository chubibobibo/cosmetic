import { useNavigate } from "@tanstack/react-router";

interface ButtonProps {
  width: string;
  height: string;
  font: string;
  textSize: string;
  bgColor: string;
  label: string;
  handleClick: string;
}

function Button({
  width,
  height,
  font,
  textSize,
  bgColor,
  label,
  handleClick,
}: ButtonProps) {
  const navigate = useNavigate({ from: "/" });
  return (
    <>
      <button
        className={`${width} ${height} ${bgColor} ${textSize} ${font} p-1 rounded-full mx-auto flex justify-center items-center cursor-pointer hover:bg-customCream shadow-md active:scale-95 transition-transform duration-150 ease-in-out active:bg-gray-200 touch-manipulation`}
        onClick={() => navigate({ to: `${handleClick}` })}
      >
        {label}
      </button>
    </>
  );
}
export default Button;
