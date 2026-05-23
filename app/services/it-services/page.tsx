'use client'
import CustomSection from '@/components/CustomSection/CustomSection'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import { websiteConfig } from '@/app/page'
import { BodyContent, SubHeading } from '@/components/Formatting'
import Spacing from '@/components/Spacing/Spacing'

export default function ITServicesPage () {
   return (<>
      <Header />
      <CustomSection 
         textColor="black" bgColor="#fdfdfd"
         customSectionConfig={{
            title: "IT Services".toUpperCase(),
            titleSize: "l", type: "version-2", align: "left",
            image: websiteConfig.services[1].image?.src!
         }}
      >
         <BodyContent className="text-sm line-height-18 pd-1 full text-left">
            With an unwavering commitment to service excellence, we provide comprehensive IT solutions. From hardware troubleshooting and OS administration to procuring cutting-edge IT components, our services cater to your diverse technology needs.
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Hardware and Software Solutions</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Hardware break and fix, desktop and laptop repair services, OS installation
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Server Administration</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Administration of Windows and Linux servers including DNS, mail servers, and related services
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Buying and Selling of New and Used IT Hardware</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Buying and selling of new and used IT hardware
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Hardware Break/Fix Services</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Repair and maintenance services for malfunctioning hardware components
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Desktop and Laptop Repair</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Diagnosis, repair, and upgrade services for desktop computers and laptops
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Operating System (OS) Installation</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Installation, configuration, and troubleshooting of operating systems such as Windows, macOS, and Linux
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Server Setup and Maintenance</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Setting up, configuring, and maintaining server hardware for businesses or data centers
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Network Equipment Services</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Installation, configuration, and management of network devices including routers, switches, and firewalls
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Hardware Upgrades</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Upgrading components like RAM, storage, or graphics cards to improve performance
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Peripheral Setup and Troubleshooting</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Setup and troubleshooting of peripherals such as printers, scanners, and external drives
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Data Recovery Services</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Recovering data from damaged or corrupted storage devices
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>IT Asset Management</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Inventory, monitoring, and lifecycle management of IT hardware assets
         </BodyContent>
         <Spacing />

         <SubHeading className='text-l bold-600'>Hardware Procurement and Consulting</SubHeading>
         <BodyContent className='text-sm line-height-18 text-left'>
            Selecting and procuring hardware based on technical requirements and budget constraints
         </BodyContent>
         <Spacing />
      </CustomSection>
      <Footer />  
   </>)
}