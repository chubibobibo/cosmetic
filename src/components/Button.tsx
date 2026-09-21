interface ButtonProps {
  width: string;
  height: string;
  font: string;
  textSize: string;
  bgColor: string;
  label: string;
}

function Button({
  width,
  height,
  font,
  textSize,
  bgColor,
  label,
}: ButtonProps) {
  return (
    <>
      <button
        className={`${width} ${height} ${bgColor} ${textSize} ${font} p-1 rounded-full mx-auto flex justify-center items-center cursor-pointer hover:bg-customCream shadow-md active:scale-95 transition-transform duration-150 ease-in-out active:bg-gray-200 touch-manipulation`}
      >
        {label}
      </button>
    </>
  );
}
export default Button;
