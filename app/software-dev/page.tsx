import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Spacing from '@/components/Spacing/Spacing';
import { BricolageGrotesqueFont } from '../fonts';

export default function SoftwareDevServicesPage () {
   const softwareDevServices = [
      {
         title: "Diverse Expertise in Software",
         description: "Web design, mobile app development, game development, and more"
      },
      {
         title: "Proficient in Various Programming Languages",
         description: "Java, JavaScript, Python, PHP, HTML5, and other modern languages"
      },
      {
         title: "Web Development",
         description: "Designing, developing, and maintaining websites using technologies such as HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue"
      },
      {
         title: "Mobile App Development",
         description: "Building iOS and Android applications using Swift, Kotlin, or cross-platform frameworks like Flutter and React Native"
      },
      {
         title: "Custom Software Solutions",
         description: "Developing tailored software applications to meet specific business requirements"
      },
      {
         title: "Game Development",
         description: "Designing and building interactive games using engines such as Unity or Unreal Engine"
      },
      {
         title: "E-Commerce Solutions",
         description: "Creating online shopping platforms with payment integration, inventory management, and user-friendly interfaces"
      },
      {
         title: "Software Testing and Quality Assurance",
         description: "Functional, usability, and performance testing to ensure software reliability and quality"
      },
      {
         title: "UI/UX Design",
         description: "Designing intuitive, visually appealing, and user-centered interfaces and experiences"
      },
      {
         title: "Database Development and Management",
         description: "Designing and maintaining databases using SQL, NoSQL, and cloud-based data solutions"
      },
      {
         title: "API Development and Integration",
         description: "Building and integrating APIs for seamless communication between software systems"
      },
      {
         title: "Legacy System Modernization",
         description: "Modernizing outdated systems while preserving core functionality"
      }
   ];
   
   return (<>
      <Header />
      <div className="box full dfb align-center justify-center pd-4">
         <div className="page-container">
            <div className={"text-xxl bold-600 full pd-1 accent-color " + BricolageGrotesqueFont.className}>Software Development</div>
            <div className="text-xxs grey-5 full pd-05" style={{ lineHeight: "1.8rem" }}>
               We are the architects of innovative digital experiences. Our team pioneers custom software solutions, ranging from captivating web designs to intuitive mobile and game app development. Proficient in a spectrum of programming languages, we bring your visions to life.
            </div>
            <Spacing />
            {softwareDevServices.map((softwareDevService, index) => (
               <div className="box full dfb column gap-5 mb-3" key={index}>
                  <div className="text-s bold-600 full">{softwareDevService.title}</div>
                  <div className="text-xxs pd-05 grey-5 full">{softwareDevService.description}</div>
               </div>
            ))}
         </div>
      </div>
      <Footer />
   </>)
}
