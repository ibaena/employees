import React from 'react';
import ReactDOM from 'react-dom';

//Components
import EmployeeList from './components/employee_list';

const App = () => {
  return (
    <div>
      <EmployeeList />
    </div>
  )
}

//After Meteor loads in browser render my app to the DOM

Meteor.startup(() => {
    //React render Call
    ReactDOM.render(<App />, document.querySelector('.container'));
});
