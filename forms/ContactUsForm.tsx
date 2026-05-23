'use client'
import { websiteConfig } from "@/app/page"
import { Logo } from "@/components/Icons/Icon"
import { useEffect, useState } from "react";
import { toast } from "sonner";
import AwaitButton from "@/components/AwaitButton/AwaitButton";
import { sendContactUsMail } from "@/app/actions/sendMail";

export default function ContactUsForm () {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
      
   useEffect(() => {
      if (websiteConfig.saveFormValues) {
         if (localStorage.getItem(websiteConfig.chatBot.userInfoLocalStorageId) !== null) {
            const info = JSON.parse(localStorage.getItem(websiteConfig.chatBot.userInfoLocalStorageId)!);
            setName(info.name);
         }
      }
   }, []);

   const sendMessageBtn = async (callback: Function) => {
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
      if (message == "") {
         toast.error("Please enter your message");
         callback();
         return;
      }
      const booked = await sendContactUsMail({ name, email, message });
      if (booked) {
         toast.success("Message Sent Successfully");
         setEmail("");
         setName("");
      } else {
         toast.error("Failed to sent message");
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
            <div className="text-sm full bold-600 text-left">Message *</div>
            <textarea 
               className="s full h-20 pd-15 pdx-2 radius-10" 
               placeholder="Your enquiry"
               value={message}
               onChange={e => setMessage(e.target.value)}
            />
         </div>
         <AwaitButton className="sm full pd-2 radius-10" onClick={sendMessageBtn}>
            Send Message
         </AwaitButton>
      </div>
   )
}
