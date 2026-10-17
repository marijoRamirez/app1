import PropTypes from "prop-types";

function Pagination({ page, totalPage, onPrev, onNext }) {
  return (
    <nav className="pagination">
      <button onClick={onPrev} disabled={page === 1}>
        Anterior
      </button>
      <button disabled>
        <span>
          <>{page}/{totalPage}</>
        </span>
      </button>
      <button onClick={onNext} disabled={page >= totalPage}>
        Siguiente
      </button>
    </nav>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Pagination;