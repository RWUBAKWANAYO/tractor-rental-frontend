import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CloudAlertIcon from '../../../assets/svg/CloudAlertIcon';
import './apialert.scss';

const APIAlert = ({ data }) => {
  const colors = { success: '#ABBC41', warning: '#FFBE17', error: '#E82C2C' };
  const { status, message, title } = data;
  const iconColor = colors[`${status}`];
  const navigate = useNavigate();
  const handleLoad = () => window.location.reload();
  const handleNavigate = () => navigate(-1);
  return (
    <div className="api-alert">
      <CloudAlertIcon color={iconColor} />
      <h6 className="alert-title">{title}</h6>
      <h6 className="alert-text">
        {message}
        {' '}
        {status === 'error' && <span onClick={handleLoad} aria-hidden="true">Try again</span>}
        {status === 'warning' && <span onClick={handleNavigate} aria-hidden="true">Go back</span>}
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
