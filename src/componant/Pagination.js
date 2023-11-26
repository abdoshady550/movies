import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { AllPages, getPage } from "./../redux/action/MoviesActions";
import { useDispatch, useSelector } from "react-redux";

const PaginationComponant = () => {
  const allDataPages = useSelector((state) => state.Movies.pages);

  const [pageCount, setPageCount] = useState(0);
  const dispatcher = useDispatch();

  useEffect(() => {
    setPageCount(allDataPages);
  }, [allDataPages]);

  useEffect(() => {
    dispatcher(AllPages());
    
  }, [dispatcher]);

  const handlePageClick = (word) => {
    dispatcher(getPage(word.selected + 1));
  };
  if (pageCount > 500) setPageCount(500);
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={3}
      ReactPaginate={3}
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
      activeClassName={"active"}
    />
  );
};

export default PaginationComponant;
