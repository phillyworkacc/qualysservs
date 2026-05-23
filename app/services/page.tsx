'use client'
import CustomSection from '@/components/CustomSection/CustomSection'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import Services from '@/components/Services/Services'
import { websiteConfig } from '../page'

export default function ServicePage () {
   return (<>
      <Header />
      <CustomSection 
         textColor="black" bgColor="#efefef"
         customSectionConfig={{
            title: "Our Services".toUpperCase(),
            titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="text-m pd-1 full text-left mb-2">{websiteConfig.servicesDescriptionCopy}</div>
         <Services
            type="style-2"
            services={websiteConfig.services}
            nameSize="m"
         />
      </CustomSection>
      <Footer />  
   </>)
}
