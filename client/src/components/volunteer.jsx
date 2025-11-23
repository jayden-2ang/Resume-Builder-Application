import { useState } from 'react';

function Volunteer({ addVolunteer }) {
	const [position, setPosition] = useState('');
	const [organization, setOrganization] = useState('');
	const [startTerm, setStartTerm] = useState('');
	const [endTerm, setEndTerm] = useState('');
	const [responsibilities, setResponsibilities] = useState('');
	const [current, setCurrent] = useState(false);

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
		else if (name === 'current') {
			setCurrent(event.target.checked);
			setEndTerm('');
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		const newVolunteer = {
			position,
			organization,
			startTerm,
			endTerm: current ? 'Present' : endTerm,
			responsibilities,
		};
		addVolunteer(newVolunteer);
		setPosition('');
		setOrganization('');
		setStartTerm('');
		setEndTerm('');
		setResponsibilities('');
		setCurrent(false);
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
				type="date" 
				value={startTerm} 
				onChange={handleChange} 
				required 
				/>
			</label>
			<br /><br />

			{!current && (
				<>
				<label>
					Date End:
					<input 
					name="endTerm" 
					type="date" 
					value={endTerm} 
					onChange={handleChange} 
					required 
					/>
				</label>
				<br /><br />
				</>
			)}
			
			<label>
				Still Volunteering?:
				<input 
				name="current" 
				type="checkbox" 
				checked={current} 
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

