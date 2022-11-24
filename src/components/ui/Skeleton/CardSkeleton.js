import React from 'react';

const CardSkeleton = () => (
  <div className="card-skeleton">{Array.from(Array(5).keys()).map((card) => <div key={card.key} />)}</div>
);

export default CardSkeleton;
