'use client'
import { websiteConfig } from "@/app/page"
import { SendHorizontal } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import Checkbox from "@/components/Checkbox/Checkbox"
import PhoneInput, { isValidUKMobile } from "@/components/PhoneInput"
import AwaitButton from "@/components/AwaitButton/AwaitButton"

export default function ChatBotForm () {
   const [name, setName] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [message, setMessage] = useState("");
   const [acceptedTerms, setAcceptedTerms] = useState(false);
   
   useEffect(() => {
      if (websiteConfig.saveFormValues) {
         if (localStorage.getItem(websiteConfig.chatBot.userInfoLocalStorageId) !== null) {
            const info = JSON.parse(localStorage.getItem(websiteConfig.chatBot.userInfoLocalStorageId)!);
            setName(info.name);
            setPhoneNumber(info.phoneNumber);
         }
      }
   }, []);

   const sendMessageBtn = async (callback: Function) => {
      if (name == "") {
         toast.error("Please enter your name");
         callback();
         return;
      }
      if (phoneNumber == "") {
         toast.error("Please enter your phone number");
         callback();
         return;
      }
      if (!isValidUKMobile(phoneNumber)) {
         toast.error("Please enter a valid phone number");
         callback();
         return;
      }
      if (message == "") {
         toast.error("Please enter your message");
         callback();
         return;
      }
      if (!acceptedTerms) {
         toast.error("Please accept the terms");
         callback();
         return;
      }
      const result = await fetch(
         "https://app.minwebagency.com/api/forms/chatbot", {
            method: "POST",
            body: JSON.stringify({
               name, phoneNumber, message,
               minwebBusinessId: websiteConfig.minwebBusinessId
            })
         });
      const data = await result.json();
      if (JSON.parse(data).success) {
         toast.success("Sent Message!");
         // WHEN MESSAGE SEND IS SUCCESSFUL THEN SAVE TO LOCAL STORAGE
         if (websiteConfig.saveFormValues) {
            localStorage.setItem(websiteConfig.chatBot.userInfoLocalStorageId, JSON.stringify({ name, phoneNumber }));
         }
      } else {
         toast.error("Failed to Send Message. Please Try Again!");
      }
      callback();
   }

   return (
      <div 
         className="box fit radius-10 dfb column gap-10 pd-3 pdx-3"
         style={{ backgroundColor: websiteConfig.formColors.background, color: websiteConfig.formColors.color, width: "100%", maxWidth: "700px" }}
      >
         <div className="box full dfb column gap-8">
            <input
               type="text"
               className="xs full pd-1 pdx-15 radius-10"
               placeholder="Name"
               value={name}
               onChange={e => setName(e.target.value)}
            />
         </div>
         <div className="box full dfb column gap-8">
            <PhoneInput
               className="xs full pd-1 pdx-15 radius-5"
               placeholder="012 3456 7890"
               value={phoneNumber}
               onChange={val => setPhoneNumber(val)}
            />
         </div>
         <div className="box full dfb column gap-8">
            <textarea 
               className="xs full h-10 pd-1 pdx-15 radius-10" 
               placeholder="Your enquiry"
               value={message}
               onChange={e => setMessage(e.target.value)}
            />
         </div>
         <div className="box full dfb column gap-8">
            <Checkbox
               label={<span className="text-xxs">By submitting this form, you agree that {websiteConfig.name} may contact you by phone, email, or text message regarding your enquiry. You can opt out of text messages at any time by replying <b style={{ display: "inline" }}>STOP</b>. Standard network charges may apply.</span>}
               onChange={v => setAcceptedTerms(v)}
            />
         </div>
         <AwaitButton className="xs full pd-12 radius-10" onClick={sendMessageBtn}>
            Send Message <SendHorizontal size={17} />
         </AwaitButton>
      </div>
   )
}
