

import Link from "next/link";

export default function ServiceCard ({ service })  {
  const { about, serviceName, price, type, picture } = service;
  return (
    <Link to="/price">
      <div className="card mx-auto bg-base-100 shadow-xl text-left lg:text-center">
        <div className="hidden lg:block">
          <img
            className="object-scale-down h-48 mx-auto items-center  "
            src={picture}
            alt=""
          />
        </div>
        <div className="card-body items-center  bg-black lg:bg-white text-white lg:text-black ">
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
