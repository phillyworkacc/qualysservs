'use client'
import Link from 'next/link'
import CustomSection from '@/components/CustomSection/CustomSection'
import Header from '@/components/Header'
import Footer from '@/components/Footer/Footer'
import GetFreeQuoteForm from '@/forms/BookConsultationForm'
import { Mail } from 'lucide-react'
import { websiteConfig } from '../page'

export default function ContactPage () {
   return (<>
      <Header />
      <CustomSection 
         textColor="black" bgColor="#efefef"
         customSectionConfig={{
            title: "Contact Us".toUpperCase(),
            titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="horizontal-convertible full gap-40">
            <div className="box full">
               <div className="text-m pd-1 full text-left">Contact us by filling in the form or by using any of the options below and we'll get back to you</div>
               <div className="box full pd-1 dfb column gap-10">
                  <Link href={`mailto:${websiteConfig.email}`} target="_blank">
                     <button className="s pd-15 full"><Mail /> {websiteConfig.email}</button>
                  </Link>
               </div>
            </div>
            <div className="box full">
               <GetFreeQuoteForm />
            </div>
         </div>
      </CustomSection>
      <Footer />
   </>)
}
