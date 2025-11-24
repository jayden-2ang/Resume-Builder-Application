import '../index.css';

function View({ personal, education, skills, projects, work, volunteer }) {
  return (
    <div>
      <h1>Resume</h1>
      <div className='header'>
        {personal.map((p, index) => (
          <div key={index}>
            <strong>{p.name}</strong> <br />
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
            <strong>{e.institute}</strong>, {e.address} <br />
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
            <p key={index}>{s.skill}, </p>
          ))}
      </section>

      <section>
        <h2>Projects</h2>
        {projects.map((pj, index) => (
          <div key={index}>
            <strong>{pj.title}</strong> <br />
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
            <strong>{w.position}</strong> at {w.company} <br />
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
            <strong>{v.position}</strong> at {v.organization} <br />
            {v.termStart} - {v.termEnd} <br />
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
}

export default View;