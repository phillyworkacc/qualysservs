'use client'
import CustomSection from "@/components/CustomSection/CustomSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header"
import Hero from "@/components/Hero/Hero"
import GetFreeQuoteForm from "@/forms/BookConsultationForm";
import { UserRound } from "lucide-react";
import type { ServiceList } from "@/types";

import DataCentreConsultingImage from "@/public/data-centre-consulting.png"
import ITServicesImage from "@/public/it-services.png"
import SoftwareDevelopmentImage from "@/public/software-development.png"
import TrainingImage from "@/public/training.png"

import Services from "@/components/Services/Services";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const websiteConfig = {
	minwebBusinessId: "7f6556982c2d43a78eaced9932389d19",
	headerBackgroundColor: "#e6f0ff",
	headerTextColor: "#000000",
	formColors: { background: "#a8bad4", color: "#000000" },
	accentColor: "#26559d",
	heroDescription: "Empowering Your Digital Success with Comprehensive Solutions",
	email: "qualysservs@gmail.com",
	name: "Qualys Services",
	googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2490.452666802299!2d-1.0669501!3d51.376358!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48769e5d7613b793%3A0xa9b85caff1f08c32!2sDads%20Shop%20Ltd!5e0!3m2!1sen!2suk!4v1767960830693!5m2!1sen!2suk",
	address: "23 W End Rd, Mortimer Common, Reading RG7 3TE",
	services: [
		{
			name: "Data Centre Consulting",
			description: "Our expertise in data center consulting extends beyond conventional norms.",
			image: DataCentreConsultingImage,
			href: "/services/data-centre-consulting",
		},
		{
			name: "IT Services",
			description: "At Qualys Services Ltd, our comprehensive suite of IT services embodies versatility and proficiency.",
			image: ITServicesImage,
			href: "/services/it-services",
		},
		{
			name: "Software Development",
			description: "Embracing the artistry of innovation, our software development division epitomizes creativity and functionality.",
			image: SoftwareDevelopmentImage,
			href: "/services/software-development",
		},
		{
			name: "Training",
			description: "Empowering your workforce with cutting-edge skills is pivotal for sustained growth.",
			image: TrainingImage,
			href: "/services/training",
		},
	] as ServiceList,
	servicesDescriptionCopy: "What we do best",
	openingTimes: {
		'Sunday': '9:30am - 7pm',
		'Monday': '9:30am - 7pm',
		'Tuesday': '9:30am - 7pm',
		'Wednesday': '9:30am - 7pm',
		'Thursday': '9:30am - 7pm',
		'Friday': '9:30am - 7pm',
	},
	landingPageImages: [],
	galleryImages: [],
	chatBot: {
		position: "right",
		ctaMessage: "Let us know if you have any questions!",
		ctaMessageTimeout: 10000, // in milliseconds (10 seconds as default)
		inbox: "This text goes straight to my personal phone. I will make sure to get back to you the second I'm free!",
		userInfoLocalStorageId: "mw-agency-moonwave-records-user-info"
	},
	saveFormValues: false
}

export default function HomePage () {
	const router = useRouter();

	return (<>
		<Header />

		<Hero 
			name={`Welcome to ${websiteConfig.name}`} 
			description={websiteConfig.heroDescription} 
			style="version-2" backgroundOpacity={0.5}
			actions={[
				{
					label: "Explore Our Services", buttonStyle: "normal", type: "action",
					action: () => router.push("/services"), buttonSize: "sm"
				},
			]}
			formContent={<GetFreeQuoteForm />}
		/>

		{/* <TrustBar 
			textColor="white" bgColor="accent-color-70"
			trustItems={[
				{ icon: <MapPin />, label: "GLASGOW" },
				{ icon: <Star fill="white" />, label: "5 STAR SERVICE" },
				{ icon: <Clock />, label: "20+ YEARS EXPERIENCE" },
			]}
		/> */}

		<CustomSection 
			textColor="white" bgColor="accent-color-70"
			customSectionConfig={{
				title: "ABOUT US", type: "version-2",
				image: "/assets/about.jpg", align: "left", 
				icon: <UserRound size={40} />
			}}
		>
			<div className="text-sm bold-500 full pd-1">
				At Qualys Services Ltd, our mission is to transcend conventional boundaries within the digital landscape.
			</div>
			<div className="text-sm bold-500 full pd-1 mt-05 line-height-15">
				With an unwavering commitment to innovation and excellence, we stand as pioneers in leveraging technology to revolutionize businesses across diverse sectors. We redefine possibilities in the digital sphere.
			</div>
		</CustomSection>
		
		<CustomSection 
			textColor="black" bgColor="accent-color-10"
			customSectionConfig={{
				title: "Our Services".toUpperCase(),
				titleSize: "l", type: "version-1", align: "left"
			}}
		>
			<div className="text-m pd-1 full text-left mb-2">{websiteConfig.servicesDescriptionCopy}</div>
			<Services
				type="style-1"
				services={websiteConfig.services}
				nameSize="m"
			/>
		</CustomSection>

		<CustomSection 
			textColor="black" bgColor="#fefefe"
			customSectionConfig={{
				title: <>NEED A WEBSITE?<br /> LET US KNOW!</>,
				titleSize: "l", type: "version-1", align: "center"
			}}
		>
			<div className="box full dfb justify-center mt-4">
				<Link href='https://forms.gle/C2zTkoqfG6UHJHAe8' target="_blank">
					<button className="sm pd-15 pdx-3">Build your website</button>
				</Link>
			</div>
		</CustomSection>

		<Footer />
	</>)
}
