import AdditionalInfo from "../AdditionalInfo/AdditionalInfo"
import Addvertise from "../Addvertise/Addvertise"
import Banner from "../Banner/Banner"
import NewArrivals from "../NewArrivals/NewArrivals"
import Bestseller from '../Best Seller/BestSeller'
import Award from "../Award/Award"
import SpecialOffer from "../SpecialOffer/SpecialOffer"
import Fotter from "../Footer/Fotter"

export const Home = () => {
    return (
        <div>
            <Banner />
            <AdditionalInfo />
            <Addvertise />
            <NewArrivals />
            <Bestseller />
            <Award />
            <SpecialOffer />
            <Fotter />
        </div>
    )
}
