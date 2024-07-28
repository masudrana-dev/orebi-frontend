import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from './Product';

const items = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
];

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
    const [itemSelected, setItemSelected] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemSelected(event.selected)
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
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel=" "
                renderOnZeroPageCount={null}
                pageLinkClassName="inline-block border-2 border-[#f0f0f0] py-2.5 px-3.5 font-dm text-[14px] text-[#767676]"
                previousClassName="hidden"
                nextClassName="hidden"
                breakLinkClassName="page-link"
                containerClassName="flex gap-x-4 mt-[50px]"
                activeClassName='bg-blue-500 text-white'
            />
            <p className="absolute bottom-0 right-0 font-dm font-regular text-base text-[#767676]">Products of {itemSelected} to {itemOffset + itemsPerPage} of 80</p>
        </div>
    )
}

export default pagination