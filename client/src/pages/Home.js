import React, { useState, useEffect, useRef } from 'react';
import Personal from '../components/personal';
import Education from '../components/education';
import Skill from '../components/skill';
import Project from '../components/project';
import Work from '../components/work';
import Volunteer from '../components/volunteer';
import View from '../components/view';
import { useReactToPrint } from 'react-to-print';
import {
  getPersonal,
  addPersonal as apiAddPersonal,
  deletePersonal as apiDeletePersonal,

  getEducation,
  addEducation as apiAddEducation,
  deleteEducation as apiDeleteEducation,

  getSkill,
  addSkill as apiAddSkill,
  deleteSkill as apiDeleteSkill,

  getProject,
  addProject as apiAddProject,
  deleteProject as apiDeleteProject,

  getWork,
  addWork as apiAddWork,
  deleteWork as apiDeleteWork,

  getVolunteer,
  addVolunteer as apiAddVolunteer,
  deleteVolunteer as apiDeleteVolunteer,
} from '../services/api';
import '../App.css';

function Home() {
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
    contentRef: resumeFormat,
    pageStyle: `
      @page { size: A4; margin: 20mm; }
      body { -webkit-print-color-adjust: exact; }
    `,
  });

  useEffect(() => {
    getPersonal()
      .then((res) => setPersonal(res.data))
      .catch((error) => console.error(error));

    getEducation()
      .then((res) => setEducation(res.data))
      .catch((error) => console.error(error));

    getSkill()
      .then((res) => setSkill(res.data))
      .catch((error) => console.error(error));

    getProject()
      .then((res) => setProject(res.data))
      .catch((error) => console.error(error));
    
    getWork()
      .then((res) => setWork(res.data))
      .catch((error) => console.error(error));
    
    getVolunteer()
      .then((res) => setVolunteer(res.data))
      .catch((error) => console.error(error));
  }, []);

  const addPersonal = (newPersonal) => {
    apiAddPersonal(newPersonal)
      .then((res) => setPersonal((prev) => [...prev, res.data]))
      .catch((error) => console.error(error));
  };

  const addEducation = (newEducation) => {
    apiAddEducation(newEducation)
      .then((res) => setEducation((prev) => [...prev, res.data]))
      .catch((error) => console.error(error));
  };

  const addSkill = (newSkill) => {
    apiAddSkill(newSkill)
        .then((res) => setSkill((prev) => [...prev, res.data]))
        .catch((error) => console.error(error));
  };

  const addProject = (newProject) => {
    apiAddProject(newProject)
        .then((res) => setProject((prev) => [...prev, res.data]))
        .catch((error) => console.error(error));
  };

  const addWork = (newWork) => {
    apiAddWork(newWork)
        .then((res) => setWork((prev) => [...prev, res.data]))
        .catch((error) => console.error(error));
  };

  const addVolunteer = (newVolunteer) => {
    apiAddVolunteer(newVolunteer)
        .then((res) => setVolunteer((prev) => [...prev, res.data]))
        .catch((error) => console.error(error));
  };

  const deletePersonal = (id) => {
    apiDeletePersonal(id)
      .then(() => setPersonal((prev) => prev.filter((e) => e._id !== id)))
      .catch((error) => console.error(error));
  };

  const deleteEducation = (id) => {
    apiDeleteEducation(id)
      .then(() => setEducation((prev) => prev.filter((e) => e._id !== id)))
      .catch((error) => console.error(error));
  };

  const deleteSkill = (id) => {
    apiDeleteSkill(id)
      .then(() => setSkill((prev) => prev.filter((e) => e._id !== id)))
      .catch((error) => console.error(error));
  };

  const deleteProject = (id) => {
    apiDeleteProject(id)
      .then(() => setProject((prev) => prev.filter((e) => e._id !== id)))
      .catch((error) => console.error(error));
  };

  const deleteWork = (id) => {
    apiDeleteWork(id)
      .then(() => setWork((prev) => prev.filter((e) => e._id !== id)))
      .catch((error) => console.error(error));
  };

  const deleteVolunteer = (id) => {
    apiDeleteVolunteer(id)
      .then(() => setVolunteer((prev) => prev.filter((e) => e._id !== id)))
      .catch((error) => console.error(error));
  };

  return (
    <div className='wrapper'>
      <div className='wrapper1'>
        <h1>Resume Builder App</h1>
        <Personal addPersonal={addPersonal} personal={personal} />
        <Education addEducation={addEducation} />
        <Skill addSkill={addSkill} />
        <Project addProject={addProject} />
        <Work addWork={addWork} />
        <Volunteer addVolunteer={addVolunteer} />
      </div>

      <div className='wrapper2'>
        <View
          ref={resumeFormat}
          personal={personal}
          deletePersonal={deletePersonal}
          education={education}
          deleteEducation={deleteEducation}
          skill={skill}
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
    </div>
  );
}

export default Home;