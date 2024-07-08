import { GoArrowLeft } from "react-icons/go";

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='absolute top-[30%] left-[-30px] bg-[#c2c2c2] w-[62px] h-[64px] rounded-full !flex justify-center items-center z-50'
            style={{ ...style }}
            onClick={onClick}
        >
            <GoArrowLeft className="text-2xl text-white font-bold" />
        </div>
    );
}

export default SamplePrevArrow