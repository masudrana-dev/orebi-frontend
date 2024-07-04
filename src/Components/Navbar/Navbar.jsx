// import { useState } from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import menu from '../../assets/menu.png'
import { navLinks } from "../../Constant";
import Container from "../Layout/Container";
import Flex from "../Layout/Flex";
// import menu from '../../assets/menu.png'
// import close from '../../assets/close.png'
const Navbar = () => {
  // const [toggle, setToggle] = useState(false)
  return (
    <nav className="max-w-container mx-auto ">
      <Container>
        <div className="py-8">
          <Flex className="items-center justify-between ">
            <div className="w-3/12">
              <img src={logo} alt="" className="object-contain" />
            </div>
            <div className="w-9/12">
              <ul className="hidden md:flex gap-x-20 justify-end font-dm cursor-pointer">
                {navLinks.map((item) => (
                  <li
                    key={item.label}
                    className="hover:text-primary text-[18px] text-[#767676] font-bold"
                  >
                    <Link>{item.label}</Link>
                  </li>
                ))}
              </ul>
             
            </div>
            {/* humbarg menu  */}
          <div className="hidden max-lg:block ">
          <img src={menu} alt="hamburger icon" width={25} height={25} />
        </div>
          </Flex>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
