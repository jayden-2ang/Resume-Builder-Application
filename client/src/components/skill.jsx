import { useState } from 'react';

function Skill({ addSkill }) {
  const [skill, setSkill] = useState('');

  function handleChange(event){
    setSkill(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    const newSkill = {
      skill,
    };
    addSkill(newSkill);
    setSkill("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Skill</h2>
      <label>
        Skill(s):
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

export default Skill;