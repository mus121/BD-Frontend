'use client';

import { useState } from 'react';
import styles from './styles.module.scss';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  totalItems = 0,
  itemsPerPage = 1,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage)); // Ensure at least 1 page
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
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
          className={`${styles.Paginationbutton} ${currentPage === 1 ? styles.disabled : ''}`}
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => {
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
          );
        })}

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
