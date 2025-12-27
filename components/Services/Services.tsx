import "./Services.css"
import { Briefcase, ChartNoAxesColumn, Code, ListCheck } from "lucide-react"
import { CSSProperties } from "react"
import { useRouter } from "next/navigation"
import Card from "../Card/Card"


export default function Services() {
   const services = [
      {
         title: "Data Centre Consulting",
         description: "Our expertise in data center consulting extends beyond conventional norms.",
         icon: Briefcase,
         href: "/data-centre-consulting"
      },
      {
         title: "IT Services",
         description: "At Qualys Services Ltd, our comprehensive suite of IT services embodies versatility and proficiency.",
         icon: ListCheck,
         href: "/it-services"
      },
      {
         title: "Software Development",
         description: "Embracing the artistry of innovation, our software development division epitomizes creativity and functionality.",
         icon: Code,
         href: "/software-dev"
      },
      {
         title: "Training",
         description: "Empowering your workforce with cutting-edge skills is pivotal for sustained growth.",
         icon: ChartNoAxesColumn,
         href: "/training"
      },
   ]

   const cardStyles: CSSProperties = {
      padding: "20px", width: "100%",
      maxWidth: "500px", cursor: "pointer"
   }

   const router = useRouter();

   return (
      <section className='services' id='services'>
         <div className="page-container">
            <div className="text-xl full bold-700 accent-color text-center pd-1">Our Services</div>
            <div className="text-xxs full grey-5 text-center">With a profound focus on four core pillars</div>
            <div className="box full pd-2 dfb justify-center wrap gap-10">
               {services.map((service, index) => (
                  <Card key={index} styles={cardStyles} onClick={() => router.push(service.href)}>
                     <div className="box full dfb align-center gap-10">
                        <div className="service-icon">
                           <service.icon size={15} />
                        </div>
                        <div className="text-xs accent-color bold-600 fit whitespace-nowrap dfb align-center gap-5">
                           {service.title}
                        </div>
                     </div>
                     <div className="text-xxs grey-5 pd-05">{service.description}</div>
                  </Card>
               ))}
            </div>
         </div>
      </section>
   )
}
