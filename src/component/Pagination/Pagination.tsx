'use client';

import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  totalItems = 10,
  itemsPerPage = 1,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const startItem = currentPage * itemsPerPage + 1;
  const endItem = Math.min((currentPage + 1) * itemsPerPage, totalItems);

  const handlePageClick = (page: number) => {
    if (page >= 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className={styles.Paginationcontainer}>
      {/* Range display */}
      <div className={styles.Rangedisplay}>
        {startItem} - {endItem} of {totalItems}
      </div>

      {/* Pagination controls */}
      <div className={styles.paginationControls}>
        {/* Previous Button */}
        <button
          className={`${styles.Paginationbutton} ${currentPage === 0 ? styles.disabled : ''}`}
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {/* {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              className={`${styles.pageNumberButton} ${
                currentPage === page ? styles.activePage : ''
              }`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          ))}

        {/* Next Button */}
        <button
          className={`${styles.Paginationbutton} ${
            currentPage === totalPages ? styles.disabled : ''
          }`}
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
