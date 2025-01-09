import React,{useState} from 'react';


export function Navbar(props) {

  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseOver = (index) => {
    
    setActiveIndex(index);
  };

  const handleMouseOut = () => {
    setActiveIndex(null);
  };


  return (
    <nav className=' bg-white z-10 absolute overflow-hidden duration-200 ease-in transition-height h-[108px] delay-100 w-full flex items-center justify-evenly desktop:bg-transparent desktop:w-96 desktop:m-4 desktop:tracking-[-1px] desktop:text-white desktop:ml-32  '>
      <MenuIconClose handleMenu={props.handleMenu}/>
       
      {['home', 'shop', 'about', 'contact'].map((item, index) => (
        <NavButton key={index} label={item} index={index}  activeIndex={activeIndex}
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut} />))}
    </nav>

  );


function MenuIconClose(props){
  return(
      <button className='desktop:hidden' onClick={props.handleMenu} ><svg  width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#000" fillRule="evenodd" opacity=".201"/></svg></button>
  )
}

function NavButton({ label, index, activeIndex, handleMouseOver, handleMouseOut }) {
  return (
    <button  onMouseOver={()=>handleMouseOver(index)} onMouseOut={handleMouseOut} className='relative desktop:tracking-tighter'>
      <div className={`absolute transition-all duration-700 bottom-0 bg-white h-0.5  ml-1 ${activeIndex === index ? 'w-4/5' : 'w-0'} ` }></div>
      {label}
    </button>)




  }

}




 