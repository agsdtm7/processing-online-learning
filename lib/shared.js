import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Messages = new Mongo.Collection("messages");
Chatdb = new Mongo.Collection("chatdb");
Onlineusers = new Mongo.Collection("onlineusers");
Announcements = new Mongo.Collection("announcements");
Videodb = new Mongo.Collection("videodb");

var countOnlineUsers = 0;
var online = false;
var adminId;

//Meteor.subscribe('subscribevideodb');

// login check in order to display user icon
this.loggedIn = function(){
  try{
    if(Meteor.user()){
      console.log(Meteor.user().Role);
      return true;
    }else{
      throw new Meteor.Error('not authorized');
      return false;
    }
  }
  catch(err){
    console.log(err.message);
  }
}
Handlebars.registerHelper('loggedIn', loggedIn);

this.myRole = function(){
        // FOR UNKNOWN REASON USING TRY AND CATCH I WAS ABLE TO STOP THE CONSOLE TO PRINT LONG DETAILED ERROR MESSAGES "exception in template helper cannot read property name of undefined"
        try{
          if(Meteor.user().Role === "lecturer"){
            //console.log(Meteor.user().Role);
            return true;
          }else{
            throw new Meteor.Error('not authorized');
            return false;
          }
        }
        catch(err){
        //  console.log(err.message);
        }
}

Handlebars.registerHelper('myRole', myRole);

this.onRole = function(userId){
        // FOR UNKNOWN REASON USING TRY AND CATCH I WAS ABLE TO STOP THE CONSOLE TO PRINT LONG DETAILED ERROR MESSAGES "exception in template helper cannot read property name of undefined"
        try{
            if(!userId){
              var getUser = Meteor.users.findOne({_id: Meteor.users._id});
            }else{
              var getUser = Meteor.users.findOne({_id: userId});
            }
            if( getUser.Role == 'lecturer'){
                return false;
            }else{
                return true;
            }
        }
        catch(err){
            //console.log(err.message);
        }
}

Handlebars.registerHelper('onRole', onRole);

// CHECKING DATABASE TO DETERMINE IF THE TOPIC WILL BE DISPLAYED OR NOT
this.onVariable = function(){
        // FOR UNKNOWN REASON USING TRY AND CATCH I WAS ABLE TO STOP THE CONSOLE TO PRINT LONG DETAILED ERROR MESSAGES "exception in template helper cannot read property name of undefined"
        try{
            var topic = Videodb.findOne({_id:'vd'});
            if( topic.videoVariable == 'true'){
                return true;
            }else{
                return false;
            }
        }
        catch(err){
            //console.log(err.message);
        }
}

Handlebars.registerHelper('onVariable', onVariable);

this.onCondition = function(){
    try{
        var topic = Videodb.findOne({_id:'vd'});
        if(topic.videoCondition == 'true'){
            return true;
        }else{
            return false;
        }
    }
    catch(err){
        //console.log(err.message);
        }
}

Handlebars.registerHelper('onCondition', onCondition);

this.onLoop = function(){
    try{
        var topic = Videodb.findOne({_id:'vd'});
        if(topic.videoLoop == 'true'){
            return true;
        }else{
            return false;
        }
    }
    catch(err){
    //    console.log(err.message);
    }
}

Handlebars.registerHelper('onLoop', onLoop);

this.onClass = function(){
    try{
        var topic = Videodb.findOne({_id:'vd'});
        if(topic.videoClassObject == 'true'){
            return true;
        }else{
            return false;
        }
    }
    catch(err){
    //    console.log(err.message)
    }
}

Handlebars.registerHelper('onClass', onClass);

this.onFunction = function(){
    try{
        var topic = Videodb.findOne({_id:'vd'});
        if(topic.videoFunction == 'true'){
            return true;
        }else{
            return false;
        }
    }
    catch(err){
       // console.log(err.message);
    }
}

Handlebars.registerHelper('onFunction', onFunction);

this.onProject = function(){
    try{
        var topic = Videodb.findOne({_id:'vd'});
        if(topic.videoProject == 'true'){
            return true;
        }else{
            return false;
        }
    }
    catch(err){
      //  console.log(err.message);
    }
}


Meteor.methods({
    getUserRole:function(userTestId){
      if(!this.userId){
        return;
      }

      var userTest = Meteor.users.findOne({ _id: userTestId });
      //console.log(userTest.Role);
      return userTest.Role;
    },
});
