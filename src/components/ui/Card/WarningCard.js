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

export default WarningCard;
