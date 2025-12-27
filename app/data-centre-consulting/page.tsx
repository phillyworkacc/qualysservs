import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Spacing from '@/components/Spacing/Spacing'
import { BricolageGrotesqueFont } from '../fonts';

export default function DataCentreConsultingPage () {
   const dataCentreServices = [
      {
         title: "Comprehensive Services",
         description: "DC cabling, server racking, cooling optimization, etc"
      },
      {
         title: "Data Center Design and Planning",
         description: "Consulting on the design, layout, and infrastructure of data centers for optimal efficiency and scalability"
      },
      {
         title: "Server Racking and Deployment",
         description: "Setting up and configuring server racks for efficient organization and management of hardware"
      },
      {
         title: "Cabling Infrastructure",
         description: "Designing and implementing structured cabling systems for efficient connectivity and minimal downtime"
      },
      {
         title: "Cooling Optimization",
         description: "Consulting and implementation of cooling solutions to maintain optimal temperatures within the data center"
      },
      {
         title: "Power Management Solutions",
         description: "Advising on and implementing power management systems to ensure reliable and uninterrupted power supply"
      },
      {
         title: "Data Center Security",
         description: "Assessing and implementing security measures like access controls, surveillance, and intrusion detection systems"
      },
      {
         title: "Disaster Recovery Planning",
         description: "Developing strategies and protocols to ensure data backup, continuity, and recovery in case of disasters"
      },
      {
         title: "Virtualization and Cloud Migration",
         description: "Consulting on virtualization strategies and transitioning to cloud-based solutions for improved efficiency and scalability"
      },
      {
         title: "Performance Optimization",
         description: "Analyzing and optimizing data center performance for enhanced productivity and resource utilization"
      },
      {
         title: "Compliance and Regulatory Guidance",
         description: "Ensuring data center operations align with industry standards, regulations, and compliance requirements"
      }
   ];

   return (<>
      <Header />
      <div className="box full dfb align-center justify-center pd-4">
         <div className="page-container">
            <div className={"text-xxl bold-600 full pd-1 accent-color " + BricolageGrotesqueFont.className}>Data Centre Consulting</div>
            <div className="text-xxs grey-5 full pd-05" style={{ lineHeight: "1.8rem" }}>
               Our expertise lies in optimizing data center infrastructures for peak performance. From precision cabling to seamless server racking and cooling solutions, we engineer efficiency that fuels your operations.
            </div>
            <Spacing />
            {dataCentreServices.map((dcService, index) => (
               <div className="box full dfb column gap-5 mb-3" key={index}>
                  <div className="text-s bold-600 full">{dcService.title}</div>
                  <div className="text-xxs pd-05 grey-5 full">{dcService.description}</div>
               </div>
            ))}
         </div>
      </div>
      <Footer />
   </>)
}
