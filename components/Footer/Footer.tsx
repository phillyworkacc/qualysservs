"use client"
import "./Footer.css"
import Spacing from "@/components/Spacing/Spacing";
import Link from "next/link";
import { Mail, MailCheck, MessageCircle, Phone } from "lucide-react";
import { CustomIcon } from "@/components/Icons/Icon";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";


function FooterLink (
   { link, label, icon, instagram, target }:
   { link: string, label: string, icon?: ReactNode, instagram?: boolean, target?: HTMLAttributeAnchorTarget }
) {
   return (
      <Link href={link} target={target || "_blank"} className={`footer-link-box ${instagram?"instagram":''}`}>
         <div className="text-xxs dfb align-center gap-5">
            {icon!} <span className={`footer-link${instagram?"-instagram":''}`}>{label}</span>
         </div>
      </Link>
   )
}

export default function Footer() {
   const cooperations = [
      {
         link: "https://grxnd.app/?utm_source=qualys-services",
         iconUrl: "https://grxnd.app/favicon.ico",
         label: "Grxnd"
      },
      {
         link: "https://visora.vercel.app/?utm_source=qualys-services",
         iconUrl: "https://visora.vercel.app/favicon.ico",
         label: "Visora"
      },
   ]

   return (
      <footer className="footer">
         <div className="footer-wrapper">

            <div className="footer-link-sections">
               <div className="footer-link-section">
                  <div className="text-s bold-600 full mb-1">Contact</div>
                  <FooterLink
                     link="tel:07405320946"
                     label="+44 7405 320946"
                     icon={<Phone size={17}  />}
                  />
                  <FooterLink
                     link="mailto:qualysservuk@gmail.com"
                     label="Send us an email"
                     icon={<Mail size={17} />}
                  />
                  <FooterLink
                     link="/contact-us"
                     label="Send us a message"
                     target="_self"
                     icon={<MessageCircle size={17} />}
                  />
                  <div className="text-xxs dfb align-center gap-5">
                     <Mail size={17} /> qualysservuk@gmail.com
                  </div>
               </div>

               <div className="footer-link-section">
                  <div className="text-s bold-600 full mb-1">Links</div>
                  <FooterLink
                     link="/#services"
                     label="Our Services"
                     target="_self"
                  />
                  <FooterLink
                     link="/data-centre-consulting"
                     label="Data Centre Consulting"
                     target="_self"
                  />
                  <FooterLink
                     link="/it-services"
                     label="IT Services"
                     target="_self"
                  />
                  <FooterLink
                     link="/software-dev"
                     label="Software Development"
                     target="_self"
                  />
                  <FooterLink
                     link="/book-us"
                     label="Book Consultation"
                  />
                  <FooterLink
                     link="/book-us"
                     label="Book Training"
                  />
               </div>

               <div className="footer-link-section">
                  <div className="text-s bold-600 full mb-1">Cooperations</div>
                  {cooperations.map((cooperation, index) => (
                     <div key={index} className="box fit pd-05">
                        <FooterLink
                           link={cooperation.link}
                           label={cooperation.label}
                           icon={<CustomIcon url={cooperation.iconUrl} round size={17} />}
                        />
                     </div>
                  ))}
               </div>
            </div>
            
            <Spacing size={1} />

            <div className="box full pd-1">
               <p className="footer-copy text-xxxs text-center full">
                  &copy; {new Date().getFullYear()} Qualys Services Ltd. All rights reserved
               </p>
            </div>
         </div>
      </footer>
   );
}
