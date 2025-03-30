"use client"
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';




function Pagination({pageCount}:{pageCount:number}) {
    const router=useRouter();

    const handlePageClick=(e:{selected:number})=>{
        const page=e.selected+1;
        router.push(`/store?page=${page}&per_page=2`)
    }
  return (
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
  )
}

export default Pagination