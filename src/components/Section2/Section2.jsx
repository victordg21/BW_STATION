import React, { useState, useRef } from 'react';
import "./Section2.css"

function Section2() {
  const [LoopVideo] = useState("./src/assets/Projetos/Seção 02/Vídeo-setores.mp4");

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
      text: 'Especialize-se nas ferramentas mais modernas com instrutores experientes no mercado nacional e internacional.',
      details: 'Nossos instrutores capacitarão você e sua equipe a trabalhar para disputar as melhores vagas no mercado de trabalho. Temos cursos, desde o conhecimento básico até o mais avançado voltados para todas as áreas de atuação de profissionais da engenharia civil, arquitetura e design de interiores.',
    },
    {
      id: 2,
      title: 'Tech',
      text: 'Imagine, crie e otimize seus projetos juntamente com nossos desenvolvedores especializados nas mais diversas áreas.',
      details: 'Otimizamos o fluxo de trabalho da sua empresa através da criação de aplicativos e plugins personalizados. Além disso, temos uma equipe especializada em desenvolvimento e design para web, edição de vídeos corporativos e promocionais, criação de personagens e games.',
    },
    {
      id: 3,
      title: 'Archiviz',
      text: 'Visualize e personalize seus projetos com nossos serviços de renderização realista e passeio virtual.',
      details: 'Contando com as mais atuais tecnologias do mercado, desenvolvemos renderizações realistas e passeios virtuais para os seus empreendimentos. Proporcionaremos aos seus clientes uma experiência imersiva rica em detalhes, permitindo a personalização de ambientes através de ferramentas de realidade virtual.',
    },
    {
      id: 4,
      title: 'Project',
      text: 'Com as tecnologias BIM e AWP, desenvolva, coordene e gerencie projetos da sua construtora com a nossa equipe de modeladores.',
      details: 'Nossa equipe de modeladores está preparada para atender as diversas demandas da sua construtora. Contando com mais de uma década de experiência, traremos para a sua empresa a segurança necessária para executar os seus empreendimentos, otimizando os seus processos construtivos.',
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
                      <img className='black-logo' src="./src/assets/Projetos/logopreta.png" alt="Logo"/>
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