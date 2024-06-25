import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner from '../../assets/banner.png'

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src={banner} alt="" />
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default Banner