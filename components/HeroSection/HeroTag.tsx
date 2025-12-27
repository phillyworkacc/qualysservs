'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart2, DollarSign, MessageCircle, Monitor, Shield, TrendingUp, Zap } from 'lucide-react';

const tagSize = 15
const tagStrokeWidth = 3
const tags = [
   <>
      <Monitor size={tagSize} color="#5C6AC4" strokeWidth={tagStrokeWidth} /> 
      Custom-Built Websites
   </>,
   <>
      <Zap size={tagSize} color="#4CAF50" strokeWidth={tagStrokeWidth} /> 
      Fast & Responsive Design
   </>,
   <>
      <TrendingUp size={tagSize} color="#FFB400" strokeWidth={tagStrokeWidth} /> 
      SEO-Optimized for Growth
   </>,
   <>
      <BarChart2 size={tagSize} color="#00BFA6" strokeWidth={tagStrokeWidth} /> 
      Real-Time Analytics Dashboard
   </>,
   <>
      <Shield size={tagSize} color="#9C27B0" strokeWidth={tagStrokeWidth} /> 
      Secure & Reliable Hosting
   </>,
   <>
      <MessageCircle size={tagSize} color="#FF69B4" strokeWidth={tagStrokeWidth} /> 
      Dedicated Support Team
   </>,
   <>
      <DollarSign size={tagSize} color="#FF6B6B" strokeWidth={tagStrokeWidth} /> 
      Affordable Monthly Plans
   </>,
];

const tagsColors = [
   "#5C6AC4",
   "#4CAF50",
   "#FFB400",
   "#00BFA6",
   "#9C27B0",
   "#FF69B4",
   "#FF6B6B"
]

export default function HeroTag() {
   const [index, setIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setIndex(prev => (prev + 1) % tags.length);
      }, 2000);
      return () => clearInterval(interval);
   }, []);

   return (
      <div className="tag fit mb-2 pdx-1" style={{ background: "white" }}>
         <AnimatePresence mode="wait">
            <motion.div
               key={tags.indexOf(tags[index])}
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: -20, opacity: 0 }}
               transition={{ duration: 0.3 }}
            >
               <div className='tag-msg' style={{ whiteSpace: "nowrap" }}>{tags[index]}</div>
            </motion.div>
         </AnimatePresence>
      </div>
   );
}