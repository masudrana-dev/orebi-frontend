import Container from "../Layout/Container"
import Flex from "../Layout/Flex"
import Search from "./Search";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { RxTriangleDown } from "react-icons/rx";
import { HiShoppingCart } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import DropDown from "../Layout/DropDown";
import { useEffect, useRef, useState } from "react";
import cartimg from '../../assets/placeholder.jpg'

const Header = () => {
    const catergoryRef = useRef()
    const userRef = useRef()
    const cartRef = useRef()
    const [showCatergory, setCategoryShow] = useState(false)
    const [userShow, setUserShow] = useState(false)
    const [cartShow, setCartShow] = useState(false)
    // const handleClick = () => {
    //     setShow(!show);
    //     console.log('ok');
    // }
    useEffect(() => {
        document.body.addEventListener('click', (e) => {
            if (catergoryRef.current.contains(e.target)) {
                setCategoryShow(true)
            } else {
                setCategoryShow(false)
            }
            if (userRef.current.contains(e.target)) {
                setUserShow(true)
            } else {
                setUserShow(false)
            }
            if (cartRef.current.contains(e.target)) {
                setCartShow(true)
            } else {
                setCartShow(false)
            }
        })
    }, [])

    return (
        <div className="bg-[#F5F5F3] py-10">
            <Container>
                <Flex className='justify-between items-center'>
                    <div>
                        <DropDown dropRef={catergoryRef}>
                            <div className="flex items-center gap-2.5 cursor-pointer">
                                <FaBarsStaggered className="text-[18px]" />
                                <p className="font-dm text-base">Shop by Category</p>
                            </div>
                            {
                                showCatergory && (
                                    <ul className="absolute w-[263px] bg-primary text-[#BEBEBE] font-dm  ">
                                        <li className='py-4 px-4 border-b border-[#6d6c6c] border-solid'>Home</li>
                                        <li className='py-4 px-4 border-b border-[#6d6c6c] border-solid'>Home</li>
                                        <li className='py-4 px-4 border-b border-[#6d6c6c] border-solid'>Home</li>
                                        <li className='py-4 px-4 border-b border-[#6d6c6c] border-solid'>Home</li>
                                        <li className='py-4 px-4 border-b border-[#6d6c6c] border-solid'>Home</li>
                                        <li className='py-4 px-4 border-b border-[#6d6c6c] border-solid'>Home</li>
                                    </ul>
                                )
                            }

                        </DropDown>
                    </div>
                    <div className="relative">
                        <Search className='h-[50px] w-[600px] rounded pl-5 outline-none' placeholder='Search Products ' />
                        <FaSearch className="absolute top-5 right-5" />
                    </div>
                    <div className="flex gap-10  justify-center">
                        <DropDown className='relative' dropRef={userRef}>
                            <div className="flex items-center ">
                                <IoPersonSharp className="text-xl" />
                                <RxTriangleDown />
                            </div>
                            {
                                userShow && (
                                    <div className="absolute right-0 top-[50px] w-[200px] border border-b-gray-50 bg-primary text-[#BEBEBE] font-dm  text-center ">
                                        <p className='py-4 px-4 border-b border-[#000] border-solid text-white font-bold'>My Account</p>
                                        <p className='py-4 px-4 border-b border-solid text-[#000] bg-[#fff]'>Log Out</p>
                                    </div>
                                )
                            }
                        </DropDown>
                        <DropDown className='relative' dropRef={cartRef}>
                            <div>
                                <HiShoppingCart className="text-xl" />
                            </div>

                            {
                                cartShow && (
                                    <div className="absolute right-0 top-[50px] w-[360px] border border-b-gray-50  text-[#BEBEBE] font-dm shadow">
                                        <Flex className='justify-between items-center p-5 bg-[#f5f5f5]'>
                                            <img src={cartimg} alt="" height={250} width={100} />
                                            <div className="justify-between">
                                                <p className="text-base font-dm text-primary font-bold">Black Smart watch</p>
                                                <p className="text-base font-dm text-primary font-bold">$44.39</p>
                                            </div>
                                            <div className="">
                                                <RxCross1 className="font-bold ml-2 text-primary" />
                                            </div>
                                        </Flex>
                                        <div className=" p-5 text-primary">
                                            <div >
                                                <p className="font-dm text-[#767676] text-base">subtotal : <span className="font-dm text-base font-bold text-primary">$44.99</span></p>
                                            </div>
                                            <div className="mt-[13px]">
                                                <button className="py-4 px-8 border border-primary font-dm font-bold text-primary  text-[13px] ">View Cart</button>
                                                <button className="py-4 px-8 border border-primary ml-3  font-dm font-bold text-primary text-[13px]  ">Check Out</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </DropDown>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Header