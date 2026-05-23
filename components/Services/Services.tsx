'use client'
import type { ServiceList } from "@/types";
import { websiteConfig } from "@/app/page";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

type ServicesProps = {
   type: "style-1" | "style-2";
   services: ServiceList;
   nameSize?: "sm" | "m" | "ml" | "l" | "xl";
   align?: "left" | "center" | "right";
   bgColor?: string;
   textColor?: string;
}

export default function Services ({ type, services, nameSize, align, bgColor, textColor }: ServicesProps) {
   const router = useRouter();
   const bgColorsOptions = ["accent-color-10", "accent-color-30", "accent-color-50", "accent-color-70", "accent-color-90"];
   const bgColors: Record<string, string> = {
      "accent-color-10": websiteConfig.accentColor + "1a",
      "accent-color-30": websiteConfig.accentColor + "4d",
      "accent-color-50": websiteConfig.accentColor + "80",
      "accent-color-70": websiteConfig.accentColor + "b3",
      "accent-color-90": websiteConfig.accentColor + "e5",
   }

   if (type == "style-1") {
      return (
         <div className="services-list-style-1">
            {services.map(service => (
               <div 
                  key={service.href} 
                  className="service-list-item" 
                  style={{ backgroundImage: service.image ? `url('${service.image.src}')` : '' }}
                  onClick={() => router.push(service.href)}
               >
                  <div className="box full dfb column gap-3 bg-white radius-20 pdx-2 pd-2">
                     <div className={`text-${nameSize || 'l'} full bold-700 text-${align || 'left'}`}>{service.name}</div>
                     <div className={`text-xs full grey-5 text-${align || 'left'}`}>{service.description}</div>
                  </div>
               </div>
            ))}
         </div>
      )
   } else if (type == "style-2") {
      return (
         <div className="services-list-style-2">
            {services.map(service => (
               <div 
                  key={service.href} 
                  className="service-list-item"
                  style={{
                     backgroundColor: bgColor
                        ? bgColorsOptions.includes(bgColor) 
                           ? bgColors[bgColor!] 
                           : bgColor || websiteConfig.accentColor 
                        : 'white',
                     color: textColor || 'black'
                  }}
                  onClick={() => router.push(service.href)}
               >
                  <div className="box full column gap-5">
                     {(service.image) && (<div className="service-list-item-style-2-image">
                        <img src={service.image?.src} alt="service-image" />
                     </div>)}
                     <div className={`text-${nameSize || 'l'} full bold-700 mt-15 text-${align || 'left'}`}>{service.name}</div>
                     <div className={`text-xs full grey-5 pd-05 text-${align || 'left'}`}>{service.description}</div>
                     <div className="service-arrow-bottom">
                        <div className="box fit h-fit pd-05 pdx-05 radius-100p bg-grey-2 dfb align-center justify-center">
                           <ChevronRight />
                        </div>
                     </div>
                  </div>

               </div>
            ))}
         </div>
      )
   }
}
