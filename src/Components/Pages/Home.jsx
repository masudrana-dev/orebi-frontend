import AdditionalInfo from "../AdditionalInfo/AdditionalInfo"
import Addvertise from "../Addvertise/Addvertise"
import Banner from "../Banner/Banner"
import NewArrivals from "../NewArrivals/NewArrivals"

export const Home = () => {
    return (
        <div>
            <Banner />
            <AdditionalInfo />
            <Addvertise />
            <NewArrivals />
        </div>
    )
}
