import '@labels/Labels.css'
import PropTypes from 'prop-types';

function Labels({ handleCategoryFilter }) {
  return (
    <div className="labels">
      <div className="label jost-l" onClick={() => handleCategoryFilter('all')}><h2>All</h2></div>
      <div className="label jost-l" onClick={() => handleCategoryFilter('gaming')}><h2>Gaming</h2></div>
      <div className="label jost-l" onClick={() => handleCategoryFilter('music')}><h2>Music</h2></div>
      <div className="label jost-l" onClick={() => handleCategoryFilter('tech')}><h2>Tech</h2></div>
    </div>
  );
}
Labels.propTypes = {
  handleCategoryFilter: PropTypes.func.isRequired,
};

export default Labels