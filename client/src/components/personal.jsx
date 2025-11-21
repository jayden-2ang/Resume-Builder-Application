import { useState } from 'react';

function Personal(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [link, setLink] = useState('');

  function handleChange(event){
    setName(event.target.value);
    setEmail(event.target.value);
    setPhone(event.target.value);
    setAddress(event.target.value);
    setLink(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    props.addPersonal(name, email, phone, address, link);
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