const CalculateRent = (tractorData, formData) => {
  const size = formData.hectare !== '' ? (+formData.hectare) : ((formData.width * formData.height) / 10000);
  const price = formData.new_farm ? tractorData.new_farm_price : tractorData.price;
  const { completion } = tractorData;

  let amount = (size * price) / completion;
  amount = amount > price ? Math.ceil(amount) : price;

  const days = Math.ceil(amount / price);

  return {
    farm_size: formData.hectare !== '' ? `${+formData.hectare} hectare` : `${formData.width}m-${formData.height}m`,
    new_farm: formData.new_farm,
    total_costs: amount,
    estimated_time: days > 1 ? days : 1,
    rent_date: formData.date,
  };
};

export default CalculateRent;
