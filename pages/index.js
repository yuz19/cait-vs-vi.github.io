import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React ,{ useEffect,useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [Visible, setVisible] = useState(null);
  const [content, setContent] = useState(null);
  const [skinCait,setSkinCait]=useState('cait3')

  const handleViButtonClick=(event)=>{
    event.stopPropagation(); 
    setVisible('vi')   
 
  }
  const handleCaitButtonClick = (event) => {
    event.stopPropagation(); // Empêche la propagation du clic à l'élément parent (cait-box)
    setVisible('cait');
  };
  
  const handleReturn = () => {   
    setVisible(Visible != null ? null : Visible);
  };

    const chooseSkin = (event) => {
    
      const element = event.currentTarget; // Get the element that triggered the event
      const targetClassName = element.classList.item(2); // Assuming you want to compare the first class name of the element
      console.log(targetClassName)
      const infoSkins = document.querySelectorAll('.skin');

      infoSkins.forEach((infoSkin) => {
 
        const classNames = infoSkin.classList;
        console.log(infoSkins)
        if (classNames.length > 1 && classNames.contains(targetClassName)) {
          // The event target has a class name that matches one of the class names of .cait-slider
          classNames.add('active')
          classNames.remove('disable')

          console.log('Class name matched:', targetClassName);
        }else{
          classNames.add('disable')
          classNames.remove('active')
        }
      });
    };
    
  
  useEffect(() => {
    console.log('test')
  if(Visible==='vi'){
     

    setContent(
      <div className='vi-slider'>
          <div className={`vi skin vi2  disable`} onClick={chooseSkin} >
              <img src='./skins-vi/VI2.jpg' alt=''/> 
          </div>
 
          <div className={`vi skin vi3 active `} onClick={chooseSkin} >
              <img src='./skins-vi/VI3.jfif' alt=''/> 
          </div>
      </div>
    )
  } else if(Visible==='cait') {
     
    setContent(
      <div className='cait-slider'>
          <div className={`cait  skin cait2  disable`} onClick={chooseSkin} >
              <img src='./skins-cait/CAIT2.jpg' alt=''/> 
          </div>
 
          <div className={`cait skin cait3 active `} onClick={chooseSkin} >
              <img src='./skins-cait/CAIT3.jpg' alt=''/> 
          </div>
      </div>
    )
  }else{
    setContent(null)
  }
 
  },[Visible])
  return (

    <div className={`display${Visible === 'vi' ? ' d-vi' : ''}`}>
      <div className='content'>{content}</div>
      <div className={`Home${Visible === 'vi' ? ' H-vi' : ''}${Visible === 'cait' ? ' H-cait' : ''}`} onClick={handleReturn} >

 
          <div className='cait-box' >
            <div className='cait-btn' onClick={handleCaitButtonClick}>
              <p>CAITLYNE</p>
            </div>
          </div>

          <div className='stick-mid'>
            <p>CHOOSE </p>
            <p className='Inter'> ?</p>
          </div>

          <div className='vi-box'>
            <div className='vi-btn' onClick={handleViButtonClick}>
              <p>VI</p>
            </div>
          </div>

      </div>
    </div>
  ) 
}
