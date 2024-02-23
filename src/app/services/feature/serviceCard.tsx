'use client'

import Link from "next/link";

export default function ServiceCard ({ service, servicePrice })  {
  const { about, serviceName, price, type, picture } = service;


  if (servicePrice && servicePrice.services && Array.isArray(servicePrice.services)) {
    // Access the first service from the services array
    const firstService = servicePrice.services[0];
    console.log("First Service:", firstService);

    // Use the properties of the first service as needed
    const { serviceName: firstServiceName, products: firstServiceProducts } = firstService;
    console.log("First Service Name:", firstServiceName);
    console.log("First Service Products:", firstServiceProducts);
  } else {
    console.log("Invalid or missing servicePrice object");
  }

  return (
    <Link href={"services/price"}>
      <div className="card mx-auto bg-base-100 flex flex-row lg:flex-col shadow-xl text-left lg:text-center">
        <div className="bg-sky-500 lg:bg-white sm:m-5">
          <img
            className="object-scale-down h-20 lg:h-48 mx-auto items-center  "
            src={picture}
            alt="service"
          />
        </div>
        <div className="card-body items-center bg-sky-500 lg:bg-white text-white lg:text-black ">
          <h2 className="card-title">{serviceName}</h2>
          <p className="hidden lg:block">{about}</p>
          <p> Start at ${price}</p>
          <p className="text-sm hidden lg:block ">
            <span className="badge">{type[0]}</span>{" "}
            <span className="badge">{type[1]}</span>{" "}
            <span className="badge">{type[2]}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};
