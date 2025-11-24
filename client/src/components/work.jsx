import { useState } from 'react';

function Work({ addWork }) {
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [termStart, setTermStart] = useState('');
  const [termEnd, setTermEnd] = useState('');
  const [responsibilities, setResponsibilities] = useState([]);
	const [currResp, setCurrResp] = useState('');
  const [employed, setEmployed] = useState(false);

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
      setCurrResp(value);
    }
    else if (name === 'employed') {
      setEmployed(event.target.checked);
      setTermEnd('');
    }
  }

  function addResp() {
		if (currResp.trim() != ''){
		setResponsibilities([...responsibilities, currResp.trim()]);
		setCurrResp('');
		}
	}

  function handleSubmit(event){
    event.preventDefault();
    const newWork = {
      position,
      company, 
      termStart,
      termEnd: employed ? 'Present' : termEnd,
      responsibilities,
    };
    addWork(newWork);
    setPosition("");
    setCompany("");
    setTermStart("");
    setTermEnd("");
    setResponsibilities([]);
    setCurrResp("");
    setEmployed(false);
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
        Date Start:
        <input
          type="month"
          name="termStart"
          value={termStart}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      {!employed && (
        <>
      <label>
        Date End:
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
        Still Employed?:
        <input
          type="checkbox"
          name="employed"
          checked={employed}
          onChange={handleChange}
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
      <button type='button' onClick={addResp}>
				Add Responsibility
			</button>
			<ul>
				{responsibilities.map((desc, index) => (
				<li key={index}>
					{desc}
					<button type="button" onClick={() => setResponsibilities(responsibilities.filter((_, i) => i !== index))}>
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

export default Work;