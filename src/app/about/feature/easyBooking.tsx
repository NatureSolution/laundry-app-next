'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import about1 from '../../../../public/images/about1.jpg'


const EasyBokking = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 p-10 lg:p-20">
        <div>
            <p className="text-6xl font-mono font-bold text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text">Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae velit officia qui necessitatibus, doloremque nisi vero sunt magni temporibus error facere. Porro delectus eos perspiciatis, beatae obcaecati sunt culpa.</p>
        </div>
        <div>
        <Image
      src= {about1}
      width={500}
      height={500}
      alt="Picture of the author"
    />
        </div>
    </div>
  );
};

export default EasyBokking;