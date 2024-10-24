import { useState } from 'react';
import './App.css';
function App() {
  const [name, setName] = useState('');
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
          <label>Name</label>
          <input type="text" name="" />

          <label>Age</label>
          <input type="number" name="" />

          <label>Country</label>
          <input type="text" name="" />

          <label>Position</label>
          <input type="text" name="" />

          <label>Wage (year)</label>
          <input type="number" name="" />

          <button>Add Employee</button>
        </div>
      </div>
    </>
  );
}

export default App;
