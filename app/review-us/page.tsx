'use client'
import CustomSection from "@/components/CustomSection/CustomSection"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header"
import ImageSection from "@/components/ImageSection/ImageSection"
import House from "@/public/assets/gallery-image-4.jpg"
import { SingleChoiceCheckbox } from "@/components/Checkbox/Checkbox"
import { Star } from "lucide-react"
import { Logo } from "@/components/Icons/Icon"
import { useState } from "react"
import { wait } from "@/utils/wait"
import { websiteConfig } from "../page"
import { toast } from "sonner"
import AwaitButton from "@/components/AwaitButton/AwaitButton"
import { sendReviewMail } from "../actions/sendMail"

function reAppend (count: number, value: React.ReactNode): React.ReactNode {
   if (count > 1) {
      return <>{reAppend(count-1, value)}{value}</>;
   }
   return value;
}

export default function ReviewUsPage () {
   const ratingStars = Array.from({ length: 5 }, (_,i) => i+1).toReversed().map(v => reAppend(v, <Star color="#ff9c1b" fill="#ff9c1b" />));

   const [nextReviewFormStage, setNextReviewFormStage] = useState<'feedback' | null>(null);
   const [name, setName] = useState('');
   const [feedback, setFeedback] = useState('');
   const [chosenRatingStars, setChosenRatingStars] = useState<number>(0);

   const onRatingChosen = async (index: number) => {
      setChosenRatingStars(index);
      toast(index)
      setNextReviewFormStage("feedback");
   }

   const onRatingSubmit = async (callback: Function) => {
      if (feedback.trim() == "") {
         toast.error("Please enter your feedback");
         callback();
         return;
      }
      const result = await sendReviewMail({ name, stars: `${[5,4,3,2,1][chosenRatingStars]}`, feedback })
      if (result) {
         setName("");
         setFeedback("");
         toast.success("Sent Review!");
      } else {
         toast.error("Failed to Send Review. Please Try Again!");
      }
      callback();
   }

   return (<>
      <Header />
      <ImageSection image={House} backgroundOpacity={0.5}>
         <div className="box full dfb column gap-10">
            <div className="text-b full text-center color-white bold-700">REVIEW US</div>
         </div>
      </ImageSection>
      <CustomSection
         bgColor="#e0e0e0" textColor="black"
         customSectionConfig={{
            title: "How did we do?", type: "version-1", align: "center"
         }}
      >
         <div className="box full dfb column align-center gap-10 pd-2">
            <div className="box full mw-700 h-fit bg-white radius-20 pd-3 pdx-3">
               <div className="box pd-1 full mw-700">
                  <Logo size={40} />
               </div>
               {(nextReviewFormStage == null) ? (<>
                  <div className="text-m pd-1 full text-left bold-600 mw-700">
                     Please Rate Us *
                  </div>
                  <div className="box full mw-700">
                     <SingleChoiceCheckbox options={ratingStars} onCheck={onRatingChosen} addBorder="#ccc" />
                  </div>
               </>) : (<>
                  <div className="box pd-1 full mw-700">
                     <div className="box full pd-1 dfb column gap-8">
                        <div className="text-sm full bold-600 text-left">Name (optional)</div>
                        <input 
                           type="text"
                           className="s full pd-15 pdx-2 radius-10"
                           placeholder="John Doe"
                           value={name} onChange={e => setName(e.target.value)}
                        />
                     </div>
                     <div className="box full pd-1 dfb column gap-8">
                        <div className="text-sm full bold-600 text-left">Your Feedback *</div>
                        <textarea 
                           className="s full h-20 pd-15 pdx-2 radius-10" 
                           placeholder="Your feedback"
                           value={feedback} onChange={e => setFeedback(e.target.value)}
                        />
                     </div>
                     <AwaitButton className="sm full pd-2 radius-10 no-hover-scale" onClick={onRatingSubmit}>
                        Submit
                     </AwaitButton>
                  </div>
               </>)}
               </div>
            </div>

      </CustomSection>
      <Footer />
   </>)
}
