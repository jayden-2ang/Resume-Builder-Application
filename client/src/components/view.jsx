import React from 'react';
import '../index.css';

function View({ personal, education, skills, projects, work, volunteer }) {
  return (
    <div>
      <h1>Resume</h1>
      <div>
        <h2>Personal Information</h2>
        {personal.map((p, index) => (
          <div key={index}>
            <strong>{p.name}</strong> <br />
            Email: {p.email} | Phone: {p.phone} <br />
            Address: {p.address} <br />
            Link: {p.link}
          </div>
        ))}
      </div>

      {/* Education */}
      <section>
        <h2>Education</h2>
        {education.map((e, index) => (
          <div key={index}>
            <strong>{e.institute}</strong> ({e.enrollStart} – {e.enrollEnd}) <br />
            {e.study}, {e.address}
          </div>
        ))}
      </section>

      {/* Skills */}
      <section>
        <h2>Skills</h2>
        <ul>
          {skills.map((s, index) => (
            <li key={index}>{s.skill}</li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section>
        <h2>Projects</h2>
        {projects.map((pj, index) => (
          <div key={index}>
            <strong>{pj.title}</strong> ({pj.termStart} – {pj.termEnd}) <br />
            {pj.description}
          </div>
        ))}
      </section>

      {/* Work Experience */}
      <section>
        <h2>Work Experience</h2>
        {work.map((w, index) => (
          <div key={index}>
            <strong>{w.position}</strong> at {w.company} <br />
            {w.termStart} – {w.termEnd} <br />
            Responsibilities: {w.responsibilities}
          </div>
        ))}
      </section>

      {/* Volunteer */}
      <section>
        <h2>Volunteer Experience</h2>
        {volunteer.map((v, index) => (
          <div key={index}>
            <strong>{v.position}</strong> at {v.organization} <br />
            {v.termStart} – {v.termEnd} <br />
            Responsibilities: {v.responsibilities}
          </div>
        ))}
      </section>
    </div>
  );
}

export default View;