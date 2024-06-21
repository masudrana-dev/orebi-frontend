import logo from '../../assets/Logo.png'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
const Navbar = () => {
    return (

        <nav className='max-w-container mx-auto'>
            <Container>
                <div className='py-8'>
                    <Flex className='items-center '>
                        <div className='w-3/12'>
                            <img src={logo} alt="" className='object-contain' />
                        </div>
                        <div className='w-9/12'>
                            <ul className='flex gap-x-20 justify-end font-dm cursor-pointer'>
                                <li className='text-[18px] text-primary font-bold'>Home</li>
                                <li className='hover:text-primary text-[18px] text-[#767676] font-bold'>Shop </li>
                                <li className='hover:text-primary text-[18px] text-[#767676] font-bold'>About</li>
                                <li className='hover:text-primary text-[18px] text-[#767676] font-bold'>Contacts</li>
                                <li className='hover:text-primary text-[18px] text-[#767676] font-bold'>Journal</li>
                            </ul>
                        </div>
                    </Flex>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar