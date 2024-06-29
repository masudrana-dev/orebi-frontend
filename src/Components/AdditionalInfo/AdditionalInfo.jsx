import { SlReload } from "react-icons/sl";
import { MdLocalShipping } from "react-icons/md";
import { RiNumber2 } from "react-icons/ri";
import Container from "../Layout/Container"
import Flex from "../Layout/Flex"

const AdditionalInfo = () => {
    return (
        <div className="py-7 border-b-2 border-[#f0f0f0] mt-[-12px]">
            <Container>
                <Flex className='justify-between'>
                    <Flex className='items-center gap-x-4'>
                        <RiNumber2 className="text-2xl font-extrabold " />
                        <p className="font-dm text-[#6d6d6d]">Two years warranty</p>
                    </Flex>
                    <Flex className='items-center gap-x-4'>
                        <MdLocalShipping className="text-2xl font-extrabold " />
                        <p className="font-dm text-[#6d6d6d]">Free shipping</p>
                    </Flex>
                    <Flex className='items-center gap-x-4'>

                        <SlReload className="text-2xl font-extrabold rotate-90  " />
                        <p className="font-dm text-[#6d6d6d]">Return policy in 30 days</p>
                    </Flex>
                </Flex>
            </Container>
        </div>
    )
}

export default AdditionalInfo