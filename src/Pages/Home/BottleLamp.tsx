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
    <section className="w-full py-6 sm:py-8 md:py-10 bg-white">
      <div className="container px-4 mx-auto max-w-7xl">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
          {BackGround.map((item) => (
            <li
              key={item.id}
              className="group relative flex flex-col items-center justify-center p-2 sm:p-3 rounded-lg transition-transform hover:-translate-y-1"
            >
              <a
                href={item.link}
                className="flex flex-col items-center w-full space-y-3"
                aria-label={`View ${item.title} category`}
              >
                <div className="relative w-full aspect-square">
                  <div className="absolute inset-0 rounded-lg bg-gray-50/50 group-hover:bg-gray-50/80 transition-colors" />
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt=""
                    className="w-full h-full object-contain p-4 sm:p-6 relative z-10 transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm sm:text-base font-medium text-gray-900 text-center group-hover:text-orange-500 transition-colors">
                  {item.title}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Background;
