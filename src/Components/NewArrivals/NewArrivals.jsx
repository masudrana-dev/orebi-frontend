import Slider from "react-slick";
import Container from "../Layout/Container"
import Heading from "../Layout/Heading"
import Product from "../Layout/Product"
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import SamplePrevArrow from "../Layout/SamplePrevArrow";
import SampleNextArrow from "../Layout/SampleNextArrow";

const NewArrivals = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="mt-[50px] md:mt-[128px]">
            <Container>
                <Heading title='New Arrivals' />
                <Slider {...settings} className="">
                    <Product badge={true} />
                    <Product badge={true} />
                    <Product badge={false} />
                    <Product badge={false} />
                </Slider>
            </Container>
        </div>
    )
}

export default NewArrivals