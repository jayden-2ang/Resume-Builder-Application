import { useState } from 'react';

function Project(props) {
  const [title, setTitle] = useState('');
  const [institute, setInstitute] = useState('');
  const [course, setCourse] = useState('');
  const [termStart, setTermStart] = useState('');
  const [termEnd, setTermEnd] = useState('');
  const [description, setDescription] = useState('');

  function handleChange(event){
    setTitle(event.target.value);
    setInstitute(event.target.value);
    setCourse(event.target.value);
    setTermStart(event.target.value);
    setTermEnd(event.target.value);
    setDescription(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    props.addProject(title, institute, course, termStart, termEnd, description);
    setTitle("");
    setInstitute("");
    setCourse("");
    setTermStart("");
    setTermEnd("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Project</h2>
      <label>
        Project Title:
        <input
          type="text"
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
          value={course}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Term Year Start:
        <input
          type="text"
          value={termStart}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Term Year End (Or expected):
        <input
          type="text"
          value={termEnd}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Description:
        <input
          type="text"
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