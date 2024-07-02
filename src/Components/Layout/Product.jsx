import { TfiReload } from "react-icons/tfi";
import p1 from '../../assets/p-1.png'
import Badge from './Badge'
import Flex from '../Layout/Flex'
import { FaHeart } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
const Product = ({ badge }) => {
    return (
        <div>
            <div className='relative overflow-y-hidden group'>
                <img src={p1} alt="" className='w-full' />
                {
                    badge &&
                    <Badge title='New' />
                }
                <div className='absolute bottom-[-160px] group-hover:bottom-[0]  left-0 bg-white  w-full py-6 pr-[30px] ease-in duration-300'>
                    <Flex className='items-center justify-end gap-x-4'>
                        <p className="font-dm text-[#767676]">Add to Wish List</p>
                        <FaHeart className="text-xl font-extrabold  text-black" />
                    </Flex>
                    <Flex className='items-center justify-end gap-x-4 py-5'>
                        <p className="font-dm text-[#767676]">Compare</p>
                        <TfiReload className="text-xl font-extrabold  text-black" />
                    </Flex>
                    <Flex className='items-center justify-end gap-x-4'>
                        <p className="font-dm text-[#262626] font-bold">Add to Cart</p>
                        <IoCart className="text-xl font-extrabold  text-black" />
                    </Flex>
                </div>
            </div>
            <div className='pt-6'>
                <Flex className='justify-between'>
                    <h3 className='text-xl font-bold'>Basic Crew Neck Tee</h3>
                    <p>$44.00</p>
                </Flex>
                <p className='text-[#767676] text-base pt-5'>Black</p>
            </div>
        </div>

    )
}

export default Product