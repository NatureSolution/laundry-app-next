import Image from "next/image";
import android from "../../../../public/images/android.svg";
import ios from "../../../../public/images/apple.svg";
import Link from "next/link";

export default function AppDown() {
  return (
      <div className="bg-black  p-20">
        <div><p className=" text-white lg:mx-20 text-center"><span className="text-3xl font-bold">Get your first tips today</span><br />
        <span>It takes 30 seconds to sign up. Download the app and create an account today and we’ll send you a tip guaranteed to double your first investment.</span></p></div>
        <div className="justify-center flex gap-3" >
        <Link href={'/about'}><Image src={android} width="120" height="60" placeholder="empty" /></Link>
        <Link href={'/about'}><Image src={ios} width="120" height="60" placeholder="empty" /></Link>
        </div>
        
      </div>
  )
}
