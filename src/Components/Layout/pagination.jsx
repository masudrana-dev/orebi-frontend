import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from './Product';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <div className='w-[32%]'>
                        <Product badge={true} />
                    </div>
                ))}
        </>
    );
}

const pagination = ({ itemsPerPage }) => {

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    }

    return (
        <div>
            <div className='flex flex-wrap justify-between'>
                <Items currentItems={currentItems} />
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=" "
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel=" "
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

export default pagination