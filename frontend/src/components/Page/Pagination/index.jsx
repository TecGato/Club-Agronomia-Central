// import { useState } from 'react';

// export function Pagination({ items, itemsPerPage }) {

//     const [currentPage, setCurrentPage] = useState(1);

//     const pagesCount = Math.ceil(items.length / itemsPerPage);
//     const pages = Array.from(Array(pagesCount).keys());

//     const handleClick = (page) => setCurrentPage(page);

//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const currentItems = items.slice(startIndex, endIndex);

//     return (
//         <div className="flex flex-col items-center justify-center space-y-4">
//             <ItemsList products={currentItems} />
//             <div className="flex space-x-2">
//                 {pages.map((page) => (
//                 <button
//                     key={page}
//                     className={`px-3 py-1 rounded ${
//                     currentPage === page + 1
//                         ? 'bg-blue-500 text-white'
//                         : 'bg-gray-200 text-gray-700'
//                     }`}
//                     onClick={() => handleClick(page + 1)}
//                 >
//                     {page + 1}
//                 </button>
//                 ))}
//             </div>
//         </div>
//     );
//   }
  
import { useState } from 'react';

function usePagination(items, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);

  const pagesCount = Math.ceil(items.length / itemsPerPage);
  const pages = Array.from(Array(pagesCount).keys());

  const handleClick = (page) => setCurrentPage(page);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  return {
    currentPage,
    setCurrentPage: handleClick,
    pages,
    currentItems,
  };
}

export default usePagination;
