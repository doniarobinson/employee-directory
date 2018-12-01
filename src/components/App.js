import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import EmployeeList from './EmployeeList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        
        <Header />
        <Content />

      </div>
    );
  }
}

export default App;
