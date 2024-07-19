import { useState } from 'react';
import { CiUser } from "react-icons/ci";
import { RiMenu2Line } from "react-icons/ri";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <div className="bg-white md:bg-primaryDark">
                <div className="container justify-between items-center py-3 hidden md:flex">
                    <div className="flex gap-8 items-center">
                        <h2 className="text-white text-[35px] cursor-pointer">Logo</h2>
                        <div className="relative">
                            <input className="px-4 py-3 rounded-sm w-[200px] h-[40px]" type="text" placeholder="Search..." />
                        </div>
                    </div>
                    <div className="text-white flex gap-6 text-[30px] cursor-pointer">
                        <div><CiUser /></div> 
                        <div className="relative">
                            <AiOutlineShopping />
                            <div className="bg-red-600 w-[20px] h-[20px] grid place-items-center text-[12px] rounded-full absolute right-[-10px] top-[15px]">0</div>
                        </div>
                        <RiMenu2Line onClick={toggleMenu} />
                        
                       
                    </div>
                </div>

                {/*   for mobile      */}
                <div className="container  flex justify-between items-center text-[20px] py-4 md:hidden">
                    <RiMenu2Line onClick={toggleMenu} />
                  
                    
                    <div>Logo</div>
                    <div className="relative">
                        <AiOutlineShopping />
                        <div className="bg-red-600 w-[20px] h-[20px] text-white grid place-items-center text-[12px] rounded-full absolute right-[-10px] top-[15px]">0</div>
                    </div>
                </div>

 {menuOpen && ( 
             <div className="md:hidden bg-primaryDark text-white  py-4">
                 <ul className="gap-4">
                            
             <a href="" className='m-3' onClick={toggleMenu}>Home</a>
             <a href="" className='m-3' onClick={toggleMenu}>Shop</a>
             <a href="" className='m-3' onClick={toggleMenu}>Blog</a>
             <a href="" className='m-3' onClick={toggleMenu}>Pages</a>
             <a href="" className='m-3' onClick={toggleMenu}>About</a>
             <a href="" className='m-3' onClick={toggleMenu}>Contact</a>
                            
                        </ul>
                    </div>
                )}

                <div className="bg-primary hidden md:block">
                    <ul className="container flex gap-8 uppercase py-4 text-white">
                        <a href="">Home</a>
                        <a href="">Shop</a>
                        <a href="">Blog</a>
                        <a href="">Pages</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;





