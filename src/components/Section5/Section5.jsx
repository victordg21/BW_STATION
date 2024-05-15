import React, { useRef, useEffect, useState } from 'react';
import './Section5.css';

function Section5() {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState("./src/assets/Projetos/Seção 05/Mapa_Wide.mp4");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVideoSrc("./src/assets/Projetos/Seção 05/Mapa_Vertical.mp4");
      } 
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5
    });

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [videoSrc]); // Re-run effect when videoSrc changes

  return (
    <>
      <div className="ContainerSection5">
        <video ref={videoRef} src={videoSrc} muted playsInline></video>
      </div>
    </>
  );
}

export default Section5;
