// "use client"
// import { useSearchParams } from 'next/navigation';
// import { useRouter } from 'next/navigation';
// import ReactPaginate from 'react-paginate';




// function Pagination({pageCount}:{pageCount:number}) {
//     const router=useRouter();
//     const searchParams=useSearchParams()
//     const currentSearchParams=new URLSearchParams(searchParams.toString())
//     const handlePageClick=(e:{selected:number})=>{
//         const page=e.selected+1;
//         currentSearchParams.set("page",page.toString())
//         currentSearchParams.set("per_page","1")
//         router.push(`/store?page=${page}&per_page=2`)
//     }
//   return (
//     <ReactPaginate
//         breakLabel="..."
//         nextLabel="next >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={5}
//         pageCount={pageCount}
//         previousLabel="< previous"
//         renderOnZeroPageCount={null}
//       />
//   )
// }

// export default Pagination