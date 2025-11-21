import { useState } from 'react';
import Personal from './components/personal';
import Education from './components/education';
import Skill from './components/skill';
import Project from './components/project';
import Work from './components/work';
import Volunteer from './components/volunteer';
import axios from 'axios';

function App(props) {
  const [personal, setPersonal] = useState([]);
  const [education, setEducation] = useState([]);
  const [skill, setSkill] = useState([]);
  const [project, setProject] = useState([]);
  const [work, setWork] = useState([]);
  const [volunteer, setVolunteer] = useState([]);

  /*const personalList = personal.map((p) => (
    <Personal 
      id={p.id}
      name={p.name}
      email={p.email}
      phone={p.phone}
      address={p.address}
      link={p.link}
    />
  ));

  const educationList = education.map((e) => (
    <Education 
      id={e.id}
      institute={e.institute}
      address={e.address}
      enrollStart={e.enrollStart}
      enrollEnd={e.enrollEnd}
      study={e.study}
    />
  ));

  const skillList = skill.map((s) => (
    <Skill 
      id={s.id}
      skill={s.skill}
    />
  ));

  const projectList = project.map((pj) => (
    <Project
      id={pj.id}
      title={pj.title}
      institute={pj.institute}
      course={pj.course}
      termStart={pj.termStart}
      termEnd={pj.termEnd}
      description={pj.description}
    />
  ));

  const workList = work.map((w) => (
    <Work
      id={w.id}
      position={w.position}
      company={w.company}
      termStart={w.termStart}
      termEnd={w.termEnd}
      responsibilities={w.responsibilities}
    />
  ));

  const volunteerList = volunteer.map((v) => (
    <Volunteer
      id={v.id}
      position={v.position}
      organization={v.organization}
      time={v.time}
      termStart={w.termStart}
      termEnd={w.termEnd}
      responsibilities={v.responsibilities}
    />
  ));

  return (
    <div className="">
      <h1>Resume Builder App</h1>
      <Form addTask={addTask} />
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}*/

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
      <Personal addPersonal={addPersonal} />
      <Education addEducation={addEducation} />
      <Skill addSkill={addSkill} />
      <Project addProject={addProject} />
      <Work addWork={addWork} />
      <Volunteer addVolunteer={addVolunteer} />
    </div>
  );
}

export default App;