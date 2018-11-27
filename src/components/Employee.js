import React from 'react';

class Employee extends React.Component {
    render() {
        return (
          <div className="Employee">
    
            <p>Name: {this.props.first_0} {this.props.last_0}<br />
            City: {this.props.city_0}<br />
            Email: {this.props.email_0}<br />
            Phone: {this.props.phone_0}<br />
            <img 
      src={this.props.thumbnail_0}
      alt="thmb"
      />
            </p>
    
          </div>
        );
    }
}

export default Employee;