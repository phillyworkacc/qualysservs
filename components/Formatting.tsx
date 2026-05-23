'use client'
import { useRouter } from "next/navigation";

type CourseFormatsProps = {
   children: React.ReactNode;
   className?: string
   styles?: React.CSSProperties;
   url?: string;
}

export function Heading ({ children, styles, className }: CourseFormatsProps) {
   return (<div className={`text-l full bold-700 ${className}`} style={styles}>{children}</div>)
}

export function SubHeading ({ children, styles, className }: CourseFormatsProps) {
   return (<div className={`text-sm full bold-600 pd-05 mt-1 ${className}`} style={styles}>{children}</div>)
}

export function BodyContent ({ children, styles, className }: CourseFormatsProps) {
   return (<div className={`text-xxs pd-05 full line-height-15 ${className}`} style={styles}>{children}</div>)
}

export function FormContent ({ children, styles, className }: CourseFormatsProps) {
   return (<div className="form-content" style={styles}>{children}</div>)
}

export function BoldColour ({ children, styles, className }: CourseFormatsProps) {
   return (<span className={`text-xxs bold-600 bold-colour ${className}`} style={styles}>{children}</span>)
}

export function BoldColourLink ({ children, styles, url, className }: CourseFormatsProps) {
   const router = useRouter();
   return (<span className={`text-xxs bold-600 bold-colour ${className}`} style={styles} onClick={() => router.push(url!)}>{children}</span>)
}