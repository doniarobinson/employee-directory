import React from 'react';
import axios from 'axios';
import ReactTable from "react-table";
import "react-table/react-table.css";

import Employee from './Employee';

import './EmployeeList.css';

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
        const staticEmployees  = [
            { first_0: "emp1", last_0: "last1" },
            { first_0: "emp2", last_0: "last2" }
        ];
        console.log(typeof staticEmployees);
        return (
            <div className="EmployeeList">
    
            <h4>Employee List</h4>

            { this.state && this.state.flatEmployees &&
                <div>
                <ReactTable
                data={staticEmployees}
                columns={[
                    {
                        Header: "First Name",
                        accessor: "first_0"
                    },
                    {
                        Header: "Last Name",
                        id: "last_0",
                        accessor: d => d.last_0
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