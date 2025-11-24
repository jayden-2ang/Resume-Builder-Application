import React, { useState, useRef } from 'react';
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
    contentRef: resumeFormat,
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

  const deletePersonal = (personalToDelete) => {
    setPersonal((prev) => prev.filter((_, index) => index != personalToDelete));
  };

  const deleteEducation = (educationToDelete) => {
    setEducation((prev) => prev.filter((_, index) => index != educationToDelete));
  };

  const deleteSkill = (skillToDelete) => {
    setSkill((prev) => prev.filter((_, index) => index != skillToDelete));
  };

  const deleteProject = (projectToDelete) => {
    setProject((prev) => prev.filter((_, index) => index != projectToDelete));
  };

  const deleteWork = (workToDelete) => {
    setWork((prev) => prev.filter((_, index) => index != workToDelete));
  };

  const deleteVolunteer = (volunteerToDelete) => {
    setVolunteer((prev) => prev.filter((_, index) => index != volunteerToDelete));
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

      <View
        ref={resumeFormat}
        personal={personal}
        deletePersonal={deletePersonal}
        education={education}
        deleteEducation={deleteEducation}
        skills={skill}
        deleteSkill={deleteSkill}
        projects={project}
        deleteProject={deleteProject}
        work={work}
        deleteWork={deleteWork}
        volunteer={volunteer}
        deleteVolunteer={deleteVolunteer}
      />
      
      <button onClick={printResume}>Generate Resume to PDF</button>
    </div>
  );
}

export default App;