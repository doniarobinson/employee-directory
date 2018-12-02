import React from 'react';
import axios from 'axios';
import Employee from './Employee';

var flattenObject = require('flatten-object');

class EmployeeList extends React.Component {
    state = {
        employees: []
    };

    componentDidMount() {
        axios.get(`https://randomuser.me/api/?page=11&results=10&seed=dmr&inc=name,picture,location,phone, email`)
          .then(res => {
            const employees = res.data.results[0];

            // flatten object
            const flatEmployees = flattenObject(employees, 3);

            this.setState({ flatEmployees });
            //console.log(this.state.flatEmployees);
        });
    }

    render() {
        return (
          <div className="EmployeeList">
    
            <h2>Employee List</h2>
            <Employee {...this.state.flatEmployees} />
    
          </div>
        );
    }
}

export default EmployeeList;