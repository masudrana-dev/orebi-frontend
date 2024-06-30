import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner from '../../assets/banner.png'
import { useState } from "react";

const Banner = () => {
    const [activeDot, setActiveDot] = useState(' ');
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        beforeChange: (next) => {
            setActiveDot({ next });
        },
        appendDots: (dots) => (
            <div
                style={{
                    position: "absolute",
                    top: "40%",
                    left: "150px"
                }}
            >
                <ul style={{ margin: "0px" }}>
                    {dots.map((item) => {
                        return <li style={{ display: "block", marginTop: "10px" }}> {item}</li>;
                    })}
                </ul>
            </div >
        ),
        customPaging: i => (
            <div
                style={
                    i === activeDot
                        ? {
                            width: "30px",
                            borderRight: "3px black solid",
                            padding: "10px 30px 10px 0px",
                            fontFamily: "dm sans",
                            fontSize: '14px',
                            color: "#262626"
                        }
                        :
                        {
                            width: "30px",
                            borderRight: "3px white solid",
                            padding: "10px 30px 10px 0px",
                            fontFamily: "dm sans",
                            fontSize: '14px',
                            color: 'black'
                        }
                }
            >
                0{i + 1}
            </div >
        )
    };
    return (
        <div className="slider-container">
            <Slider {...settings} >
                <div className="outline-none">
                    <img src={banner} alt="" />
                </div>
                <div className="outline-none">
                    <img src={banner} alt="" />
                </div >
                <div className="outline-none">
                    <img src={banner} alt="" />
                </div>
                <div className="outline-none">
                    <img src={banner} alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default Banner