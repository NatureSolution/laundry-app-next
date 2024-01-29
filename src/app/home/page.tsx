"use client"
import React from "react";
import ServiceStatus from "../masculinious/servicestatus/pags";
import Link from "next/link";
import cover from "../../../public/images/cover0.png";
import i1 from '../../../public/images/bbc.9cfc75a9.svg'
import i2 from '../../../public/images/cbs.aa596395.svg'
import i3 from '../../../public/images/cnn.eaae184a.svg'
import i4 from '../../../public/images/bbc.9cfc75a9.svg'
import Image from "next/image";
import FeaturePage from "./feature/featurepage";
import PortfolioPage from "./feature/portfoliopage";
import AppDown from "./feature/appDown";
import PricingPage from "./feature/pricingPage";

export default function HomePage() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <div className="flex lg:px-10 sm:px-3 pt-14 m-7">
        <div>
          <div>
            <h1 className="text-3xl font-extrabold">Cutting Edge <br /> <span className="text-violet-700">Technology</span>  <br />Services</h1>
            <p>The cutting edge solution for the technology advancement for the leading company in the country.</p>
          </div>
          <div className="flex py-7 gap-4">
            <div>
              <Link href={'/services'}><button className="btn btn-outline">
                Services
              </button></Link></div>
            <div> <Link href={'/about'}><button className="btn btn-outline btn-accent">About</button></Link> </div>
          </div>
        </div>
        <div>
          <Image src={cover} width='700px' height='700px' placeholder="blur" />
        </div>
      </div>
      <div className=" flex flex-wrap mx-20 gap-2">
        <Image src={i1} width='8px' height='4px' placeholder="empty" />
        <Image src={i2} width='8px' height='4px' placeholder="empty" />
        <Image src={i3} width='8px' height='4px' placeholder="empty" />
        <Image src={i4} width='8px' height='4px' placeholder="empty" />
        <Image src={i1} width='8px' height='4px' placeholder="empty" />
        <Image src={i1} width='8px' height='4px' placeholder="empty" />

      </div>
      <div><FeaturePage /></div>
      <div><PortfolioPage/></div>
      <div><AppDown/></div>
      <div><PricingPage/></div>

    </div>

  )
}