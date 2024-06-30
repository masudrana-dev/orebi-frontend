import Container from "../Layout/Container"
// import Flex from "../Layout/Flex"
import add1 from '../../assets/add1.png'
import add2 from '../../assets/add2.png'
import add3 from '../../assets/add3.png'

const Addvertise = () => {
    return (
        <div className="mt-10 lg:mt-44">
            <Container>
                <div className='  grid grid-cols-1 md:grid-cols-2'>
                    <div className="">
                        <img src={add1} alt="" />
                    </div>
                    <div>
                        <img src={add2} alt="" className="mt-2 md:mt-0" />
                        <img src={add3} alt="" className="mt-2 md:mt-[21px] lg:mt-[39px]" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Addvertise