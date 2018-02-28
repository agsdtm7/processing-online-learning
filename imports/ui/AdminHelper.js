import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
// showing user database and give options to do other things
Session.set("userRole", undefined);

Template.usernames.helpers({
    usernames: function(){
        Meteor.subscribe('userlist');
        return Meteor.users.find({_id:{$ne:Meteor.userId()}});
      }
    }
);

Template.usernames.events({
  'click button#deleteUser'(event, instance){
       Meteor.call("removeUser", this._id);
  },
  'click button#revokeRole'(event, instance){
       Meteor.call("setRoleForUser", this._id);
  },
  'click button#setRole'(event, instance){
       Meteor.call("setRoleForUser", this._id);
    }
});
