import { CiSearch,CiGift } from "react-icons/ci";
import { GoPersonAdd } from "react-icons/go";
import { IoCart } from "react-icons/io5";

const Header=()=>{
  return <>
<header className="flex justify-between items-center border-b-2
border-t-2 pb-2   mt-2 sticky top-0">
  <div><img className="h-8" src="https://www.quicklly.com/images/quicly-logo-black.png" alt="" /></div>
  <div className="flex flex-col items-start border-r-2"><p className="text-sm">Shopping in</p>
  <select name="" id="" className=" font-bold text-sm mr-4" >
    <option value="" > 1400 N Lake Shore</option>
    <option value="">1400 N Lake Bhore</option></select></div>
  <div className="flex flex-col items-start border-r-2 mr-2"><p className="text-sm">Shop by</p>
  <select name="" id="" className="font-semibold text-sm">
    <option value="">Department</option>
    <option value="">Department B</option></select></div>
    <div><p className="text-sm">Shop by</p>
    <h3 className="font-semibold text-sm">Store</h3>
    </div>
    <div className="border-2 flex items-center rounded-md px-3 py-1 ">
      <input type="text" placeholder="Search for products" className="w-96" />
      <CiSearch className="bg-green-600 text-white font-bold text-xl rounded-sm" />
    </div>
    <div className="flex border-l-2 p-2">
    <CiGift className=" text-2xl " />
    </div>
    <div className="flex border-l-2 border-r-2  p-2">
    <GoPersonAdd className=" text-2xl "  />
    </div>
   
    
    <div className="flex flex-col items-start border-r-2"><p className="text-sm">Hello Test</p>
  <select name="" id="" className="text-sm">
    <option value="">Your Account</option>
    <option value="">Department B</option></select></div>
    <div className=" relative mr-3 mt-1">
    <IoCart className="text-2xl" />
    <div class="absolute inline-flex items-center justify-center w-3 h-3 p-2    text-white bg-green-500  rounded-full -top-2 -end-2 badge ">20</div>
    </div>



</header>
  </>
}
export default Header;