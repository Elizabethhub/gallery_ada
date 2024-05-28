import PropTypes from "prop-types";

const GalleryColumnsToggle = ({ columns, setColumns }) => {
  return <button onClick={() => setColumns(columns === 3 ? 5 : 3)}>{columns === 3 ? "Show 5 Columns" : "Show 3 Columns"}</button>;
};

GalleryColumnsToggle.propTypes = {
  columns: PropTypes.number.isRequired,
  setColumns: PropTypes.func.isRequired,
};

export default GalleryColumnsToggle;
