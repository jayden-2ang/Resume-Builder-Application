import { useState } from 'react';
import Personal from './components/personal';
import Education from './components/education';
import Skills from './components/skills';
import Projects from './components/projects';
import Work from './components/work';
import Volunteer from './components/volunteer';
import './App.css';

function App(data) {
  const [personal, setPersonal] = useState(data.personal);
  const [education, setEducation] = useState(data.education);
  const [skills, setSkills] = useState(data.skills);
  const [projects, setProjects] = useState(data.projects);
  const [work, setWork] = useState(data.work);
  const [volunteer, setVolunteer] = useState(data.volunteer);

  const personalList = personal.map((p) => (
    <Personal 
      name={p.name}
      email={p.email}
      phone={p.phone}
      address={p.address}
      link={p.link}
    />
  ));

  const educationList = education.map((e) => (
    <Education 
      institute={e.institute}
      address={e.address}
      enrollment={e.enrollment}
      study={e.study}
    />
  ));

  const skillList = skills.map((s) => (
    <Skills 
      html={s.html}
      css={s.css}
      js={s.js}
    />
  ));

  const projectList = projects.map((pj) => (
    <Projects 
      html={s.html}
      css={s.css}
      js={s.js}
    />
  ));

  }
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
