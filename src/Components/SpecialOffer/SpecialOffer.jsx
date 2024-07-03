import Container from "../Layout/Container"
import Heading from "../Layout/Heading"
import Product3 from "../Layout/Product3"

const SpecialOffer = () => {
    return (
        <div className="mt-[50px] md:mt-[128px]">
            <Container>
                <Heading title='Special Offers' />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <Product3 badge={true} />
                    <Product3 badge={true} />
                    <Product3 badge={false} />
                    <Product3 badge={false} />
                </div>
            </Container>
        </div>
    )
}

export default SpecialOffer