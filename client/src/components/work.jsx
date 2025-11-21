import { useState } from 'react';

function Work(props) {
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [termStart, setTermStart] = useState('');
  const [termEnd, setTermEnd] = useState('');
  const [responsibilities, setResponsibilities] = useState('');

  function handleChange(event){
    const { name, value } = event.target;
    if (name === 'position') {
      setPosition(value);
    } 
    else if (name === 'company') {
      setCompany(value);
    } 
    else if (name === 'termStart') {
      setTermStart(value);
    } 
    else if (name === 'termEnd') {
      setTermEnd(value);
    } 
    else if (name === 'responsibilities') {
      setResponsibilities(value);
    }
  }

  function handleSubmit(event){
    event.preventDefault();
    props.addWork(position, company, termStart, termEnd, responsibilities);
    setPosition("");
    setCompany("");
    setTermStart("");
    setTermEnd("");
    setResponsibilities("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Work Experience</h2>
      <label>
        Job Position:
        <input
          type="text"
          name="position"
          value={position}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Company Name:
        <input
          type="text"
          name="company"
          value={company}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Term Year Start:
        <input
          type="text"
          name="termStart"
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
          name="termEnd"
          value={termEnd}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Responsibilities:
        <input
          type="text"
          name="responsibilities"
          value={responsibilities}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <button type="submit">Add</button>
    </form>
  );
}

export default Work;