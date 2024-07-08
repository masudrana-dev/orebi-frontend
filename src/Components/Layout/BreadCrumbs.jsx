import { MdKeyboardArrowRight } from "react-icons/md";
import Container from "./Container"

const BreadCrumbs = () => {
    return (
        <div>
            <Container>
                <h2 className="font-dm font-bold text-[49px] text-primary mt-[124px] ">Product</h2>
                <p className="font-dm text-base text-[#767676] flex items-center gap-x-3">
                    Home <MdKeyboardArrowRight /> {window.location.pathname.split('/')[1]}
                </p>
            </Container>
        </div>
    )
}

export default BreadCrumbs