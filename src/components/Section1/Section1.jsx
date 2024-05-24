import React, { useState, useEffect } from 'react';
import './Section1.css';

const imageData = [
  { id: 1, text: 'Plugins', fileName: 'Plugin.png' },
  { id: 2, text: 'Development for Revit', fileName: 'Template.png' },
  { id: 3, text: 'Game Development', fileName: 'Games.png' },
  { id: 4, text: 'Character Modeling and Animation', fileName: 'Animation.png' },
  { id: 5, text: 'Websites Development', fileName: 'Websites.png' },
  { id: 6, text: 'Video Edition', fileName: 'Video edition.png' },
  { id: 7, text: 'Online Courses', fileName: 'Courses.png' },
  { id: 8, text: 'BIM and AWP Consulting', fileName: 'Bim and Awp.png' },
  { id: 9, text: 'Custom Team Training', fileName: 'Team training.png' },
  { id: 10, text: 'BIM Modeling', fileName: 'Modeling.png' },
  { id: 11, text: 'Coordination', fileName: 'Drawing.png' },
  { id: 12, text: 'Cloud Points', fileName: 'Point Cloud.png' },
  { id: 13, text: 'Shop Drawings and Constructive Detailings', fileName: 'Drawing.png' },
  { id: 14, text: 'Realistic Renderings', fileName: 'Rendering.png' },
  { id: 15, text: 'Virtual Tours', fileName: 'Virtual tour.png' },
  { id: 16, text: 'Promotional Cinematics', fileName: 'Cinematics.png' },
];

function Section1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const loadedData = await Promise.all(imageData.map(async item => {
        const image = await import(`/${item.fileName}`);
        return { ...item, image: image.default };
      }));
      setData(loadedData);
    };

    loadData();
  }, []);


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