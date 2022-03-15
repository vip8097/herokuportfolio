import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <>
      <section id='experience'>
        <h5>What Skill I Have</h5>
        <h2>My Experience</h2>

        <div className='container experience__container'>
          <div className='experience__frontend'>
            <h3>Frontend Development</h3>
            <div className='experience__content'>
              <artical className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </artical>

              <artical className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </artical>

              <artical className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </artical>

              <artical className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>JAVASCRIPT</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </artical>

              <artical className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </artical>

              <artical className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>MaterialUI</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </artical>
            </div>
          </div>
          {/* END OF FRONTEND */}

          <div className='experience__backend'>
            <h3>Backend Development</h3>
            <div className='experience__content'>
              <artical className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>MERN Stack</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
               
              </artical>

              <artical className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </artical>

              <artical className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Express(.js)</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </artical>

              <artical className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>React(.js)</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </artical>

              <artical className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Node(.js)</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </artical>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
