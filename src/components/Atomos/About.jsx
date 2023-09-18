import Accordion from 'react-bootstrap/Accordion';
import './About.css'

function About() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header> <span className='name-accordeons'>Who am I</span> </Accordion.Header>
        <Accordion.Body>
          <p>I am Viktor Antonyshyn. I am Ukrainian. I am a refugee from Ukrainian war. My home in Ukraine was 
          completely destroyed.  </p>
          <p>I'm starting my life all over again. </p>
          <p>I have the
          disability certificate 35%.</p>
          <p>I like to code and work with a computer and many Applications.
          </p>
          <p>Im looking a job like junior full-stack web developer other work related to programming
          Geographic Information Systems (GIS).</p>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><span className='name-accordeons'>What I can to do</span></Accordion.Header>
        <Accordion.Body>
          <p> • I have 20 years of scientific and technical experience in the oil and gas industry.
            I participated in more than forty scientific researches, and was engaged in the creation
            of various images, maps and presentations.</p>
            <p></p>
          <p> • I can work with cartography web interface (ESRI ArcMap): in this I can be useful to
            society and get real pleasure from work that I do.</p>
          <p> • Also I can design/creation/editing content  by Adobe Photoshop, Corel Draw, Adobe Illustrator.</p>


        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><span className='name-accordeons'>Education</span></Accordion.Header>
        <Accordion.Body>
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
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><span className='name-accordeons'>Hobby</span></Accordion.Header>
        <Accordion.Body>          
          <p>Software, hardware, computer graphics, music, painting.</p>
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>

  );
}

export default About;