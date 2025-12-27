import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
   return (
      <>
         <Header />
         <div className="box full dfb align-center justify-center pd-4">
            <div className="page-container">
               <div className="text-xxl bold-600 full pd-1 accent-color">Page Not Found</div>
               <div className="text-xxs grey-5 full pd-05" style={{ lineHeight: "1.8rem" }}>
                  Go back to the home page of <b className="accent-color">Qualys Services Ltd</b>
               </div>
               <div className="box full pd-1">
                  <Link href='/' className='text-s fit'>
                     <button className="xxs pd-1 pdx-15 whitespace-nowrap">Home Page</button>
                  </Link>
               </div>
            </div>
         </div>
         {/* <Footer /> */}
      </>
   )
}
