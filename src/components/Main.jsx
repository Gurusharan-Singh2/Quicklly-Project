import { IoIosSearch } from "react-icons/io";
const Main = () => {
  return (
    <>
      <section className="container mx-auto px-36 ">
        <div className="flex  justify-between mt-10">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Collection</h2>
            <div className="flex gap-3">
              <div className="flex flex-col items-center border-2 rounded-lg p-2">
                <img src="./images/All.png" className="size-[80px]" alt="" />
                <a href="" className="text-red-500 text-sm font-semibold">
                  All
                </a>
              </div>
              <div className="flex flex-col items-center border-2 rounded-lg p-2">
                <img src="./images/All.png" className="size-[80px]" alt="" />
                <a href="" className=" text-sm  font-medium">
                  Navratri <br /> Special
                </a>
              </div>
              <div className="flex flex-col items-center border-2 rounded-lg p-2">
                <img src="./images/All.png" className="size-[80px]" alt="" />
                <a href="" className=" text-sm  font-medium">
                  Diwali <br /> Special
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col  ">
            <div className="flex justify-around items-center">
              <img
                src="./images/Deli.png"
                className="size-[28px] mx-2"
                alt=""
              />
              <h3 className="text-sm font-medium mx-1">Delivery on </h3>
              <input
                type="date"
                name=""
                id=""
                className=" inline-block h-6 border-2 py-2 px-1 ml-2"
              />
            </div>
            <div className="border-2 flex justify-between p-1 mt-8 items-center">
              <input
                type="text"
                placeholder="Search"
                className="w-full placeholder:text-sm"
              />
              <IoIosSearch className="text-lg" />
            </div>
          </div>
        </div>

        
      </section>
    </>
  );
};
export default Main;
