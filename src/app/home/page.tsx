"use client"
import React from "react";
import ServiceStatus from "../masculinious/servicestatus/pags";

export default function HomePage() {
    const handleClick = () => {
        console.log('Button clicked!');
      };

    return (
      <div>
        <div className="flex justify-center py-5">
          <div className="flex">
            <div className="text-6xl bold">Let get Out</div>
            <div>
            <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />

            </div>
          </div>
          <div>Test</div>
        </div>
        <div className="flex justify-center py-10">
        <ServiceStatus/>
        </div>
      </div>
      
    )
  }