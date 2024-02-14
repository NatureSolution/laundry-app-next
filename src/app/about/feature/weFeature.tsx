import React from "react";

export default function WeFeatured() {
  const images = [{}];
  const image1 =
    "https://prod-cdn.laundryheap.com/assets/landing/press/deloitte-b9edb040ecf8f43f1cee891166239d48e463c910e58f599516ca4bb9943ba3f8.png";
  const image2 =
    "https://prod-cdn.laundryheap.com/assets/landing/press/lloyds-15603ac33c32928152b1d0c9e0182334d4771980a5020b3045124f21a5850e3d.png";
  const image3 =
    "https://prod-cdn.laundryheap.com/assets/landing/press/forbes-8786af7c3f749d2b1cfd26402c718901ffef7390d61e7eae05b33d6454e7d87f.png";
  const image4 =
    "https://prod-cdn.laundryheap.com/assets/landing/press/financial-times-aca2a9794c4e9dc4209d28ba581b42b19596abb23b683ad088e1022e4c492fa5.png";
  return (
    <div className=" bg-indigo-50">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cold-4  ">
        <div className="border border-zinc-300 p-5 m-2">
          <img src={image1} alt="" />
        </div>
        <div className="border  border-zinc-300  p-5 m-2">
          <img src={image2} alt="" />
        </div>
        <div className="border  border-zinc-300  p-5 m-2">
          <img src={image3} alt="" />
        </div>
        <div className="border  border-zinc-300  p-5 m-2">
          <img src={image4} alt="" />
        </div>
      </div>
    </div>
  );
};
