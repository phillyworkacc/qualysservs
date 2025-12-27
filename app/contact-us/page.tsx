'use client'
import { BricolageGrotesqueFont } from '../fonts'
import { useState } from 'react'
import { sendBookingMail, sendContactUsMail } from '../actions/sendMail'
import { toast } from 'sonner'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Spacing from '@/components/Spacing/Spacing'
import Select from '@/components/Select/Select'
import AwaitButton from '@/components/AwaitButton/AwaitButton'

export default function ContactUsPage () {
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   const sendMessageBtn = async (callback: Function) => {
      if (firstName == "" || lastName == "" || email == "" || message == "") {
         toast.error("Please fill all the fields");
         callback();
         return;
      }
      const booked = await sendContactUsMail({
         name: `${firstName} ${lastName}`, email, message
      });
      if (booked) {
         toast.success("Message Sent Successfully");
         setEmail("");
         setFirstName("");
         setLastName("");
         setMessage("");
      } else {
         toast.error("Failed to sent message");
      }
      callback();
   }

   return (<>
      <Header />
      <div className="box full dfb align-center justify-center pd-4">
         <div className="page-container">
            <div className={"text-xxl bold-600 full pd-1 accent-color " + BricolageGrotesqueFont.className}>Contact Us</div>
            <div className="text-xxs grey-5 full pd-05" style={{ lineHeight: "1.8rem" }}>
               Contact <b className="accent-color">Qualys Services Ltd</b>, fill the form below to send us a message
            </div>
            
            <Spacing />

            <div className="box full dfb column gap-10">
               <div className="box full dfb gap-10">
                  <div className="box full dfb column gap-5">
                     <div className="text-s full bold-500 pd-05">First Name</div>
                     <input type="text" className="xxs pd-12 pdx-15 full" value={firstName} onChange={e => setFirstName(e.target.value)} />
                  </div>
                  <div className="box full dfb column gap-5">
                     <div className="text-s full bold-500 pd-05">Last Name</div>
                     <input type="email" className="xxs pd-12 pdx-15 full" value={lastName} onChange={e => setLastName(e.target.value)} />
                  </div>
               </div>
               <div className="box full dfb column gap-5">
                  <div className="text-s full bold-500 pd-05">Email</div>
                  <input type="text" className="xxs pd-12 pdx-15 full" value={email} onChange={e => setEmail(e.target.value)} />
               </div>
               <div className="box full dfb column gap-5">
                  <div className="text-s full bold-500 pd-05">Message</div>
                  <textarea className='xxs full pd-12 pdx-15 h-20' value={message} onChange={e => setMessage(e.target.value)} />
               </div>
            </div>
            <Spacing />
            
            <AwaitButton className='xxs pd-12 pdx-2' onClick={sendMessageBtn}>
               Send Message
            </AwaitButton>
            <Spacing size={3} />
         </div>
      </div>
      <Footer />
   </>)
}
