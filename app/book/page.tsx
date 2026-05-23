'use client'
import CustomSection from '@/components/CustomSection/CustomSection'
import Header from '@/components/Header'
import Footer from '@/components/Footer/Footer'
import { websiteConfig } from '../page'
import BookConsultationForm from '@/forms/BookConsultationForm'

export default function BookPage () {
   return (<>
      <Header />
      <CustomSection 
         textColor="black" bgColor={websiteConfig.formColors.background}
         customSectionConfig={{
            title: "", titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="box full dfb justify-center">
            <BookConsultationForm />
         </div>
      </CustomSection>
      <Footer />
   </>)
}
