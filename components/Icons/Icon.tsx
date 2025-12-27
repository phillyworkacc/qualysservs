"use client"
import "./Icon.css"
import DefaultWebsiteIcon from "@/public/website-default.png"

type IconProps = {
   size: number;
}

type CustomIconProps = {
   size: number;
   url: string;
   round?: boolean;
}

export function QualysLogo ({ size }: IconProps) {
   return (
      <div className='icon' style={{
         width: `${size}px`, height: `${size}px`
      }}>
         <img src={"/logo.png"} alt="logo" />
      </div>
   )
}

export function CustomIcon ({ size, url, round }: CustomIconProps) {
   return <div className={`icon ${round ? 'round' : ''}`} style={{ width: `${size}px`, height: `${size}px` }}>
      <img src={url} alt="icon" width={size} height={size} />
   </div>
}

export function CustomUserIcon ({ size, url, round }: CustomIconProps) {
   return <div className={`icon ${round ? 'round' : ''}`} style={{ width: `${size}px`, height: `${size}px` }}>
      <img src={url} alt="icon" width={size} height={size} />
   </div>
}
