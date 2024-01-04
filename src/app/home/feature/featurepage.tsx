import React from "react";
import icon1 from "../../../../public/icon/accelerate-svgrepo-com.svg";
import icon2 from "../../../../public/icon/trend-analysis-svgrepo-com.svg";
import icon3 from "../../../../public/icon/format-painter-svgrepo-com.svg";
import Image from "next/image";

const FeaturePage = () => {
  return (
    <div className="bg-black text-white">
      <div className="m-3 py-10">
        <h1 className="text-xl bold">
          Every feature you need to win. Try it for yourself.
        </h1>
        <p className="text-sm">
          Pocket was built for investors like you who play by their own rules
          and aren’t going to let SEC regulations get in the way of their
          dreams. If other investing tools are afraid to build it, Pocket has
          it.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row p-4">
        <div className="mx-5 lg:mx-20 ">
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">Hi.</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="my-7 p-3 hover:bg-gray-900 border rounded-lg">
            <Image src={icon1} width="40" height="40" placeholder="empty" />
            <h1>Lorem ipsum dolor sit .</h1>
            <p className="text-xs">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              saepe placeat doloremque tempora atque, nam natus quam sequi
            </p>
          </div>
          <div className="my-7 p-3 hover:bg-gray-900 border rounded-lg">
            <Image src={icon3} width="40" height="40" placeholder="empty" />
            <h1>Lorem ipsum dolor sit .</h1>
            <p className="text-xs">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              saepe placeat doloremque tempora atque, nam natus quam sequi
            </p>
          </div>
          <div className="my-7 p-3 hover:bg-gray-900 border rounded-lg">
            <Image src={icon2} width="40" height="40" placeholder="empty" />
            <h1>Lorem ipsum dolor sit .</h1>
            <p className="text-xs">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              saepe placeat doloremque tempora atque, nam natus quam sequi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePage;
