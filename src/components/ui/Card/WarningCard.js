import PropTypes from 'prop-types';
import React from 'react';
import { WarningIcon } from '../../../assets/svg';

const WarningCard = ({ warning }) => (
  <div className="details-warning">
    <h5>
      <WarningIcon />
      {warning.title}
    </h5>
    <small>{warning.description}</small>
  </div>
);

WarningCard.propTypes = {
  warning: PropTypes.shape({
    description: PropTypes.string,
    title: PropTypes.string,
  }),
};

WarningCard.defaultProps = {
  warning: {
    description: '',
    title: '',
  },
};

export default WarningCard;
