import React from 'react';

interface SubtotalProps {
  length: number;
  left: boolean;
  totalPrice: number;
}

const Subtotal: React.FC<SubtotalProps> = ({ length, left, totalPrice }) => {
  return (
    <div>
      <h1 className={`${left ? 'text-left text-sm' : 'text-right text-lg'} `}>
        {`Subtotal (${length} items): `} 
        <span className='font-bold'>{`$${totalPrice}`}</span>
      </h1>
    </div>
  );
};

export default Subtotal;
