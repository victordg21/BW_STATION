import React, { useState, useRef } from 'react';
import "./Section2.css"

function Section2() {
  const [LoopVideo] = useState("/Vídeo-setores.mp4");

  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const handlePausePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  
  const cardData = [
    {
      id: 1,
      title: 'Education',
      text: 'Specialize in the most modern tools with experienced instructors in the national and international markets.',
      details: 'Our instructors will empower you and your team to compete for the best positions in the job market. We offer courses ranging from basic knowledge to the most advanced, aimed at all areas of civil engineering, architecture, and interior design.',
    },
    {
      id: 2,
      title: 'Tech',
      text: 'Imagine, create, and optimize your projects together with our developers specialized in various fields.',
      details: "We optimize your company's workflow through the creation of custom applications and plugins. Additionally, we have a specialized team for web development and design, corporate and promotional video editing, character creation, and game development.",
    },
    {
      id: 3,
      title: 'Archiviz',
      text: 'Visualize and personalize your projects with our realistic rendering and virtual tour services.',
      details: 'Utilizing the latest technologies on the market, we develop realistic renderings and virtual tours for your projects. We provide your clients with an immersive experience rich in details, allowing for the customization of environments through virtual reality tools.',
    },
    {
      id: 4,
      title: 'Project',
      text: 'With BIM and AWP technologies, develop, coordinate, and manage your construction projects with our team of modelers.',
      details: 'Our team of modelers is prepared to meet the diverse demands of your construction company. With over a decade of experience, we will bring the necessary security to your company to execute your projects, optimizing your construction processes.',
    },
  ];

  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

    return (
      <>
        <div className="ContainerVideoServices">
          <div className='SectionContainerVideoServices'>
            <div className="video-container">
              <video ref={videoRef} className="video-element" autoPlay loop muted playsInline>
                <source src={LoopVideo} type="video/mp4" />
              </video>
              <button className="pause-button" onClick={handlePausePlay}>
                {isPlaying ? <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-pause-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"/>
                              </svg> :
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                              </svg>
                              }
              </button>
            </div>
            

            <div className="cards-container">
              {cardData.map((card, index) => (
                <div
                  key={card.id}
                  className={`cards ${flippedIndex === index ? 'flip' : ''}`}
                >
                  <div className="card-face card-front">
                    <div className='logo-title'>
                      <img className='black-logo' src="/logopreta.png" alt="Logo"/>
                      <h3 className="card-title">{card.title}</h3>
                    </div>
                    <p className="card-text">{card.text}</p>
                    <button
                      className="card-button"
                      onClick={() => handleFlip(index)}
                    >
                      Saiba Mais
                    </button>
                  </div>
                  <div className="card-face card-back">
                    <p>{card.details}</p>
                    <button
                      className="card-button"
                      onClick={() => handleFlip(index)}
                    >
                      Voltar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Section2;