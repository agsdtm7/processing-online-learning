import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Template.MenuHeader.onRendered(function(){
  var menuselector = ' ul.nav.navbar-nav.navbar-right li a';
  $(menuselector).on('click', function(){
  $(menuselector).removeClass('active');
  $(this).addClass('active');
  });


  //var menuselector = 'nav div.container div#collapse.collapse.navbar-collapse ul.nav.navbar-nav.navbar-right.first-nav li';
  // var menuselector = ' ul.nav.navbar-nav.navbar-right li a';
  // $(menuselector).on('click', function(){
  // $(menuselector).removeClass('active');
  // $(this).addClass('active');
  // Session.set("selectorMenuHeader", this);
  // });
});

// WHEN THE BRAND IS CLICKED IT WILL GET RID OF THE CLICKED MENU HEADER
//-------THIS WILL CAUSE A BIG TROUBLE ---- EXCEED CALL STACTK
// Template.MenuHeader.events({
//   'click a.navbar-brand'(event, instance){
//     var menuselector = ' ul.nav.navbar-nav.navbar-right li a';
//     $(menuselector).removeClass('active');
//   }
// });

Template.MenuHeader.onCreated(function(){
  //this.autorun(() => {
    Meteor.subscribe('videodb.list');
    Meteor.subscribe('userlist');

  });
