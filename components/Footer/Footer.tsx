'use client'
import Link from "next/link";
import { Logo } from "../Icons/Icon";
import { websiteConfig } from "@/app/page";

export default function Footer () {
   const { accentColor, name } = websiteConfig;
   return (
      <section 
         className="footer"
         style={{ backgroundColor: `${accentColor}4d`, color: "black" }}
      >
         <div className="page-container">
            <div className="box full dfb column gap-10">
               <Logo size={35} />
               <div className="text-xs pd-1 full">
                  &copy; {new Date().getFullYear()} Copyright {name}
               </div>
               <div className="box full pd-05">
                  <div className="horizontal-convertible gap-10">
                     <div className="box full dfb column gap-10">
                        <div className="text-s bold-700">Business</div>
                        <Link href='/' className="text-xs fit"><div className="text-xs fit visible-link">Home</div></Link>
                        <Link href='/contact' className="text-xs fit"><div className="text-xs fit visible-link">Contact</div></Link>
                        <Link href='/review-us' className="text-xs fit"><div className="text-xs fit visible-link">Review Us</div></Link>
                     </div>
                     <div className="box full dfb column gap-10">
                        <div className="text-s bold-700">Services</div>
                        {websiteConfig.services.map(service => (
                           <Link key={service.href} href={service.href} className="text-xs fit">
                              <div className="text-xs fit visible-link">{service.name}</div>
                           </Link>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="box full dfb align-center gap-20 wrap pd-15 mt-1">
                  <Link href='/privacy-policy' className="text-s fit">
                     <div className="text-xs fit visible-link">Privacy Policy</div>
                  </Link>
                  <Link href='/terms' className="text-s fit">
                     <div className="text-xs fit visible-link">Terms and Conditions</div>
                  </Link>
               </div>
            </div>
         </div>
      </section>
   )
}
