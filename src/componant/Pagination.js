import React from "react";
import ReactPaginate from "react-paginate";
import { Pagination } from "react-bootstrap";

const PaginationComponant = ({ pageCount, getPage }) => {
  const handlePageClick = (data) => {
    getPage(data.selected+1)
  };
  if(pageCount>500)pageCount=500;
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      ReactPaginate={2}
      pageCount={pageCount}
      previousLabel="< previous"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakLinkClassName={"page-link"}
      breakClassName={"page-item"}
      activeClassName={'active'}
    />
  );
};

export default PaginationComponant;
