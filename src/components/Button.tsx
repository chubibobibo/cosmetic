interface ButtonProps {
  width: number;
  height: number;
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
        className={`w-${width} h-${height} bg-${bgColor} text-${textSize} font-${font} p-1 rounded-full mx-auto flex justify-center items-center cursor-pointer hover:bg-customCream shadow-md active:scale-95 transition-transform duration-150 touch-manipulation`}
      >
        {label}
      </button>
    </>
  );
}
export default Button;
