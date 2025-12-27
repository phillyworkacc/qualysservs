import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Spacing from "@/components/Spacing/Spacing";
import { BricolageGrotesqueFont } from "../fonts";


export default function TrainingPage () {
   return (<>
      <Header />
      <div className="box full dfb align-center justify-center pd-4">
         <div className="page-container">
            <div className={"text-xxl bold-600 full pd-1 accent-color " + BricolageGrotesqueFont.className}>Training</div>
            <div className="text-xxs grey-5 full pd-05" style={{ lineHeight: "1.8rem" }}>
               Empowering your workforce with cutting-edge skills is pivotal for sustained growth.
            </div>
            <Spacing />
            <div className="text-xxs grey-5 full pd-05" style={{ lineHeight: "1.8rem" }}>
               Qualys Services Ltd provides hands-on software development training designed to build real, job-ready skills. Our programs cover <b>Scratch 3, HTML, CSS, JavaScript, TypeScript, Java, and Python</b>, taking learners from fundamentals to practical application. Training is structured, outcome-focused, and suitable for beginners through to intermediate developers, with an emphasis on problem-solving, modern development practices, and real-world projects.
            </div>
            
            <div className="text-m bold-600 full pd-05 accent-color mt-2">Who It's For</div>
            <div className="text-xxs grey-5 full pd-05" style={{ lineHeight: "1.8rem" }}>
               Our software development training is designed for <b>students starting their journey, beginners with little or no coding experience</b>, and <b>career switchers looking to move into software and technology roles</b>. The programmes are structured to support learners at different stages, with clear progression from fundamentals to practical, real-world skills.
            </div>
            
            <div className="text-m bold-600 full pd-05 accent-color mt-2">Outcomes</div>
            <div className="text-xxs grey-5 full pd-05" style={{ lineHeight: "1.8rem" }}>
               Learners gain practical, hands-on experience building <b>websites, applications, and games</b>, applying what they learn to real projects that reflect real-world development workflows. This approach ensures skills are not just theoretical, but directly transferable to academic, personal, or professional use.
            </div>
            
         </div>
      </div>
      <Footer />
   </>)
}
