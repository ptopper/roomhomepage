import {React,useState} from 'react';
import  {Navbar}  from './navbar/navbar';

import  Text1  from './text.js/text1';
import {Text2} from './text2/text2';
import './index.css';
import { Image } from './image/image';
import blackChairs from './images/image-about-dark.jpg';
import whiteChair from './images/image-about-light.jpg';
import Carousel from './react-image-carousel/carousel';






function App() {
  const [isHamburgerClosed, setHamburgerClosed] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleUpdateState= (newIndex) => {
    setCurrentIndex(newIndex)
  }





  
  function toggleHamburger() {
    isHamburgerClosed ? document.getElementsByTagName("nav")[0].style.height = "0px" : document.getElementsByTagName("nav")[0].style.height = "108px";
    setHamburgerClosed(!isHamburgerClosed);
    
  }

  return (
    <main className='font-spartan font-semibold text-base  w-dvw box-border m-0 desktop:h-dvh overflow-hidden'>
        <div className='desktop:grid  grid-cols-upperCols grid-rows-1 gap-0 h-2/3  overflow-hidden '>
      <div className="col-span-1 row-span-1   ">
      <Navbar menuType={isHamburgerClosed} handleMenu={toggleHamburger} />
      <Carousel menuType={isHamburgerClosed} handleMenu={toggleHamburger} currentIndex={currentIndex} handleUpdateState={handleUpdateState}  />                          
      </div>
        <div className="col-start-2 row-span-1 " >
      <Text1 currentIndex={currentIndex} handleUpdateState={handleUpdateState}/>
      </div>
      </div>
      <div className="desktop:grid grid-cols-lowerCols grid-rows-1 gap-0 desktop:h-[33.3vh] ">
      <div className="row-start-1 row-span-1 h-[300px] desktop:h-full  ">
      <Image img={blackChairs}></Image>
      </div>
      <div className="row-start-1 row-span-1  ">
      <Text2/>
     </div>
      <div className="row-start-1 row-span-1  h-[300px] desktop:h-full ">
      <Image img={whiteChair} disc></Image>
      </div>
      </div>
    </main>
  );
}

export default App;



