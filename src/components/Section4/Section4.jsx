import React from 'react';
import './Section4.css';

function Section4() {
    return (
      <div className='ContainerSection4'>

        <div className="section4-container">

            <div className="headerSection4">

                <h2>Proactive QA/QC</h2>
                <p>
                  We invest the time upfront to 
                  avoid errors before they occur.
                </p>
            </div>

            <div className="cards-containerSection4">

                <div className="cardSection4">
                    <img src='/05_1.png' alt="Dedicated BIM Quality Manager" className="iconSection4" />
                    <p>Dedicated BIM Quality Manager</p>
                </div>

                <div className="cardSection4">
                    <img src='/05_2.png' alt="Extensive planning process" className="iconSection4"/>
                    <p>Extensive planning process</p>
                </div>

                <div className="cardSection4">
                    <img src='/05_3.png' alt="2D & 3D QA/QC Deliverables" className="iconSection4"/>
                    <p>2D & 3D QA/QC Deliverables</p>
                </div>

                <div className="cardSection4">
                    <img src='/05_4.png' alt="Unified QA/QC" className="iconSection4"/>
                    <p>Unified QA/QC</p>
                </div>

                <div className="cardSection4">
                    <img src='/05_5.png' alt="Mock-up submittal" className="iconSection4"/>
                    <p>Mock-up submittal</p>
                </div>

                <div className="cardSection4">
                    <img src='/05_6.png' alt="Internal QC review" className="iconSection4"/>
                    <p>Internal QC review</p>
                </div>

            </div>
        </div>

      </div>
    );
}

export default Section4;
