import { useState } from 'react';

function Personal({ addPersonal }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [link, setLink] = useState('');

  function handleChange(event){
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } 
    else if (name === 'email') {
      setEmail(value);
    } 
    else if (name === 'phone') {
      setPhone(value);
    } 
    else if (name === 'address') {
      setAddress(value);
    } 
    else if (name === 'link') {
      setLink(value);
    }
  }

  function handleSubmit(event){
    event.preventDefault();
    const newPersonal = {
      name, 
      email,
      phone,
      address,
      link,
    };
    addPersonal(newPersonal);
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setLink("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Personal Information</h2>
      <label>
        Name:
        <input
          type="text"
          id="p-name"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Email:
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={phone}
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
        Link:
        <input
          type="text"
          name="link"
          value={link}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />
      <button type="submit">Add</button>
    </form>
  );
}

export default Personal;