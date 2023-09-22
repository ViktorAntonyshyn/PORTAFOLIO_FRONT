import Accordion from 'react-bootstrap/Accordion';
import './About.css'
import Languages from './Languages';
import tools from '/public/tools.png'

function About() {
  return (
    <div className='container-accordeon'>
      <Accordion defaultActiveKey="">
        <Accordion.Item eventKey="0">
          <Accordion.Header> <span className='name-accordeons'>Who am I</span> </Accordion.Header>
          <Accordion.Body>
            <div className='info-block'>
              <p> • I am Viktor Antonyshyn. I am Ukrainian. I am a refugee from Ukrainian war. My home in Ukraine was
                completely destroyed.  </p>
              <p> • I'm starting my life all over again. </p>
              <p> • I have the disability certificate 35%.</p>
              <p> • I like to code and work with a computer and many Applications.
              </p>
              <p> • Im looking a job like junior full-stack web developer other work related to programming
                Geographic Information Systems (GIS).</p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><span className='name-accordeons'>What I can to do</span></Accordion.Header>
          <Accordion.Body>
            <div className='info-block'>
              <p> • I have 20 years of scientific and technical experience in the oil and gas industry.
                I participated in more than forty scientific researches, and was engaged in the creation
                of various images, maps and presentations.</p>
              <p> • I can work with cartography web interface (ESRI ArcMap): in this I can be useful to
                society and get real pleasure from work that I do.</p>
              <p> • Also I can design/creation/editing content  by Adobe Photoshop, Corel Draw, Adobe Illustrator.</p>
            </div>

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header><span className='name-accordeons'>Education</span></Accordion.Header>
          <Accordion.Body>
            <div className='info-block'>
              <p className='institution'>Factoría F5 Training, Barcelona</p>
              <span className='year'>2023</span>
              <p>Bootcamp  Full-Stack web developer(850h)</p>
              <hr />
              <p className='institution'>"KROK" University, Kyiv, Ukraine</p>
              <span className='year'>2016 – 2018</span>
              <p>Master’s Degree, Program Subject Area "Law". Educational Program "Intellectual Property".</p>
              <hr />
              <p className='institution'>Ivan Franko Lviv National University</p>
              <span className='year'>1997 – 2003 </span>
              <p>Department of Geology. Master’s Degree in Geology. Geological exploration and surveys.</p>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header><span className='name-accordeons'>Web developing technologies and tools</span></Accordion.Header>
          <Accordion.Body>
            <div>
              <img className='pic-tools' src= {tools} alt="technologies and tools"></img>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header><span className='name-accordeons'>Softwear skills</span></Accordion.Header>
          <Accordion.Body>
            <h6 className='explane-soft'>Experienced user of MS Windows. Easily learn new software programs. 
            I have a lot of experience working with computer graphics and equipment for it (scanners, printers, plotters, etc.).</h6>
            <div className='container-soft'>
              <div className='office'>
                <h6 className='name-soft-groups'>MS Office</h6>
                <p>Word</p>
                <p>Excel</p>
                <p>PowerPoin</p>
                <p>ets.</p>
              </div>
              <div className='graphics'>
                <h6 className='name-soft-groups'>Graphics</h6>
                <p>Adobe Photoshop</p>
                <p>CorelDraw</p>
                <p>Adobe Illustrator</p>
                <p>ets.</p>
              </div>
              <div className='gis'>
                <h6 className='name-soft-groups'>GIS</h6>
                <p>ESRI ArcMap 10x</p>
                <p>SAS Planet</p>
                <p>OSM</p>
                <p>ets.</p>
              </div>
              <div className='utilites'>
                <h6 className='name-soft-groups'>Utilites</h6>
                <p>Total commander</p>
                <p>Paragon Partition Manager</p>
                <p>Paragon Hard Disk Manager</p>
                <p>ets.</p>
              </div>
            </div>

          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header><span className='name-accordeons'>Languages</span></Accordion.Header>
          <Accordion.Body>
            <div className='lang-acoord'>
              <Languages />
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header><span className='name-accordeons'>Hobby</span></Accordion.Header>
          <Accordion.Body>
            <div className='info-block-hobby'>
              <p>Software, hardware, computer graphics, music, painting.</p>
            </div>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </div>
  );
}

export default About;