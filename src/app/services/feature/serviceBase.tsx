
import service_fee from "../../../../public/images/service_fee.svg";
import minimum_order from "../../../../public/images/minimum_order.svg";
import free_delivery from "../../../../public/images/free_delivery.svg";
import Image from "next/image";

export default function ServiceBase()  {
  return (
    <div className="bg-blue-900">
      <div
        className=" container  bg-blue-900 text-white grid grid-cols-1
       lg:grid-cols-3 px-10 lg:px-20 py-3 lg:py-10 mx-auto gap-2"
      >
        <div className="flex justify-content items-center">
        <Image src={free_delivery} width="40" height="40" placeholder="empty" />
          
          <p className="pl-2">Free 24h delivery</p>
        </div>
        <div className="flex justify-content items-center">
          <Image src={minimum_order} width="40" height="40" placeholder="empty" />
          <p className="pl-2">£20 minimum order</p>
        </div>
        <div className="flex justify-content items-center">
        <Image src={service_fee} width="40" height="40" placeholder="empty" />
          <p className="pl-2">Service fee from £1.99</p>
        </div>
      </div>
    </div>
  );
};
