import Container from "../Layout/Container"
import Heading from "../Layout/Heading"
import Product2 from "../Layout/Product2"

const Bestseller = () => {
    return (
        <div className="mt-[50px] md:mt-[128px]">
            <Container>
                <Heading title='Our Bestseller' />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <Product2 badge={true} />
                    <Product2 badge={true} />
                    <Product2 badge={false} />
                    <Product2 badge={false} />
                </div>
            </Container>
        </div>
    )
}

export default Bestseller