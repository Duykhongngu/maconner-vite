import CarouselSlideShow from "./SlideShow";

const BackGround = [
  {
    id: 1,
    link: "/",
    img: "https://macorner.co/cdn/shop/files/Cozy_Glow_4d7a5b03-73bb-4685-b95f-cfa8bcd99c06.png?v=1735272026&width=400",
    title: "Cozy Glow",
  },
  {
    id: 2,
    link: "/",
    img: "https://macorner.co/cdn/shop/files/Drinkware_598a14bf-7a61-46f2-8a7c-875d405bd1df.png?v=1732936352&width=400",
    title: "Drinkware",
  },
  {
    id: 3,
    link: "/",
    img: "https://macorner.co/cdn/shop/files/Glassware.png?v=1735274228&width=400",
    title: "Glassware",
  },
  {
    id: 4,
    link: "/",
    img: "https://macorner.co/cdn/shop/files/Car_Charm.png?v=1735271968&width=400",
    title: "Car Charm",
  },
  {
    id: 5,
    link: "/",
    img: "https://macorner.co/cdn/shop/files/Cozy_Nest.png?v=1732936351&width=400",
    title: "Cozy Nest",
  },
  {
    id: 6,
    link: "/",
    img: "https://macorner.co/cdn/shop/files/Snug-Wear_e5a7d2b7-d948-40bd-9441-1b522a0d2faf.png?v=1732936352&width=400",
    title: "Soft Ware",
  },
];
function Background() {
  return (
    <div className="flex flex-col">
      <div className="py-9 px-3">
        <ul className="flex  max-w-[1280px] m-auto justify-between  ">
          {BackGround.map((item) => (
            <li className=" w-[170px] h-[170px]    items-center " key={item.id}>
              <a href={item.link}>
                <div>
                  <img className="w-[170px] h-[170px]" src={item.img} alt="" />
                </div>
                <p className="w-[170px] h-[30.5px] text-center  px-4 pt-3">
                  {item.title}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Background;
