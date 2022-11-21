/* eslint-disable import/prefer-default-export */

export const CalculateWarning = {
  title: 'Note that!',
  description: 'The price of tractor is daily basis. click button below to see how much money it will cost you to complete your farm',
};

export const PriceWarning = ((data) => ({
  title: 'Note that!',
  description: `New farm price is ${data.new_farm_price}RWF instead of ${data.price}RWF`,
}));
