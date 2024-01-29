// pages/PricingPage.js

import React, { useState } from 'react';

export default function PricingPage() {
  const [showMonthly, setShowMonthly] = useState(true);

  const toggleView = () => {
    setShowMonthly((prev) => !prev);
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-8">Pricing</h1>
{/* Button to toggle between monthly and daily prices */}
<div className="flex justify-center mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleView}
        >
          {showMonthly ? 'Show Daily Prices' : 'Show Monthly Prices'}
        </button>
      </div>
      <div className="flex justify-center">
        {/* Product 1 */}
        <div className="card w-80 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

        {/* Product 2 */}
        <div className="card w-80 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <p>Price:  { showMonthly ? '$10' : '$1'}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

        {/* Product 3 */}
        <div className="card w-40 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <p>Price:  { showMonthly ? '$10' : '$1'}</p>
    
  </div>
</div>
      </div>

      
    </div>
  );
};
