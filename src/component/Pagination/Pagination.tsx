import styles from './styles.module.scss';

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  const startItem = currentPage * itemsPerPage;
  const endItem = Math.min(startItem + itemsPerPage, totalItems);

  const handlePageClick = (page: number) => {
    if (page >= 0 && page < totalPages) {
      onPageChange(page);
    }
  };

  const getVisiblePages = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    // const totalVisiblePages = 4;

    const showEllipsisBefore = currentPage > 2;
    const showEllipsisAfter = currentPage < totalPages - 3;

    pages.push(0);

    if (showEllipsisBefore) {
      pages.push('...');
    }

    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(currentPage + 1, totalPages - 2);

    if (currentPage <= 1) {
      startPage = 1;
      endPage = 3;
    } else if (currentPage >= totalPages - 2) {
      startPage = totalPages - 4;
      endPage = totalPages - 2;
    }

    // eslint-disable-next-line no-plusplus
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (showEllipsisAfter) {
      pages.push('...');
    }

    if (totalPages > 1) {
      pages.push(totalPages - 1);
    }

    return pages;
  };

  const renderPageItem = (page: number | string, index: number) => {
    if (typeof page === 'number') {
      return (
        <button
          key={index}
          className={`${styles.pageNumberButton} ${currentPage === page ? styles.activePage : ''}`}
          onClick={() => handlePageClick(page)}
        >
          {page + 1}
        </button>
      );
    }
    return (
      <span
        key={index}
        className={styles.ellipsis}
      >
        {page}
      </span>
    );
  };

  return (
    <div className={styles.Paginationcontainer}>
      <div className={styles.Rangedisplay}>
        {startItem + 1} - {endItem} of {totalItems}
      </div>

      <div className={styles.paginationControls}>
        <button
          className={`${styles.Paginationbutton} ${currentPage === 0 ? styles.disabled : ''}`}
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>

        {getVisiblePages().map(renderPageItem)}

        <button
          className={`${styles.Paginationbutton} ${
            currentPage === totalPages - 1 ? styles.disabled : ''
          }`}
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
