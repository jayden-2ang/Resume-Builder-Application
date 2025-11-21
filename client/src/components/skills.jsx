import { useState } from 'react';

function Skills(props) {
  const [skill, setSkill] = useState('');

  function handleChange(event){
    setSkill(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    props.addEducation(skill);
    setSkill("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Skill</h2>
      <label>
        Skill:
        <input
          type="text"
          value={skill}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <button type="submit">Add</button>
    </form>
  );
}

export default Skills;