import React from 'react';

class Employee extends React.Component {
    constructor(props) {
        super(props);
        // Just to see what was passed...
        console.log(props);
    }

    render() {
        return (

            <p>Employee</p>
        );
    }
}

export default Employee;