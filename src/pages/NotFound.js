import React from 'react';
import APIAlert from '../components/ui/APIAlert';

const NotFound = () => (
  <APIAlert data={{ status: 'warning', title: '404!', message: "Page you're trying to access is not exist." }} />
);

export default NotFound;
