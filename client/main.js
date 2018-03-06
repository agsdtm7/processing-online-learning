import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';

import '../imports/routes/router';
import '../imports/ui/body.js';
import '../imports/ui/Videos.js';
import '../lib/shared.js';

Meteor.startup(() => {
  Session.set('selectedVideoLink', undefined);
  Session.set('selectedVideo', undefined);
});

// TO DIRECT USERS TO HOME PAGE WHEN LOGGING OUT
// https://stackoverflow.com/questions/35614324/logout-problems-in-meteor
Template._loginButtonsLoggedInDropdown.events({
    'click #login-buttons-logout': function (event) {

        Meteor.logout(function() {
          Router.go('/');
        });
        event.preventDefault();
    },
});

Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
});

// Template.MenuHeader.helpers({username:function(){
//         if(Meteor.user()){
//             yourUserId = Meteor.user().emails[0].userId;
//             $("#user_name").css("display", "block");
//             $(".second-nav").css("display", "block");
//             return Meteor.user().emails[0].userId;
//         }else{
//             $("#user_name").css("display", "none");
//             $(".second-nav").css("display", "none");
//             $(".second-nav div .container").css("display", "none");
//             $("#justTry").css("display","none");
//             return "anonymous user";
//         }
//     }
// });

// $('a').click(function(e){
//    e.stopImmediatePropagation();
//    alert('hi');
// });
