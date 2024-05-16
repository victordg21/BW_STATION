import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

function Home() {
  const [bgVideo, setBgVideo] = useState("./src/assets/Projetos/Home_Wide.mp4");
  const logoRef = useRef(null);
  const textContainerRef = useRef(null);
  const centeredTextRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBgVideo("./src/assets/Projetos/Home_Vertical.mp4");
      } else {
        setBgVideo("./src/assets/Projetos/Home_Wide.mp4");
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (logoRef.current && textContainerRef.current) {
      logoRef.current.classList.add('animation');
      textContainerRef.current.classList.add('animation');
      centeredTextRef.current.classList.add('animation');
    }
  }, []);

  return (
    <div className="background-container">
        <video className="bgVideo" autoPlay loop muted playsInline>
            <source className='video' src={bgVideo} type="video/mp4" />
        </video>

        <div ref={centeredTextRef} className="centered-text">
            <div className="logo-container">
                <img ref={logoRef} className="logo" src="./src/assets/Projetos/logo.png" alt="logo" />
            </div>
            <div ref={textContainerRef} className="text-container">
                <div className="text-bw">BW</div>
                <div className="text-station">STATION</div>
            </div>
        </div>
        
        <div className='text-ending'>
          <p className='text-bottom'>A flexible pool of skilled individuals  who can support the expansion of your bussiness in the long run and alleviate immediate burdens.</p>
        </div>
    </div>
  );
}

export default Home;
