import { useState } from 'react';

function Project({ addProject }) {
  const [title, setTitle] = useState('');
  const [institute, setInstitute] = useState('');
  const [course, setCourse] = useState('');
  const [termStart, setTermStart] = useState('');
  const [termEnd, setTermEnd] = useState('');
  const [description, setDescription] = useState('');
  const [present, setPresent] = useState(false);

  function handleChange(event){
    const { name, value } = event.target;
    if (name === 'title') {
      setTitle(value);
    } 
    else if (name === 'institute') {
      setInstitute(value);
    } 
    else if (name === 'course') {
      setCourse(value);
    } 
    else if (name === 'termStart') {
      setTermStart(value);
    } 
    else if (name === 'termEnd') {
      setTermEnd(value);
    } 
    else if (name === 'description') {
      setDescription(value);
    }
    else if (name === 'present'){
      setPresent(event.target.checked);
      setTermEnd('');
    }
  }

  function handleSubmit(event){
    event.preventDefault();
    const newProject = {
      title,
      institute,
      course,
      termStart,
      termEnd,
      description,
    };
    addProject(newProject);
    setTitle("");
    setInstitute("");
    setCourse("");
    setTermStart("");
    setTermEnd("");
    setDescription("");
    setPresent(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Project</h2>
      <label>
        Project Title:
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Institute:
        <input
          type="text"
          name="institute"
          value={institute}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Course Name:
        <input
          type="text"
          name="course"
          value={course}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Term Year Start:
        <input
          type="month"
          name="termStart"
          value={termStart}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      {!present && (
				<>
      <label>
        Term Year End (Or expected):
        <input
          type="month"
          name="termEnd"
          value={termEnd}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />
      </>
			)}

      <label>
        Still Working on it?:
        <input
          type="checkbox"
          name="present"
          value={present}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Description:
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <button type="submit">Add</button>
    </form>
  );
}

export default Project;