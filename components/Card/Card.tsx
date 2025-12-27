'use client'
import "./Card.css"
import { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";

type CardProps = {
   children: ReactNode;
   styles?: CSSProperties;
   className?: string;
   cursor?: boolean;
   onClick?: Function;
}

export default function Card({ children, className, cursor, onClick, styles }: CardProps) {
   return (
      <motion.div 
         className={`card ${className}`}
         style={styles}
         onClick={() => onClick ? onClick() : {}}
         initial={{ x: 0, y: 50, opacity: 0 }}
         animate={{ x: 0, y: 0, opacity: 1 }}
         transition={{ duration: 0.5, ease: [.17,.27,.74,.84] }}
      >{children}</motion.div>
   )
}
