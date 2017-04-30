import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';


const EmployeeList = (props) => {
//props.employees => array of employee objects
  console.log(props.employees);


  return (
    <div>
      <div className="employee-list">
        Employee List
      </div>
    </div>
  )
}

export default createContainer (() => {
  // setup subscription
  Meteor.subscribe("employees");

  //return an object. whatever we return weill be sent to EmployeeList as props
  return { employees: Employees.find({}).fetch() };


}, EmployeeList);
