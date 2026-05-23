'use client'
import CustomSection from '@/components/CustomSection/CustomSection'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import { websiteConfig } from '@/app/page'
import { BodyContent, SubHeading } from '@/components/Formatting'
import Spacing from '@/components/Spacing/Spacing'

export default function SoftwareDevelopmentServicePage () {
   return (<>
      <Header />
      <CustomSection 
         textColor="black" bgColor="#fdfdfd"
         customSectionConfig={{
            title: "Software Development".toUpperCase(),
            titleSize: "l", type: "version-2", align: "left",
            image: websiteConfig.services[2].image?.src!
         }}
      >
         <BodyContent className="text-sm line-height-18 pd-1 full text-left">
            We are the architects of innovative digital experiences. Our team pioneers custom software solutions, ranging from captivating web designs to intuitive mobile and game app development. Proficient in a spectrum of programming languages, we bring your visions to life.
         </BodyContent>

         <SubHeading className='text-l bold-600'>Diverse Expertise in Software</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Web design, mobile app development, game development, and more
         </BodyContent>
         <Spacing />
         
         <SubHeading className='text-l bold-600'>Proficient in Various Programming Languages</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Java, JavaScript, Python, PHP, HTML5, and other modern languages
         </BodyContent>
         <Spacing />
         
         <SubHeading className='text-l bold-600'>Web Development</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Designing, developing, and maintaining websites using technologies such as HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue
         </BodyContent>
         <Spacing />
         
         <SubHeading className='text-l bold-600'>Mobile App Development</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Building iOS and Android applications using Swift, Kotlin, or cross-platform frameworks like Flutter and React Native
         </BodyContent>
         <Spacing />
         
         <SubHeading className='text-l bold-600'>Custom Software Solutions</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Developing tailored software applications to meet specific business requirements
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Game Development</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Designing and building interactive games using engines such as Unity or Unreal Engine
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>E-Commerce Solutions</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Creating online shopping platforms with payment integration, inventory management, and user-friendly interfaces
         </BodyContent>
         <Spacing />
         
         <SubHeading className='text-l bold-600'>Software Testing and Quality Assurance</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Functional, usability, and performance testing to ensure software reliability and quality
         </BodyContent>
         <Spacing />
      
         <SubHeading className='text-l bold-600'>UI/UX Design</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Designing intuitive, visually appealing, and user-centered interfaces and experiences
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Database Development and Management</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Designing and maintaining databases using SQL, NoSQL, and cloud-based data solutions
         </BodyContent>
         <Spacing />
         
         <SubHeading className='text-l bold-600'>API Development and Integration</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Building and integrating APIs for seamless communication between software systems
         </BodyContent>
         <Spacing />
         
         <SubHeading className='text-l bold-600'>Legacy System Modernization</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Modernizing outdated systems while preserving core functionality
         </BodyContent>
      </CustomSection>
      <Footer />  
   </>)
}