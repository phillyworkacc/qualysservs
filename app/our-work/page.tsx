'use client'
import CustomSection from '@/components/CustomSection/CustomSection'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import { BodyContent, BoldColourLink, SubHeading } from '@/components/Formatting'
import Spacing from '@/components/Spacing/Spacing'

export default function OurWorkPage () {
   return (<>
      <Header />
      <CustomSection 
         textColor="black" bgColor="#fdfdfd"
         customSectionConfig={{
            title: "Our Work".toUpperCase(),
            titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <BodyContent className="text-sm line-height-18 pd-1 full text-left">
            Here are some websites we have built for our recent customers
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>The Fertility Connect</SubHeading>
         <BoldColourLink url='https://thefertilityconnect.com/'>https://thefertilityconnect.com/</BoldColourLink>
         <Spacing size={2} />

         <SubHeading className='text-l bold-600'>The Loupe Collective</SubHeading>
         <BoldColourLink url='https://www.theloupecollective.com/'>https://www.theloupecollective.com/</BoldColourLink>
         <Spacing size={2} />

         <SubHeading className='text-l bold-600'>Serenity Mental Health</SubHeading>
         <BoldColourLink url='https://serenitymentalhealth.co.uk/'>https://serenitymentalhealth.co.uk/</BoldColourLink>
         <Spacing size={2} />
      </CustomSection>
      <Footer />  
   </>)
}