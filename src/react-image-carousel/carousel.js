import React, { useState,useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from'../images/mobile-image-hero-1.jpg';
import img2 from '../images/mobile-image-hero-2.jpg';
import img3 from  '../images/mobile-image-hero-3.jpg'; 
import Dimg1 from '../images/desktop-image-hero-1.jpg';
import Dimg2 from '../images/desktop-image-hero-2.jpg';
import Dimg3 from '../images/desktop-image-hero-3.jpg';
 
       


 
 const Carousel = ({currentIndex,handleUpdateState,handleMenu}) => {
    
   
    
    const [isDesktop,setDesktop] = useState(window.innerWidth >= 1440 ? true : false)

    const updateMedia = () => {
        setDesktop(window.innerWidth >= 1440);
    };

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    });
       
        const images = [
            img1,img2,img3
           ]

    const desktopImages = [ 
        Dimg1,Dimg2,Dimg3
    ]     

    const nextSlide = () => {
        handleUpdateState((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
       handleUpdateState((currentIndex - 1 + images.length) % images.length);

      
    };

    return (
        <div className="relative h-96 desktop:h-full " >
            
            <AnimatePresence initial={false}>
                <motion.div  
                    key={currentIndex}
                    style = {{
                        backgroundImage: isDesktop 
                        ? `url(${desktopImages[currentIndex]})`
                        :`url(${images[currentIndex]})`  , 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width:"100%",
                    height:"100%",
                    }}
                    initial={{ x:360, opacity: 1 }}
                    animate={{ x:0, opacity: 1, }}
                    
                />
               
            </AnimatePresence>
            <div className='cursor-default absolute top-12 text-2xl desktop:text-3xl font-thin text-white left-1/2 desktop:left-20 '>room</div>
            <div className='absolute bottom-0 right-14 desktop:right-[-79px]'  onClick={prevSlide}><LeftSlider/></div>
            <div  className='absolute bottom-0 right-[-10px] desktop:right-[-153px] ' onClick={nextSlide}><RightSlider/></div>
            <MenuIconOpen />
            
        </div>
    );

    function LeftSlider(){
        return(
            <div className=' bg-black  h-16 w-20  ' >
                <button className='transition duration-150 ease-in-out delay-100 hover:bg-darkGray w-full h-full' ><svg className='m-auto' width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fillRule="evenodd"/></svg></button>
            </div>
        )
    }
    
     function RightSlider(){
        return(
            <div className='   bg-black  h-16 w-20  '>
                <button className='transition duration-150 ease-in-out delay-100  hover:bg-darkGray  w-full h-full  ' ><svg className='m-auto' width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fillRule="evenodd"/></svg></button> 
            </div>
    
        )
    }

    function MenuIconOpen(){
        return(
            <button className=' absolute top-14 left-6 ml-6 desktop:hidden ' onClick={handleMenu}  ><svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fillRule="evenodd"/></svg></button>
        )
    }
    
    
    
};

export default Carousel;


        