const SizeValidate = (formData) => {
  if ((formData.width !== '' && formData.height !== '')
  || formData.hectare !== '') return false;
  return true;
};

export default SizeValidate;
