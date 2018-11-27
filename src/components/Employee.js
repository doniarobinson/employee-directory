import React from 'react';

class Employee extends React.Component {
    render() {
        return (
          <div className="Employee">
    
            <p>Employee Name: {this.props.employee.name}</p>
    
          </div>
        );
    }
}

export default Employee;