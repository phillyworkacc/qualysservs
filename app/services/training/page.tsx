'use client'
import CustomSection from '@/components/CustomSection/CustomSection'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import { websiteConfig } from '@/app/page'
import { BodyContent, SubHeading } from '@/components/Formatting'
import Spacing from '@/components/Spacing/Spacing'

export default function TrainingServicePage () {
   return (<>
      <Header />
      <CustomSection 
         textColor="black" bgColor="#fdfdfd"
         customSectionConfig={{
            title: "Training".toUpperCase(),
            titleSize: "l", type: "version-2", align: "left",
            image: websiteConfig.services[3].image?.src!
         }}
      >
         <div className="text-m pd-1 full text-left mb-2">{websiteConfig.services[3].description}</div>

         <BodyContent className="text-sm line-height-18 pd-1 full text-left">
            Qualys Services Ltd provides hands-on software development training designed to build real, job-ready skills. Our programs cover <b>Scratch 3, HTML, CSS, JavaScript, TypeScript, Java, and Python</b>, taking learners from fundamentals to practical application. Training is structured, outcome-focused, and suitable for beginners through to intermediate developers, with an emphasis on problem-solving, modern development practices, and real-world projects.
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Who It's For</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Our software development training is designed for <b>students starting their journey, beginners with little or no coding experience</b>, and <b>career switchers looking to move into software and technology roles</b>. The programmes are structured to support learners at different stages, with clear progression from fundamentals to practical, real-world skills.
         </BodyContent>
         <Spacing />
         
         <SubHeading className='text-l bold-600'>Outcomes</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Learners gain practical, hands-on experience building <b>websites, applications, and games</b>, applying what they learn to real projects that reflect real-world development workflows. This approach ensures skills are not just theoretical, but directly transferable to academic, personal, or professional use.
         </BodyContent>
         <Spacing />
      </CustomSection>
      <Footer />  
   </>)
}