import React, { forwardRef } from 'react';
import '../App.css';

const View = forwardRef(({ personal, education, skills, projects, work, volunteer,
  deletePersonal, deleteEducation, deleteSkill, deleteProject, deleteWork, deleteVolunteer }, ref) => {
  return (
    <div ref={ref}>
      <div className='header'>
        {personal.map((p, index) => (
          <div key={index}>
            <h2>{p.name}</h2> <button className='delete-btn' onClick={() => deletePersonal && deletePersonal(index)}>Delete</button> <br />
            {p.address} | {p.phone} | {p.email} <br />
            {p.link && p.link.length > 0 && (
              <ul>
                {p.link.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <section>
        <h2>Education</h2>
        {education.map((e, index) => (
          <div key={index}>
            <strong>{e.institute}</strong>, {e.address} <button className='delete-btn' onClick={() => deleteEducation && deleteEducation(index)}>Delete</button><br />
            ({e.enrollStart} - {e.enrollEnd})<br />
            <ul>
              <li>Studying {e.study}</li>
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>Skills: </h2>
          {skills.map((s, index) => (
            <p key={index}>{s.skill} <button className='delete-btn' onClick={() => deleteSkill && deleteSkill(index)}>Delete</button> </p>
          ))}
      </section>

      <section>
        <h2>Projects</h2>
        {projects.map((pj, index) => (
          <div key={index}>
            <strong>{pj.title}</strong> <button className='delete-btn' onClick={() => deleteProject && deleteProject(index)}>Delete</button> <br />
            ({pj.termStart} - {pj.termEnd}) <br />
            {pj.description && pj.description.length > 0 && (
              <ul>
                {pj.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <section>
        <h2>Work Experience</h2>
        {work.map((w, index) => (
          <div key={index}>
            <strong>{w.position}</strong> at {w.company} <button className='delete-btn' onClick={() => deleteWork && deleteWork(index)}>Delete</button> <br />
            {w.termStart} - {w.termEnd} <br />
            {w.responsibilities && w.responsibilities.length > 0 && (
              <ul>
                {w.responsibilities.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <section>
        <h2>Volunteer Experience</h2>
        {volunteer.map((v, index) => (
          <div key={index}>
            <strong>{v.position}</strong> at {v.organization} <button className='delete-btn' onClick={() => deleteVolunteer && deleteVolunteer(index)}>Delete</button> <br />
            {v.startTerm} - {v.endTerm} <br />
            {v.responsibilities && v.responsibilities.length > 0 && (
              <ul>
                {v.responsibilities.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
    </div>
  );
});

export default View;