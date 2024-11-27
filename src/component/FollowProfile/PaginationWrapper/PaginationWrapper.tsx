import Pagination from '../../Pagination/index';

function PaginationWrapper({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <Pagination
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      currentPage={currentPage}
      onPageChange={onPageChange}
    />
  );
}

export default PaginationWrapper;
