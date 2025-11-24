import { useState, useRef } from 'react';
import Personal from './components/personal';
import Education from './components/education';
import Skill from './components/skill';
import Project from './components/project';
import Work from './components/work';
import Volunteer from './components/volunteer';
import View from './components/view';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';

function App(props) {
  const [personal, setPersonal] = useState([]);
  const [education, setEducation] = useState([]);
  const [skill, setSkill] = useState([]);
  const [project, setProject] = useState([]);
  const [work, setWork] = useState([]);
  const [volunteer, setVolunteer] = useState([]);
  const resumeFormat = useRef();

  const printResume = useReactToPrint({
    content: () => resumeFormat.current,
    documentTitle: 'My Resume',
    pageStyle: `
      @page { size: A4; margin: 20mm; }
      body { -webkit-print-color-adjust: exact; }
    `,
  });

  const addPersonal = (newPersonal) => {
    setPersonal((prev) => [...prev, newPersonal]);
  };

  const addEducation = (newEducation) => {
    setEducation((prev) => [...prev, newEducation]);
  };

  const addSkill = (newSkill) => {
    setSkill((prev) => [...prev, newSkill]);
  };

  const addProject = (newProject) => {
    setProject((prev) => [...prev, newProject]);
  };

  const addWork = (newWork) => {
    setWork((prev) => [...prev, newWork]);
  };

  const addVolunteer = (newVolunteer) => {
    setVolunteer((prev) => [...prev, newVolunteer]);
  };

  return (
    <div>
      <h1>Resume Builder App</h1>
      <Personal addPersonal={addPersonal} />
      <Education addEducation={addEducation} />
      <Skill addSkill={addSkill} />
      <Project addProject={addProject} />
      <Work addWork={addWork} />
      <Volunteer addVolunteer={addVolunteer} />
      <div ref={printResume}>
        <View
          personal={personal}
          education={education}
          skills={skill}
          projects={project}
          work={work}
          volunteer={volunteer}
        />
        <button type="submit">Generate Resume to PDF</button>
      </div>
    </div>
  );
}

export default App;