import React from 'react';
import './Section3.css';

function Section3() {
    return (

      <div className='Container3'>

        <div className='section3Container'>

          <h3>Who we are?</h3>
          
          <div className="section3">
                <img className='card' src="/BrazilianEngineers.png" alt="" />
                <img className='card' src="/BimModeling.png" alt="" />
                <img className='card' src="/DevelopedTeam.png" alt="" />
                <img className='card' src="/Construction.png" alt="" /> 
          </div>

          <h3>Adaptable WorkFlow</h3>

          <div className='imagesSection3'>

            <div className='imagesCards'>
              <img src="/04_1-fast-email.png" alt="fastEmail" /> 
            </div>

            <div className='imagesCards'>
              <img src="/04_2-kick-off.png" alt="kickOff" /> 
            </div>

            <div className='imagesCards'>
              <img src="/04_3-phone-calls.png" alt="phoneCalls" /> 
            </div>

            <div className='imagesCards'>
              <img src="/04_4-cloud-collaboration.png" alt="cloudCollaboration" /> 
            </div>

            <div className='imagesCards'>
              <img src="/04_5-detailed-rfi.png" alt="detailedRfi" /> 
            </div>

            <div className='imagesCards'>
              <img src="/04_6-teams-chats.png" alt="temasChats" /> 
            </div>

          </div>


        </div>

      </div>
    );
}

export default Section3;
