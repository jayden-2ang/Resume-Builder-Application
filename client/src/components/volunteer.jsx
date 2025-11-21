import { useState } from 'react';

function Volunteer(props) {
	const [position, setPosition] = useState('');
	const [organization, setOrganization] = useState('');
	const [startTerm, setStartTerm] = useState('');
	const [endTerm, setEndTerm] = useState('');
	const [responsibilities, setResponsibilities] = useState('');

	function handleChange(event) {
		const { name, value } = event.target;
		if (name === 'position') {
			setPosition(value);
		} 
		else if (name === 'organization') {
			setOrganization(value);
		} 
		else if (name === 'startTerm') {
			setStartTerm(value);
		} 
		else if (name === 'endTerm') {
			setEndTerm(value);
		} 
		else if (name === 'responsibilities') {
			setResponsibilities(value);
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (props.addVolunteer) props.addVolunteer({ position, organization, startTerm, endTerm, responsibilities });
		setPosition('');
		setOrganization('');
		setStartTerm('');
		setEndTerm('');
		setResponsibilities('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Add Volunteer Experience</h2>
			<label>
				Position:
				<input 
				name="position" 
				type="text" 
				value={position} 
				onChange={handleChange} 
				required 
				/>
			</label>
			<br /><br />

			<label>
				Organization:
				<input 
				name="organization" 
				type="text" 
				value={organization} 
				onChange={handleChange} 
				required 
				/>
			</label>
			<br /><br />

			<label>
				Start Term:
				<input 
				name="startTerm" 
				type="text" 
				value={startTerm} 
				onChange={handleChange} 
				required 
				/>
			</label>
			<br /><br />

			<label>
				End Term:
				<input 
				name="endTerm" 
				type="text" 
				value={endTerm} 
				onChange={handleChange} 
				required 
				/>
			</label>
			<br /><br />

			<label>
				Responsibilities:
				<input 
				name="responsibilities" 
				type="text" 
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

export default Volunteer;

