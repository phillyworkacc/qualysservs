import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Spacing from '@/components/Spacing/Spacing'
import { BricolageGrotesqueFont } from '../fonts'

export default function ITServicesPage () {
   const itServices = [
      {
         title: "Hardware and Software Solutions",
         description: "Hardware break and fix, desktop and laptop repair services, OS installation"
      },
      {
         title: "Server Administration",
         description: "Administration of Windows and Linux servers including DNS, mail servers, and related services"
      },
      {
         title: "Buying and Selling of New and Used IT Hardware",
         description: "Buying and selling of new and used IT hardware"
      },
      {
         title: "Hardware Break/Fix Services",
         description: "Repair and maintenance services for malfunctioning hardware components"
      },
      {
         title: "Desktop and Laptop Repair",
         description: "Diagnosis, repair, and upgrade services for desktop computers and laptops"
      },
      {
         title: "Operating System (OS) Installation",
         description: "Installation, configuration, and troubleshooting of operating systems such as Windows, macOS, and Linux"
      },
      {
         title: "Server Setup and Maintenance",
         description: "Setting up, configuring, and maintaining server hardware for businesses or data centers"
      },
      {
         title: "Network Equipment Services",
         description: "Installation, configuration, and management of network devices including routers, switches, and firewalls"
      },
      {
         title: "Hardware Upgrades",
         description: "Upgrading components like RAM, storage, or graphics cards to improve performance"
      },
      {
         title: "Peripheral Setup and Troubleshooting",
         description: "Setup and troubleshooting of peripherals such as printers, scanners, and external drives"
      },
      {
         title: "Data Recovery Services",
         description: "Recovering data from damaged or corrupted storage devices"
      },
      {
         title: "IT Asset Management",
         description: "Inventory, monitoring, and lifecycle management of IT hardware assets"
      },
      {
         title: "Hardware Procurement and Consulting",
         description: "Selecting and procuring hardware based on technical requirements and budget constraints"
      }
   ]

   return (<>
      <Header />
      <div className="box full dfb align-center justify-center pd-4">
         <div className="page-container">
            <div className={"text-xxl bold-600 full pd-1 accent-color " + BricolageGrotesqueFont.className}>IT Services</div>
            <div className="text-xxs grey-5 full pd-05" style={{ lineHeight: "1.8rem" }}>
               With an unwavering commitment to service excellence, we provide comprehensive IT solutions. From hardware troubleshooting and OS administration to procuring cutting-edge IT components, our services cater to your diverse technology needs.
            </div>
            <Spacing />
            {itServices.map((itService, index) => (
               <div className="box full dfb column gap-5 mb-3" key={index}>
                  <div className="text-s bold-600 full">{itService.title}</div>
                  <div className="text-xxs pd-05 grey-5 full">{itService.description}</div>
               </div>
            ))}
         </div>
      </div>
      <Footer />
   </>)
}
