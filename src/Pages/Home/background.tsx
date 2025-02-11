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
    <div className="flex flex-col max-md:mx-2">
      <div className="py-9 px-3">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-[1280px] mx-auto">
          {BackGround.map((item) => (
            <li
              className="flex flex-col items-center justify-center"
              key={item.id}
            >
              <a href={item.link} className="flex flex-col items-center">
                <div className="w-[82px] h-[82px] sm:w-[82px] sm:h-[82px] lg:w-[170px] lg:h-[170px]">
                  <img
                    className="w-full h-full object-contain"
                    src={item.img || "/placeholder.svg"}
                    alt={item.title}
                  />
                </div>
                <p className="text-center px-2 pt-3 text-sm sm:text-base">
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
