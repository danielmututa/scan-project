import React from 'react'
import Image from 'next/image'
import scan from '../../public/assets/image-qr-code.png'

const Hero = () => {
  return (
    <div className=' max-sm:px-[20px] max-md:px-[40px]  flex  items-center justify-center h-screen w-screen bg-customSky flex-col'  >
        
      <div className="w-3/12 p-4 rounded-2xl bg-white flex flex-col justify-center max-sm:w-full max-md:w-8/12 max-lg:w-6/12">
      <Image 
      src={scan}
       alt="scan" 
       height={280}
       className='w-full rounded-xl' 
    
        />

         {/* <div className="w-11/12  flex  items-center  justify-center flex-col"> */}
         
      <h4 className='pt-[25px] pb-[18px] text-[22px] font-semibold  flex  items-center  justify-center flex-col ' >Improve your front-end  <span>skills by building projects</span> </h4>
   <p  className='pb-[20px] text-base/[15px] font-mediam flex  items-center  justify-center flex-col'>Scan the QR code to visit Frontend <span>Mentor and take your coding skills to</span>  <span>the next level</span> </p>
      {/* </div> */}

         </div>



        </div>
  )
}

export default Hero 