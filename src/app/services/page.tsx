

import Service from "./feature/service";
import ServiceBase from "./feature/serviceBase";

export default function ServicePage() {
  return (
    <div>
      <div className="bg-sky-500 py-5 lg:py-10 text-center">
        <h1 className="text-6xl font-bold text-white">Simple Pricing</h1>
        <p className="font-bold mt-5">No Hidden Fees.</p>
      </div>
        <ServiceBase/>
        <Service/>
    </div>
  );
};

