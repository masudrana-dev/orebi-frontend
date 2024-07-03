import Container from "../Layout/Container"
import award from '../../assets/award.png'
const Award = () => {
    return (
        <div className=" pt-16 md:pt-32">
            <Container>
                <img src={award} alt="" />
            </Container>
        </div>
    )
}

export default Award