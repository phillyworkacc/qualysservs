'use client'
import { websiteConfig } from "@/app/page"
import { Logo } from "@/components/Icons/Icon"
import { useEffect, useState } from "react";
import { toast } from "sonner";
import AwaitButton from "@/components/AwaitButton/AwaitButton";
import Select from "@/components/Select/Select";
import { sendBookingMail } from "@/app/actions/sendMail";

export default function BookConsultationForm () {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [service, setService] = useState<BookingService>('Data Centre Consulting');
   const services: BookingService[] = [
      "Data Centre Consulting", "HTML & CSS Training", "Scratch 3 Training",
      "Javascript Training", "Typescript Training", "Java Training", "Python Training"
   ]
      
   useEffect(() => {
      if (websiteConfig.saveFormValues) {
         if (localStorage.getItem(websiteConfig.chatBot.userInfoLocalStorageId) !== null) {
            const info = JSON.parse(localStorage.getItem(websiteConfig.chatBot.userInfoLocalStorageId)!);
            setName(info.name);
         }
      }
   }, []);

   const makeBookingBtn = async (callback: Function) => {
      if (name == "") {
         toast.error("Please enter your name");
         callback();
         return;
      }
      if (email == "") {
         toast.error("Please enter your email");
         callback();
         return;
      }
      if (!services.includes(service)) {
         toast.error("Please choose a valid service");
         callback();
         return;
      }
      const booked = await sendBookingMail({ name, email, service });
      if (booked) {
         toast.success("Booked Successfully");
         setEmail("");
         setName("");
      } else {
         toast.error("Failed to confirm booking");
      }
      callback();
   }

   return (
      <div 
         className="box fit radius-10 dfb column gap-10 pd-3 pdx-3"
         style={{ backgroundColor: websiteConfig.formColors.background, color: websiteConfig.formColors.color, width: "100%", maxWidth: "700px" }}
      >
         <div className="box full dfb justify-center"><Logo size={40} /></div>
         <div className="text-xxxl full bold-700 text-center">BOOK CONSULTATION</div>
         <div className="box full pd-1 dfb column gap-8">
            <div className="text-sm full bold-600 text-left">Name *</div>
            <input
               type="text"
               className="s full pd-15 pdx-2 radius-10"
               placeholder="John Doe"
               value={name}
               onChange={e => setName(e.target.value)}
            />
         </div>
         <div className="box full pd-1 dfb column gap-8">
            <div className="text-sm full bold-600 text-left">Email *</div>
            <input
               type="email"
               className="s full pd-15 pdx-2 radius-10"
               placeholder="john.doe@example.com"
               value={email}
               onChange={e => setEmail(e.target.value)}
            />
         </div>
         <div className="box full pd-1 dfb column gap-8">
            <div className="text-sm full bold-600 text-left">Desired Service *</div>
            <Select
               options={services}
               onSelect={(option) => setService(option)}
               style={{ width: "100%", padding: "8px 4px" }}
               optionStyle={{ width: "100%", padding: "10px 15px" }}
               defaultOptionIndex={0}
            />
         </div>
         <AwaitButton className="sm full pd-15 radius-10" onClick={makeBookingBtn}>Book</AwaitButton>
      </div>
   )
}
