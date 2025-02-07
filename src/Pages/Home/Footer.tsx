import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Footer() {
  return (
    <div>
      <div className="w-full h-[200px] pt-8 pb-8 flex flex-col justify-center items-center  bg-[#fff8e6] ">
        <h1 className="text-[20px] sm:text-[30px] font-semibold">
          Today Only: Secret privileges for you!
        </h1>
        <div className="flex flex-col justify-center sm:grid grid-cols-2 gap-5 items-center ">
          <Input className="w-96 h-12 bg-white border border-[#f7921f] rounded-md hover:border-separate" />
          <Button className=" bg uppercase px-3 text-xl text-white font-bold h-12 rounded-lg bg-[#fb6718]">
            {" "}
            reveal now
          </Button>
        </div>
      </div>
      <div>
        <h1>FooterBottom</h1>
      </div>
    </div>
  );
}

export default Footer;
