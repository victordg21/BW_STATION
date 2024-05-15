import React, { useState, useRef } from 'react';
import "./Section1.css"
import image1 from "../../assets/Projetos/Seção 01/02_1-model-fm.png"
import image2 from "../../assets/Projetos/Seção 01/02_2-bim-consulting.png"
import image3 from "../../assets/Projetos/Seção 01/02_3-clash.png"
import image4 from "../../assets/Projetos/Seção 01/02_4-coordination.png"
import image5 from "../../assets/Projetos/Seção 01/02_5-detailing.png"
import image6 from "../../assets/Projetos/Seção 01/02_6-development.png"
import image7 from "../../assets/Projetos/Seção 01/02_7-drawing.png"
import image8 from "../../assets/Projetos/Seção 01/02_8-point-cloud.png"
import image9 from "../../assets/Projetos/Seção 01/02_9-rendering.png"

function Section1() {

  const data = [
    {
      id: 1,
      text: 'Models for FM',
      image: image1
    },
    {
      id: 2,
      text: 'BIM Consulting & Training',
      image: image2
    },
    {
      id: 3,
      text: 'Clash Detection Reporting & Resolution',
      image: image3
    },
    {
      id: 4,
      text: 'Coordination',
      image: image4
    },
    {
      id: 5,
      text: 'Detailing',
      image: image5
    },
    {
      id: 6,
      text: 'Development',
      image: image6
    },
    {
      id: 7,
      text: 'Shop Drawings',
      image: image7
    },
    {
      id: 8,
      text: 'Point Cloud to BIM(As-builts)',
      image: image8
    },
    {
      id: 9,
      text: 'Renderings',
      image: image9
    },

  ];

    return (
      <>
        <div className="ContainerServices">
          <div className='SectionContainerServices'>
            <h2 className='title'>Our service encompass</h2>
            <h3 className='subtitle'>
              We have the capability to guide your project from initial Schematic Design to thoroughly coordinated Construction Drawings.
            </h3>
            <div className='grid-container'>
              {data.map((card) => (
                <div key={card.id} className='cards-containers'>
                  <img src={card.image} alt="" className='card-image'/>
                  <p className='cards-text'>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Section1