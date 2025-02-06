import { Button } from "@/components/ui/button";
import imgHim from "../../assets/images/For_Him_2000x.webp";

const items = [
  {
    id: 1,
    title: "For Him",
    description: "Cupid-Approved Gifts He'll Adore",
    img: imgHim,
    click: "SHOP ALL",
    link: "/valentines",
  },
];

function ForHim() {
  return (
    <div className="mx-auto flex flex-col justify-between">
      <div>
        <ul className="flex flex-wrap bg-orange-50">
          {items.map((item) => (
            <li
              key={item.id}
              className="w-full flex flex-col md:flex-row items-center justify-center mb-8"
            >
              {/* Image Section */}
              <div className="w-full mb-4 md:mb-0">
                <a href={item.link}>
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-auto"
                  />
                </a>
              </div>

              {/* Text Section */}
              <div className="w-full flex flex-col items-center text-center md:pl-8">
                <a href={item.link}>
                  <h3 className=" md:text-6xl font-bold mb-2 text-[#bb0707] p-2">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-3xl p-2 font-medium ">
                    {item.description}
                  </p>
                  <Button className="w-37 h-12 max-w-37 max-h-12 text-2xl my-5 px-8 inline-block bg-[#f7921f] text-white font-semibold  rounded-full hover:bg-white hover:border hover:border-[#f7921f] hover:text-[#f7921f] hover:transition-all duration-300 ease-out hover:scale-105">
                    {item.click}
                  </Button>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex sm:flex-nowrap p-4 md:flex-wrap  justify-center">
        <Button
          variant="outline"
          className="rounded-lg mr-3 text-base px-6 py-4 font-normal"
        >
          Car visor clip
        </Button>
        <Button
          variant="outline"
          className="rounded-lg mr-3 text-base px-6 py-4 font-normal"
        >
          Leather belt
        </Button>
        <Button
          variant="outline"
          className="rounded-lg mr-3 text-base px-6 py-4 font-normal"
        >
          Whiskey glass
        </Button>
        <Button
          variant="outline"
          className="rounded-lg mr-3 text-base px-6 py-4 font-normal"
        >
          Mirror accessory
        </Button>
        <Button
          variant="outline"
          className="rounded-lg mr-3 text-base px-6 py-4 font-normal"
        >
          Boxer briefs
        </Button>
      </div>
    </div>
  );
}

export default ForHim;
