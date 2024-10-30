import { useState } from 'react';
import './App.css';
function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState('');

  const displayInfo = () => {
    console.log(name + age + country + position + wage);
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="information">
          <label>Name:{name}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <label>Country</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <label>Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <label>Wage (year)</label>
          <input
            type="number"
            value={wage}
            onChange={(e) => setWage(e.target.value)}
          />
          <button>Add Employee</button>
        </div>
      </div>
    </>
  );
}

export default App;
