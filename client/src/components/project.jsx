import { useState } from 'react';

function Project({ addProject }) {
  const [title, setTitle] = useState('');
  const [institute, setInstitute] = useState('');
  const [course, setCourse] = useState('');
  const [termStart, setTermStart] = useState('');
  const [termEnd, setTermEnd] = useState('');
  const [description, setDescription] = useState([]);
  const [currDescript, setCurrDescript] = useState('');
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
      setCurrDescript(value);
    }
    else if (name === 'present'){
      setPresent(event.target.checked);
      setTermEnd('');
    }
  }

  function addDescription() {
    if (currDescript.trim() != ''){
      setDescription([...description, currDescript.trim()]);
      setCurrDescript('');
    }
  }

  function handleSubmit(event){
    event.preventDefault();
    const newProject = {
      title,
      institute,
      course,
      termStart,
      termEnd: present ? 'Present' : termEnd,
      description,
    };
    addProject(newProject);
    setTitle("");
    setInstitute("");
    setCourse("");
    setTermStart("");
    setTermEnd("");
    setDescription([]);
    setCurrDescript("");
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
        Term Year End:
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
          checked={present}
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
          value={currDescript}
          onChange={handleChange}
        />
      </label>
      <button type='button' onClick={addDescription}>
        Add Description
      </button>
      <ul>
        {description.map((desc, index) => (
          <li key={index}>
            {desc}
            <button type="button" onClick={() => setDescription(description.filter((_, i) => i !== index))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <br /><br />

      <button type="submit">Add</button>
    </form>
  );
}

export default Project;