import { useState } from 'react';

function Education(props) {
  const [institute, setInstitute] = useState('');
  const [address, setAddress] = useState('');
  const [enrollStart, setEnrollStart] = useState('');
  const [enrollEnd, setEnrollEnd] = useState('');
  const [study, setStudy] = useState('');

  function handleChange(event){
    setInstitute(event.target.value);
    setAddress(event.target.value);
    setEnrollStart(event.target.value);
    setEnrollEnd(event.target.value);
    setStudy(event.target.value);
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
          value={institute}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Address
        <input
          type="text"
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