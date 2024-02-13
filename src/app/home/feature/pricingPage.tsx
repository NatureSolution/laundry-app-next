import React, { useState } from 'react';

export default function PricingPage() {
  const [showMonthly, setShowMonthly] = useState(true);
  const [dailyPrice, setDailyPrice] = useState(1);

  const toggleView = () => {
    setShowMonthly((prev) => !prev);
  };

  const calculateMonthlyPrice = () => {
    return showMonthly ? dailyPrice * 30 * 0.7 : dailyPrice;
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-8">Pricing</h1>
      {/* Button to toggle between monthly and daily prices */}
      <div className="flex justify-center mt-8">
        <button
          className={`bg-${showMonthly ? 'blue-500' : 'green-500'} hover:bg-${
            showMonthly ? 'blue-700' : 'green-700'
          }  font-bold py-2 px-4 shadow rounded border border-red-500`}
          onClick={toggleView}
        >
          {showMonthly ? 'Monthly' : 'Daily'}
        </button>
      </div>
      <div className="flex justify-center m-10 gap-5">
        {/* Product 1 */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">VIP</h2>
            <p className='text-sm'>You’ve got a huge amount of assets but it’s not enough. To the moon.</p>
            <p>Price: {showMonthly ? `$${calculateMonthlyPrice()}` : `$${dailyPrice}`}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-secondary justify-center w-full text-center">Choose plan</button>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="card w-80 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <p>Price: {showMonthly ? `$${calculateMonthlyPrice()}` : `$${dailyPrice}`}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="card w-80 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <p>Price: {showMonthly ? `$${calculateMonthlyPrice()}` : `$${dailyPrice}`}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
