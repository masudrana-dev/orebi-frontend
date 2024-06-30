import p1 from '../../assets/p-1.png'
import Badge from './Badge'
const Product = ({ badge }) => {
    return (
        <div className='relative'>
            <img src={p1} alt="" />
            {
                badge &&
                <Badge title='New' />
            }
        </div>
    )
}

export default Product