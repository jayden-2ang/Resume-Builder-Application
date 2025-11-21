import { useState } from 'react';

function Education(props) {
  const [institute, setInstitute] = useState('');
  const [address, setAddress] = useState('');
  const [enrollStart, setEnrollStart] = useState('');
  const [enrollEnd, setEnrollEnd] = useState('');
  const [study, setStudy] = useState('');

  function handleChange(event){
    const { name, value } = event.target;
    if (name === 'institute') {
      setInstitute(value);
    } 
    else if (name === 'address') {
      setAddress(value);
    } 
    else if (name === 'enrollStart') {
      setEnrollStart(value);
    } 
    else if (name === 'enrollEnd') {
      setEnrollEnd(value);
    } 
    else if (name === 'study') {
      setStudy(value);
    }
  }

  function handleSubmit(event){
    event.preventDefault();
    props.addEducation(institute, address, enrollStart, enrollEnd, study);
    setInstitute("");
    setAddress("");
    setEnrollStart("");
    setEnrollEnd("");
    setStudy("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Education</h2>
      <label>
        Institution Name:
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
        Address:
        <input
          type="text"
          name="address"
          value={address}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Enrollment Start Date:
        <input
          type="date"
          name="enrollStart"
          value={enrollStart}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Enrollment End Date:
        <input
          type="date"
          name="enrollEnd"
          value={enrollEnd}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Field of Study:
        <input
          type="text"
          name="study"
          value={study}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <button type="submit">Add</button>
    </form>
  );
}

export default Education;