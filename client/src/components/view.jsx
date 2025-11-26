import React, { forwardRef } from 'react';
import '../App.css';

const View = forwardRef(({ personal, education, skill, projects, work, volunteer,
  deletePersonal, deleteEducation, deleteSkill, deleteProject, deleteWork, deleteVolunteer }, ref) => {
  return (
    <div ref={ref} className='content'>
      <section className='header'>
        <h2>Personal</h2>
        {personal.map((p) => (
          <div key={p._id}>
            <h1>{p.name}</h1><button className='delete-btn' onClick={() => deletePersonal && deletePersonal(p._id)}>Delete</button>
            {p.address} | {p.phone} | {p.email} <br />
            {p.link?.length > 0 && (
              <ul>
                {p.link.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <section>
        <h2>Education</h2>
        {education.map((e) => (
          <div key={e._id}>
            <strong>{e.institute}</strong>, {e.address} <button className='delete-btn' onClick={() => deleteEducation && deleteEducation(e._id)}>Delete</button><br />
            ({e.enrollStart} - {e.enrollEnd})<br />
            <ul>
              <li>Studying {e.study}</li>
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>Skills: </h2>
          {skill?.map((s) => (
            <p key={s._id}>{s.skill} <button className='delete-btn' onClick={() => deleteSkill && deleteSkill(s._id)}>Delete</button> </p>
          ))}
      </section>

      <section>
        <h2>Projects</h2>
        {projects.map((pj) => (
          <div key={pj._id}>
            <strong>{pj.title}</strong> <button className='delete-btn' onClick={() => deleteProject && deleteProject(pj._id)}>Delete</button> <br />
            {pj.course} | ({pj.termStart} - {pj.termEnd}) | {pj.institute}<br />
            {pj.description?.length > 0 && (
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
        {work.map((w) => (
          <div key={w._id}>
            <strong>{w.position}</strong> at {w.company} <button className='delete-btn' onClick={() => deleteWork && deleteWork(w._id)}>Delete</button> <br />
            ({w.termStart} - {w.termEnd}) <br />
            {w.responsibilities?.length > 0 && (
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
        {volunteer.map((v) => (
          <div key={v._id}>
            <strong>{v.position}</strong> at {v.organization} <button className='delete-btn' onClick={() => deleteVolunteer && deleteVolunteer(v._id)}>Delete</button> <br />
            ({v.startTerm} - {v.endTerm}) <br />
            {v.responsibilities?.length > 0 && (
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