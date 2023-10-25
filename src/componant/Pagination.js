import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginationComponant = ({ getPage }) => {
  const [pageNum, setPageNum] = useState(1);

  const onPage = (page) => {
    if (page >= 1 && page <= 500) {
      setPageNum(page);
      getPage(page);
    }
  };

  const goToNextPage = () => {
    const nextPage = pageNum + 1;
    if (nextPage <= 500) {
      onPage(nextPage);
    }
  };

  const goToPrevPage = () => {
    const prevPage = pageNum - 1;
    if (prevPage >= 1) {
      onPage(prevPage);
    }
  };

  return (
    <Pagination className="justify-content-center p3">
      <Pagination.First onClick={() => onPage(1)} />
      <Pagination.Prev onClick={goToPrevPage} />

      <Pagination.Item onClick={() => onPage(1)}>{1}</Pagination.Item>
      <Pagination.Item onClick={() => onPage(2)}>{2}</Pagination.Item>
      <Pagination.Item onClick={() => onPage(3)}>{3}</Pagination.Item>
      <Pagination.Item onClick={() => onPage(4)}>{4}</Pagination.Item>
      <Pagination.Item onClick={() => onPage(5)}>{5}</Pagination.Item>
      <Pagination.Item onClick={() => onPage(6)}>{6}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item onClick={() => onPage(400)}>{400}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Next onClick={goToNextPage} />
      <Pagination.Last onClick={() => onPage(500)} />
    </Pagination>
  );
};

export default PaginationComponant;
