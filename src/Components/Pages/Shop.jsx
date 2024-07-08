import BreadCrumbs from "../Layout/BreadCrumbs"
import Container from "../Layout/Container"
import Flex from "../Layout/Flex"
import Pagination from "../Layout/pagination"

const shop = () => {
    return (
        <div>
            <BreadCrumbs />
            <Container className="mt-[130px]">
                <Flex className="gap-x-10">
                    <div className="w-1/4 bg-red-600">hello</div>
                    <div className="w-3/4 ">
                        <Pagination itemsPerPage={12} />
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default shop