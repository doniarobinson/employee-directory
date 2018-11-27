import React from 'react';
import Employee from './Employee';

const employee = {
    name: "test"
};

class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="EmployeeList">
    
            <h2>Employee List</h2>
            <Employee employee={employee} />
    
          </div>
        );
    }
}

export default EmployeeList;