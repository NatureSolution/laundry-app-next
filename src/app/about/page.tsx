import AboutBanner from "./feature/aboutBanner";
import EasyBokking from "./feature/easyBooking";
import WeFeatured from "./feature/weFeature"

export default function About() {
    return (
       <div>
        <div><AboutBanner/></div>
        <div><EasyBokking/></div>
        <div> <WeFeatured/></div>
        <div></div>
       </div>
    )
  }