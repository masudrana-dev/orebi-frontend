import { GoArrowRight } from "react-icons/go";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='absolute top-[30%] right-[-30px] bg-[#c2c2c2] w-[62px] h-[64px] rounded-full !flex justify-center items-center'
            style={{ ...style }}
            onClick={onClick}
        >
            <GoArrowRight className="text-2xl text-white font-bold" />
        </div>
    );
}

export default SampleNextArrow