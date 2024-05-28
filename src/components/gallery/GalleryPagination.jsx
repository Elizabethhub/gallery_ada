import PropTypes from "prop-types";

const GalleryPagination = ({ page, totalPages, handlePageChange }) => {
  return (
    <div className="pagination">
      <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <span>
        Page {page} of {totalPages}
      </span>
      <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
};

GalleryPagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default GalleryPagination;
