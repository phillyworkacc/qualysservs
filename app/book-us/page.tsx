'use client'
import { BricolageGrotesqueFont } from '../fonts'
import { useState } from 'react'
import { sendBookingMail } from '../actions/sendMail'
import { toast } from 'sonner'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Spacing from '@/components/Spacing/Spacing'
import Select from '@/components/Select/Select'
import AwaitButton from '@/components/AwaitButton/AwaitButton'

export default function BookUsPage () {
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [service, setService] = useState<BookingService>('Data Centre Consulting');

   const sendBookingBtn = async (callback: Function) => {
      if (firstName == "" || lastName == "" || email == "") {
         toast.error("Please fill all the fields");
         callback();
         return;
      }
      const booked = await sendBookingMail({
         name: `${firstName} ${lastName}`, email, service
      });
      if (booked) {
         toast.success("Booked Successfully");
         setEmail("");
         setFirstName("");
         setLastName("");
      } else {
         toast.error("Failed to confirm booking");
      }
      callback();
   }

   return (<>
      <Header />
      <div className="box full dfb align-center justify-center pd-4">
         <div className="page-container">
            <div className={"text-xxl bold-600 full pd-1 accent-color " + BricolageGrotesqueFont.className}>Book Us</div>
            <div className="text-xxs grey-5 full pd-05" style={{ lineHeight: "1.8rem" }}>
               Book <b className="accent-color">Qualys Services Ltd</b> for data centre consulting or a training
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
               <div className="box full dfb gap-10">
                  <div className="box full dfb column gap-5">
                     <div className="text-s full bold-500 pd-05">Email</div>
                     <input type="text" className="xxs pd-12 pdx-15 full" value={email} onChange={e => setEmail(e.target.value)} />
                  </div>
                  <div className="box full dfb column gap-5">
                     <div className="text-s full bold-500 pd-05">Desired Service</div>
                     <Select
                        options={[
                           "Data Centre Consulting", "HTML & CSS Training", "Scratch 3 Training",
                           "Javascript Training", "Typescript Training", "Java Training", "Python Training"
                        ] as BookingService[]}
                        onSelect={(option) => setService(option)}
                        style={{ width: "100%", padding: "4px" }}
                        optionStyle={{ width: "100%", padding: "10px 15px" }}
                        defaultOptionIndex={0}
                     />
                  </div>
               </div>
            </div>
            <Spacing />
            
            <AwaitButton className='xxs pd-12 pdx-2' onClick={sendBookingBtn}>
               Book Now
            </AwaitButton>
            <Spacing size={3} />
         </div>
      </div>
      <Footer />
   </>)
}
