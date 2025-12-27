'use client'
import "./Hero.css"
import { CheckCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { BricolageGrotesqueFont } from "@/app/fonts";
import Link from "next/link";

export default function HeroSection () {
   const router = useRouter();

   return (
      <section className="hero">
         <div className="page-container">
            <div className="hero-section-contents">

               <div className="box full h-full dfb column gap-10">
                  <div className={"text-xxl bold-700 full accent-color " + BricolageGrotesqueFont.className}>Welcome to Qualys</div>
                  <div className="text-xxs mb-2 grey-5">
                     Empowering Your Digital Success with Comprehensive Solutions
                  </div>
                  <div className="text-xs" style={{ lineHeight: "1.8rem" }}>
                     At Qualys Services Ltd, our mission is to transcend conventional boundaries within the digital landscape. With an unwavering commitment to innovation and excellence, we stand as pioneers in leveraging technology to revolutionize businesses across diverse sectors. We redefine possibilities in the digital sphere.
                  </div>
                  <ul className="box pd-05">
                     <li className="text-xxs pd-05 grey-5"><CheckCheck size={14} className="accent-color" strokeWidth={3} /> Data Center Consulting</li>
                     <li className="text-xxs pd-05 grey-5"><CheckCheck size={14} className="accent-color" strokeWidth={3} /> IT Services</li>
                     <li className="text-xxs pd-05 grey-5"><CheckCheck size={14} className="accent-color" strokeWidth={3} /> Software Development</li>
                     <li className="text-xxs pd-05 grey-5"><CheckCheck size={14} className="accent-color" strokeWidth={3} /> Training</li>
                  </ul>
                  <div className="box dfb gap-10 wrap">
                     <Link href="/book">
                        <button className="xxs pd-13 pdx-3 tiny-shadow whitespace-nowrap">Explore Our Services</button>
                     </Link>
                     <Link href="/contact-us">
                        <button className="xxs pd-13 pdx-3 outline-black tiny-shadow whitespace-nowrap">Contact Us</button>
                     </Link>
                  </div>
               </div>

               <div className="box full h-full dfb column gap-10">
                  <div className="hero-image">
                     <img src="about.jpg" alt="hero image" />
                  </div>
               </div>

            </div>
         </div>
         
      </section>
   )
}
