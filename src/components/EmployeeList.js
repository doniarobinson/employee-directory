import React from 'react';
import axios from 'axios';
import ReactTable from "react-table";
import "react-table/react-table.css";

//import Employee from './Employee';

import './EmployeeList.css';

var flattenObject = require('flatten-object');

class EmployeeList extends React.Component {
    state = {
        employees: []
    };

    componentDidMount() {
        axios.get(`https://randomuser.me/api/?page=11&results=20&seed=dmr&inc=name,location,phone, email`)
          .then(res => {
            
            // save as array
            const employees = res.data.results;
            //console.log(employees);

            let flatEmployees = [];
            // flatten each object in array
            for (let i=0; i<employees.length; i++) {
                flatEmployees.push(flattenObject(employees[i],3));
            }

            this.setState({ flatEmployees });
            //console.log(this.state.flatEmployees);
        });
    }

    render() {
        return (
            <div className="EmployeeList">
    
            <h4>Employee List</h4>

            <p><em>Click column title to sort by that column.</em></p>

            { this.state && this.state.flatEmployees &&
                <div>
                <ReactTable
                data={this.state.flatEmployees}
                columns={[
                    {
                        Header: "First Name",
                        accessor: "first_0"
                    },
                    {
                        Header: "Last Name",
                        accessor: "last_0"
                    },
                    {
                        Header: "City",
                        accessor: "city_0"
                    },
                    {
                        Header: "Email",
                        accessor: "email_0"
                    },
                    {
                        Header: "Phone",
                        accessor: "phone_0"
                    }
                ]}
                defaultPageSize={10}
                className="-striped -highlight"
                />
                </div>
            }
    
          </div>
        );
    }
}

export default EmployeeList;