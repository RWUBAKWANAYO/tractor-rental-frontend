import PropTypes from 'prop-types';
import React from 'react';
import { ClearFilterIcon } from '../../../assets/svg';

function AllTractorsButton({ handleAllTractors }) {
  const handleClear = () => handleAllTractors();

  return (
    <button type="button" className="clear-tractors-filters" onClick={handleClear}>
      <ClearFilterIcon color="#fafbfa" />
      Reset
    </button>
  );
}

AllTractorsButton.propTypes = {
  handleAllTractors: PropTypes.func.isRequired,
};

export default AllTractorsButton;
