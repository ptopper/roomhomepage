import {React,useState} from "react";
import rightArrow from '../images/icon-arrow.svg'

export default function Text1({currentIndex}){



    const h1 = ["Discover innovative ways to decorate","We are available all across the globe","Manufactured with the best materials"];

const p = ["We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
            "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities thoughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
            "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistant as possible. With three decades of experience in this industry, we understand what customers want for their home and office."

]


    return(
        <div className=" desktop:relative desktop:mt-6 desktop:w-[410px] desktop:m-auto desktop:h-[87%]  h-full flex flex-col justify-center items-center     " >
        <h1 className=" tracking-tighter text-[40px] text-left font-semibold desktop:w-[315px]  w-[315px] h-auto leading-10 top-14 pt-[50px] desktop:mr-24 ">{h1[currentIndex]}</h1>
        <p className=" tracking-tight text-gray-500 text-left w-[315px] desktop:w-[415px] leading-[22px] mt-4 h-auto">{p[currentIndex]}</p>
        <button className=" mt-10 mb-10"><h2 className='mobile:mr-14 desktop:mr-[156px] text-left  uppercase font-thin tracking-[15px] text-sm desktop:absolute desktop:left-0 '>shop now<img src={rightArrow} alt='arrow' className='inline ml-6'/></h2></button>
        </div>
    )
}




