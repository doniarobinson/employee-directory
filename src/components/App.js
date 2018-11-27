import React from 'react';
import './App.css';
import EmployeeList from './EmployeeList';

const employeesList = [
  {
    name: "Jane Doe",
    url: "https://codepen.io/andreasstorm/pen/JBGWBa",
    author: "Andreas Storm"
  }
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        
        <EmployeeList employees={employeesList} />

      </div>
    );
  }
}

export default App;
