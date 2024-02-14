'use client'

import React from "react";

export default function AboutBanner() {
  const twentyfour =
    "https://prod-cdn.laundryheap.com/assets/landing/subpages/why_us/hero-e08d1e94ae40da2d91bb8f9fdcc02e33829c500be1dcf6a20fe369f72d7df345.jpg";
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2  lg:py-10">
      <div className="text-left flex flex-col py-20 px-5">
        <p className="text-6xl font-bold text-black">
          Reinventing the future of laundry and dry cleaning
        </p>
        <p className="text-xl font-bold">
          RLaundryheap delivers the quickest, easiest to use, and most reliable
          professional laundry and dry cleaning service that completely adjusts
          to your needs.
        </p>
        <p>
          We collect, clean, and deliver your laundry to your doorstep. When and
          where you need us, we will be there. 98.7% of all standard laundry and
          dry cleaning is delivered the next day.
        </p>
      </div>
      <div className="m-5">
        <img src={twentyfour} alt="" />
      </div>
    </div>
  );
};
