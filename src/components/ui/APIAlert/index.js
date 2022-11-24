import PropTypes from 'prop-types';
import React from 'react';
import CloudAlertIcon from '../../../assets/svg/CloudAlertIcon';
import './apialert.scss';

const APIAlert = ({ data }) => {
  const colors = { success: '#00F08B', warning: '#FFBE17', error: '#E82C2C' };
  const { status, message, title } = data;
  const iconColor = colors[`${status}`];

  return (
    <div className="api-alert">
      <CloudAlertIcon color={iconColor} />
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
};

APIAlert.propTypes = {
  data: PropTypes.shape({
    message: PropTypes.string,
    status: PropTypes.string,
    title: PropTypes.string,
  }),
};

APIAlert.defaultProps = {
  data: {
    message: '',
    status: '',
    title: '',
  },
};

export default APIAlert;
