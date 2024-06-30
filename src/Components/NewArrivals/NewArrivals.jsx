import Container from "../Layout/Container"
import Heading from "../Layout/Heading"
import Product from "../Layout/Product"

const NewArrivals = () => {
    return (
        <div className="mt-[128px]">
            <Container>
                <Heading title='New Arrivals' />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <Product badge={true} />
                    <Product badge={true} />
                    <Product badge={false} />
                    <Product badge={false} />
                </div>
            </Container>
        </div>
    )
}

export default NewArrivals