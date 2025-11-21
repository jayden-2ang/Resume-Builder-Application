import { useState } from 'react';
import Personal from './components/personal';
import Education from './components/education';
import Skills from './components/skills';
import Projects from './components/projects';
import Work from './components/work';
import Volunteer from './components/volunteer';
import axios from 'axios';

/*function App(data) {
  const [personal, setPersonal] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [work, setWork] = useState([]);
  const [volunteer, setVolunteer] = useState([]);

  const personalList = personal.map((p) => (
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
      enrollment={e.enrollment}
      study={e.study}
    />
  ));

  const skillList = skills.map((s) => (
    <Skills 
      id={s.id}
      html={s.html}
      css={s.css}
      js={s.js}
    />
  ));

  const projectList = projects.map((pj) => (
    <Projects 
      id={pj.id}
      title={pj.title}
      institute={pj.institute}
      course={pj.course}
      term={pj.term}
      description={pj.description}
    />
  ));

  const workList = work.map((w) => (
    <Work
      id={w.id}
      position={w.position}
      company={w.company}
      time={w.time}
      responsibilities={w.responsibilities}
    />
  ));

  const volunteerList = volunteer.map((v) => (
    <Volunteer
      id={v.id}
      position={v.position}
      company={v.company}
      time={v.time}
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

export default App;


function App() {
  const [personal, setPersonal] = useState([]);

  const addPersonal = (personal) => {
    setPersonal([...personal, personal]);
  };

  return (
    <div>
      <Personal addPersonal={addPersonal} />
      
    </div>
  );
}