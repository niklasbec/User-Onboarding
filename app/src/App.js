import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'

function App() {
  const [ users , setUsers] = useState([])

  return (
    <div className="App">
      <h1>My react App</h1>
      <Form users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
