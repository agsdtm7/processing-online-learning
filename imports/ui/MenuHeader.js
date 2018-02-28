import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Template.MenuHeader.onRendered(function(){
  //var menuselector = 'nav div.container div#collapse.collapse.navbar-collapse ul.nav.navbar-nav.navbar-right.first-nav li';
  var menuselector = ' ul.nav.navbar-nav.navbar-right li a';
  $(menuselector).on('click', function(){
  $(menuselector).removeClass('active');
  $(this).addClass('active');
  });
});

Template.MenuHeader.onCreated(function(){
  //this.autorun(() => {
    Meteor.subscribe('videodb.list');
    Meteor.subscribe('userlist');

  });
