import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';

import EmployeeDetail from './employee_detail';

const EmployeeList = (props) => {
//props.employees => array of employee objects
// map to render multiple employees

  return (
    <div>
      <div className="employee-list">
        {props.employees.map(employee => <EmployeeDetail key={employee._id} employee={employee} />)}
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
