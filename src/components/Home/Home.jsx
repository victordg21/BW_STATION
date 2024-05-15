import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [bgVideo, setBgVideo] = useState("./src/assets/Projetos/Home_Wide.mp4");
  const [scrolled, setScrolled] = useState(false);

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

    const handleScroll = () => {
      if (window.scrollY > 0 && !scrolled) {
        setScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="background-container">
        <video className="bgVideo" autoPlay loop muted playsInline>
            <source className='video' src={bgVideo} type="video/mp4" />
        </video>

        <div className={`centered-text ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo-container">
                <img className="logo" src="./src/assets/Projetos/logo.png" alt="logo" />
            </div>
            <div className="text-container">
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
