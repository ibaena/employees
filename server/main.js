//Only excuted on server
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import { image, helpers } from 'faker';

Meteor.startup(() => {
  //Great place to genrerate fake data

  //Check if data exists
  //See if collection has any records
  const numberRecords = Employees.find({}).count();

  if(!numberRecords) {
    //Generate data
    _.times(5000, () => {
        const { name, email, phone } = helpers.createCard();
        Employees.insert({
          name, email, phone,
          avatar: image.avatar()
        });
    });
  }

  Meteor.publish("employees", function(per_page){
    return Employees.find({}, {limit:per_page});
  });

});
