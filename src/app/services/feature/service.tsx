'use client'

import React, { useEffect, useState } from "react";
import ServiceCard from "./serviceCard";

export default function Service () {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container mx-auto pt-10">
      <p className=" text-center text-3xl lg:text-6xl font-extrabold text-sky-500 ">
        Our Services
      </p>
      <div className=" grid sm:grid-cols-1 lg:grid-cols-3 mx-4 gap-3 py-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};
