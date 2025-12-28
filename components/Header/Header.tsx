'use client'
import "./Header.css"
import { BricolageGrotesqueFont } from "@/app/fonts";
import { CustomIcon } from "@/components/Icons/Icon"
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
	const router = useRouter();

   const visitContactUsPage = () => {
		router.push("/contact-us");
	}
   
   return (
      <header>
         <div className="page-container">
            <div className="box full h-full dfb column gap-20">

               <div className="box full h-full dfb align-center gap-20">
                  <div className="box fit">
                     <Link className="box full dfb align-center cursor-pointer gap-20" href={'/'}>
                        <CustomIcon url="logo.png" round size={55} />
                        <div 
                           className={`${BricolageGrotesqueFont.className} hide-on-mobile text-ml fit bold-600 accent-color whitespace-nowrap`}
                        >Qualys Services</div>
                     </Link>
                  </div>

                  <div className="box full dfb align-center justify-end gap-20">
                     <button className="xxs pd-12 pdx-15" onClick={visitContactUsPage}>
                        <Mail size={15} /> Contact Us
                     </button>
                  </div>
               </div>

               <div className="box full dfb gap-20 wrap">
                  <Link href='/#services'>
                     <div className="text-xxs bold-500 visible-link fit accent-color whitespace-nowrap">Our Services</div>
                  </Link>
                  <Link href='/book-us'>
                     <div className="text-xxs bold-500 visible-link fit accent-color whitespace-nowrap">Book Training</div>
                  </Link>
                  <Link href='/book-us'>
                     <div className="text-xxs bold-500 visible-link fit accent-color whitespace-nowrap">Book Consultation</div>
                  </Link>
               </div>
            
            </div>
         </div>
      </header>
   )
}
