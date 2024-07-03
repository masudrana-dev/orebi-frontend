import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import Container from "../Layout/Container"
import logo from "../../assets/Logo.png"

const Fotter = () => {
    return (
        <div className="bg-[#f5f5f5] h-[374px] mt-[140px] p-14">
            <Container>
                <div className="grid grid-cols-4 md:flex justify-between text-[#6d6d6d]">
                    <div>
                        <h1 className="font-dm font-bold text-[#262626]">MENU</h1>
                        <ul className="pt-4  leading-8">
                            <li >Home</li>
                            <li>Shop</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Journal</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-dm font-bold text-[#262626]">SHOP</h1>
                        <ul className="pt-4  leading-8">
                            <li >Category 1</li>
                            <li>Category 1</li>
                            <li>Category 1</li>
                            <li>Category 1</li>
                            <li>Category 1</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-dm font-bold text-[#262626]">HELP</h1>
                        <ul className="pt-4  leading-8">
                            <li >Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Special E-shop</li>
                            <li>Shipping</li>
                            <li>Secure Payments</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-[#262626]">(052) 611-5711 <br />
                            company@domain.com</h3>
                        <p>575 Crescent Ave. Quakertown, PA 18951</p>
                    </div>
                    <div>
                        <img src={logo} alt="" className="mt-5 md:mt-0 w-[100px]" />
                    </div>
                </div>
                {/* footer last  */}
                <div className="flex justify-between items-center pt-16">
                    <div className="flex text-3xl gap-x-4 ">
                        <AiFillFacebook />
                        <AiFillLinkedin />
                        <AiOutlineInstagram />
                    </div>
                    <p className="text-[#767676]">2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                </div>
            </Container>
        </div>
    )
}

export default Fotter