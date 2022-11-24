import PropTypes from 'prop-types';
import React from 'react';
import CloudAlertIcon from '../../../assets/svg/CloudAlertIcon';
import './apialert.scss';

const APIAlert = ({ data }) => {
  const colors = { success: '#ABBC41', warning: '#FFBE17', error: '#E82C2C' };
  const { status, message, title } = data;
  const iconColor = colors[`${status}`];
  const handleLoad = () => window.location.reload();
  return (
    <div className="api-alert">
      <CloudAlertIcon color={iconColor} />
      <h6 className="alert-title">{title}</h6>
      <h6 className="alert-text">
        {message}
        {' '}
        <span onClick={handleLoad} aria-hidden="true">Try again</span>
      </h6>
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
