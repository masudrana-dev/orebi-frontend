import Container from "../Layout/Container"
import Flex from "../Layout/Flex"
import add1 from '../../assets/add1.png'
import add2 from '../../assets/add2.png'
import add3 from '../../assets/add3.png'

const Addvertise = () => {
    return (
        <div className="mt-44">
            <Container>
                <Flex className='justify-between'>
                    <div>
                        <img src={add1} alt="" />
                    </div>
                    <div>
                        <img src={add2} alt="" />
                        <img src={add3} alt="" className="mt-[39px]" />
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Addvertise