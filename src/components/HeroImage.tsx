import Button from "./Button";

function HeroImage() {
  const mainImage =
    "https://res.cloudinary.com/kgtlwrxi/image/upload/f_auto,q_auto/Gemini_Generated_Image__1";
  return (
    <>
      {/* height takes 11/12 while navbar which is rendered on top has h-1/12 */}
      <main className='p-4 h-11/12'>
        <section
          className={`h-full bg-[url(${mainImage})] bg-cover bg-center flex flex-col justify-end pb-20`}
        >
          <Button
            width={30}
            height={15}
            font={"Roboto"}
            textSize={"lg"}
            bgColor={"white"}
            label={"Shop Now"}
          />
        </section>
      </main>
    </>
  );
}
export default HeroImage;

//width, height, font, textSize, bgColor
