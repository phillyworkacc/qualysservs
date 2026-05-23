'use client'
import CustomSection from '@/components/CustomSection/CustomSection'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import { BodyContent, SubHeading } from '@/components/Formatting'
import Spacing from '@/components/Spacing/Spacing'
import { websiteConfig } from '@/app/page'

export default function DataCentreConsultingServicePage () {
   return (<>
      <Header />
      <CustomSection 
         textColor="black" bgColor="#fdfdfd"
         customSectionConfig={{
            title: "Data Centre Consulting".toUpperCase(),
            titleSize: "l", type: "version-2", align: "left",
            image: websiteConfig.services[0].image?.src!
         }}
      >
         <BodyContent className="text-sm line-height-18 pd-1 full text-left">
            Our expertise lies in optimizing data center infrastructures for peak performance. From precision cabling to seamless server racking and cooling solutions, we engineer efficiency that fuels your operations.
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Comprehensive Services</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            DC cabling, server racking, cooling optimization, etc
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Data Center Design and Planning</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Consulting on the design, layout, and infrastructure of data centers for optimal efficiency and scalability
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Server Racking and Deployment</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Setting up and configuring server racks for efficient organization and management of hardware
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Cabling Infrastructure</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Designing and implementing structured cabling systems for efficient connectivity and minimal downtime
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Cooling Optimization</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Consulting and implementation of cooling solutions to maintain optimal temperatures within the data center
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Power Management Solutions</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Advising on and implementing power management systems to ensure reliable and uninterrupted power supply
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Data Center Security</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Assessing and implementing security measures like access controls, surveillance, and intrusion detection systems
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Disaster Recovery Planning</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Developing strategies and protocols to ensure data backup, continuity, and recovery in case of disasters
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Virtualization and Cloud Migration</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Consulting on virtualization strategies and transitioning to cloud-based solutions for improved efficiency and scalability
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Performance Optimization</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Analyzing and optimizing data center performance for enhanced productivity and resource utilization
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Compliance and Regulatory Guidance</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Ensuring data center operations align with industry standards, regulations, and compliance requirements
         </BodyContent>
         <Spacing />
      </CustomSection>
      <Footer />  
   </>)
}