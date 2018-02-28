import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import '../lib/shared.js';

var topics = Videodb.findOne({_id:'vd'});

if(Meteor.users.find().count()<1){
        var id = Accounts.createUser({
            email:'admin@admin.com',
            password:'meteoradmin',
            profile:{name:'Administrator'}
          });
        Roles.addUsersToRoles(id,'admin');

    }

if(Videodb.find().count() < 1){
    console.log(Videodb.find().count());
    Videodb.insert({
        _id:'vd',
       videoVariable:'true',
       videoCondition:'true',
       videoLoop:'true',
       videoFunction:'true',
       videoClassObject:'true',
       videoProject:'true',
    });
}
// methods to change the value of "Videodb" in the mongodb database, this will be used as the base to enable/disable the topics in the videos page. For example if it is true then users can see the variable topic under the topics in the video page.
Meteor.methods({
  // giving a role for user -- as lecturer which means one can manage topic
  removeUser:function(selectedId){
   // check for userId, else throw error
   if(!this.userId){
     throw new Meteor.Error('not-authorized');
   }
   // SimpleSchema to validate _id string with length greater than 1
     // new SimpleSchema({
     //   _id:{
     //     type: String,
     //     min: 1
     //   }
     // }).validate({ selectedId });

   Meteor.users.remove({ _id: selectedId}, function(error, result){
     if(error){
       console.log(err.message);
     }else{
       console.log("success");
     }
   });
 },
 setRoleForUser:function(selectedUserId){
     if(!this.userId){
       return;
     }
     var getUser = Meteor.users.findOne({_id:selectedUserId});
     if(getUser.Role == "" || getUser.Role == "none" || getUser.Role == undefined){
       Meteor.users.update({_id: selectedUserId},{$set: { Role: "lecturer" }});
     }else{
       Meteor.users.update({_id: selectedUserId},{$set: { Role: "none" }});
     }
   },
   revokeRoleForUser:function(selectedUserId){
     if(!this.userId){
       return;
     }
     Meteor.users.update({_id: selectedUserId},{$set: { Role: "none" }});
   },
   variableVideoChange:function(){
      // this means you must be logging in in order to be able to enable or disable topics
       if(!this.userId){
           return;
       }
       topics = Videodb.findOne({_id:'vd'});
       if(topics.videoVariable == 'true'){
       Videodb.update({_id:'vd'},{$set: {videoVariable: "false"}});
       }else{
       Videodb.update({_id:'vd'},{$set: {videoVariable: "true"}});
       }
   },
    conditionVideoChange:function(){
       if(!this.userId){
           return;
       }
       topics = Videodb.findOne({_id:'vd'});
       if(topics.videoCondition == 'true'){
       Videodb.update({_id:'vd'},{$set: {videoCondition: "false"}});
       }else{
       Videodb.update({_id:'vd'},{$set: {videoCondition: "true"}});
       }
   },
    loopVideoChange:function(){
       if(!this.userId){
           return;
       }
       topics = Videodb.findOne({_id:'vd'});
       if(topics.videoLoop == 'true'){
       Videodb.update({_id:'vd'},{$set: {videoLoop: "false"}});
       }else{
       Videodb.update({_id:'vd'},{$set: {videoLoop: "true"}});
       }
   },
    functionVideoChange:function(){
       if(!this.userId){
           return;
       }
       topics = Videodb.findOne({_id:'vd'});
       if(topics.videoFunction == 'true'){
       Videodb.update({_id:'vd'},{$set: {videoFunction: "false"}});
       }else{
       Videodb.update({_id:'vd'},{$set: {videoFunction: "true"}});
       }
   },
    classVideoChange:function(){
       if(!this.userId){
           return;
       }
       topics = Videodb.findOne({_id:'vd'});
       if(topics.videoClassObject == 'true'){
       Videodb.update({_id:'vd'},{$set: {videoClassObject: "false"}});
       }else{
       Videodb.update({_id:'vd'},{$set: {videoClassObject: "true"}});
       }
   },
    projectVideoChange:function(){
       if(!this.userId){
           return;
       }
       topics = Videodb.findOne({_id:'vd'});
       if(topics.videoProject == 'true'){
       Videodb.update({_id:'vd'},{$set: {videoProject: "false"}});
       }else{
       Videodb.update({_id:'vd'},{$set: {videoProject: "true"}});
       }
   },
    checkVideoProject:function(){
        topics = Videodb.findOne({_id:'vd'});
        return topics.videoProject;
        //console.log("hello" + varbtn);
    },
    checkVideoVariable:function(){
        topics = Videodb.findOne({_id:'vd'});
        return topics.videoVariable;
        //console.log("hello" + varbtn);
    },
    checkVideoCondition:function(){
        topics = Videodb.findOne({_id:'vd'});
        return topics.videoCondition;
    },
    checkVideoLoop:function(){
        topics = Videodb.findOne({_id:'vd'});
        return topics.videoLoop;
    },
    checkVideoFunction:function(){
        topics = Videodb.findOne({_id:'vd'});
        return topics.videoFunction;
    },
    checkVideoClassObject:function(){
        topics = Videodb.findOne({_id:'vd'});
        return topics.videoClassObject;
    },
});


Meteor.publish('videodb.list',function(){
    return Videodb.find({});
})

// publish and subscribe
Meteor.publish('userlist', function(){
    return Meteor.users.find();
});

// 3/27/2017 --- I wanna show user list
Meteor.methods({
   showUsers:function(){
        if(!this.userId){return;}
       return Meteor.users.find({});
   }
});
