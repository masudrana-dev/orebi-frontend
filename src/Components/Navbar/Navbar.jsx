// import { useState } from 'react'
import logo from '../../assets/Logo.png'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
// import menu from '../../assets/menu.png'
// import close from '../../assets/close.png'
const Navbar = () => {
    // const [toggle, setToggle] = useState(false)
    return (
        <nav className='max-w-container mx-auto '>
            <Container >
                <div className='py-8'>
                    <Flex className='items-center '>
                        <div className='w-3/12'>
                            <img src={logo} alt="" className='object-contain' />
                        </div>
                        <div className='w-9/12'>
                            <ul className='hidden md:flex gap-x-20 justify-end font-dm cursor-pointer'>
                                <li className='text-[18px] text-primary font-bold'>Home</li>
                                <li className='hover:text-primary text-[18px] text-[#767676] font-bold'>Shop </li>
                                <li className='hover:text-primary text-[18px] text-[#767676] font-bold'>About</li>
                                <li className='hover:text-primary text-[18px] text-[#767676] font-bold'>Contacts</li>
                                <li className='hover:text-primary text-[18px] text-[#767676] font-bold'>Journal</li>
                            </ul>
                        </div>
                        {/* humbarg menu  */}
                        {/* <div className=" flex flex-1 justify-end items-center">
                            <img
                                src={menu} alt="menu" className='cursor-pointer' onClick={() => setToggle(!toggle)} />

                            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[144px] z-10 rounded-xl`}>

                                <ul className='list-none  flex  justify-end items-start  flex-col gap-2' >
                                    <li className='text-[18px] text-primary font-bold' onClick={() => {
                                        setToggle(!toggle);
                                    }}
                                    >Home</li>
                             
                                </ul>
                            </div>
                        </div> */}
                    </Flex>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar