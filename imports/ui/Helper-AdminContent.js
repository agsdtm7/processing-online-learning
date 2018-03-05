import { Meteor } from 'meteor/meteor';

// IMPORTANT FUNCTIONS TO TRIGGER CHANGE TO THE COLOR OF THE BUTTONS IN THE ADMIN PAGE
function CHECK_VIDEO_VARIABLE_AND_CHANGE_COLOR_BUTTON(){
    Meteor.call('checkVideoVariable', function(error, result){
        if(error){
            console.log(error);
        }else{
            //console.log(result);
            // THE REASON BEHIND THIS WAY OF CODING, AKA NESTED IF IS THAT METEOR CALL DOESN'T ALLOW ME TO RETURN THE VALUE PROPERLY, IT WILL RETURN UNIDENTIFIED IF THE CODE IS OUTSIDE THE CALL METHODS
            if( result == "false"){
                $("#varbtn").css("background-color","red");
            }else{
                $("#varbtn").css("background-color","#00b359").css("color","white");
            }
        }
    });
}

function CHECK_VIDEO_CONDITION_AND_CHANGE_COLOR_BUTTON(){
    Meteor.call('checkVideoCondition', function(error, result){
        if(error){
            console.log(error);
        }else{
            //console.log(result);
            if( result == "false"){
                $("#conbtn").css("background-color","red");
            }else{
                $("#conbtn").css("background-color","#00b359").css("color","white");
            }
        }
    });
}

function CHECK_VIDEO_LOOP_AND_CHANGE_COLOR_BUTTON(){
    Meteor.call('checkVideoLoop', function(error, result){
        if(error){
            console.log(error);
        }else{
            //console.log(result);
            if( result == "false"){
                $("#loopbtn").css("background-color","red");
            }else{
                $("#loopbtn").css("background-color","#00b359").css("color","white");
            }
        }
    });
}

function CHECK_VIDEO_FUNCTION_AND_CHANGE_COLOR_BUTTON(){
    Meteor.call('checkVideoFunction', function(error, result){
        if(error){
            console.log(error);
        }else{
            //console.log(result);
            if( result == "false"){
                $("#funcbtn").css("background-color","red");
            }else{
                $("#funcbtn").css("background-color","#00b359").css("color","white");
            }
        }
    });
}

function CHECK_VIDEO_CLASSOBJECT_AND_CHANGE_COLOR_BUTTON(){
    Meteor.call('checkVideoClassObject', function(error, result){
        if(error){
            console.log(error);
        }else{
            //console.log(result);
            if( result == "false"){
                $("#clsbtn").css("background-color","red");
            }else{
                $("#clsbtn").css("background-color","#00b359").css("color","white");
            }
        }
    });
}

function CHECK_VIDEO_PROJECT_AND_CHANGE_COLOR_BUTTON(){
    Meteor.call('checkVideoProject', function(error, result){
        if(error){
            console.log(error);
        }else{
            //console.log(result);
            if( result == "false"){
                $("#prjbtn").css("background-color","red");
            }else{
                $("#prjbtn").css("background-color","#00b359").css("color","white");
            }
        }
    });
}

Template.contentAdmin.onRendered(function(){
    // FIND OUT WHAT THIS IS FOR...
    // var selector = 'nav div.container div#collapse.collapse.navbar-collapse ul.nav.navbar-nav.navbar-right.first-nav li';
    // $(selector).on('click', function(){
    // $(selector).removeClass('active');
    // $(this).addClass('active');
    // });



    // THIS IS TRIGGERED DURING RENDERING THE PARTICULAR PAGE
    CHECK_VIDEO_VARIABLE_AND_CHANGE_COLOR_BUTTON();
    CHECK_VIDEO_CONDITION_AND_CHANGE_COLOR_BUTTON();
    CHECK_VIDEO_LOOP_AND_CHANGE_COLOR_BUTTON();
    CHECK_VIDEO_FUNCTION_AND_CHANGE_COLOR_BUTTON();
    CHECK_VIDEO_CLASSOBJECT_AND_CHANGE_COLOR_BUTTON();
    CHECK_VIDEO_PROJECT_AND_CHANGE_COLOR_BUTTON();

});

//-------THIS IS FOR THE BUTTON CLICKS--------------------
Template.contentAdmin.events({
    'click #secondbutton' (event){
        //console.log("test test");
        Meteor.call('removeAllChat');
    },
    // ENABLE AND DISABLE VIDEOS THROUGH BUTTON CLICK
    'click #varbtn' (event){
        console.log('I click this button');
        Meteor.call('variableVideoChange');
        CHECK_VIDEO_VARIABLE_AND_CHANGE_COLOR_BUTTON();
    },
    'click #conbtn' (event){
        Meteor.call('conditionVideoChange');
        CHECK_VIDEO_CONDITION_AND_CHANGE_COLOR_BUTTON();
    },
    'click #loopbtn' (event){
        Meteor.call('loopVideoChange');
        CHECK_VIDEO_LOOP_AND_CHANGE_COLOR_BUTTON();
    },
    'click #funcbtn' (event){
        Meteor.call('functionVideoChange');
        CHECK_VIDEO_FUNCTION_AND_CHANGE_COLOR_BUTTON();
    },
    'click #clsbtn' (event){
        Meteor.call('classVideoChange');
        CHECK_VIDEO_CLASSOBJECT_AND_CHANGE_COLOR_BUTTON();
    },
    'click #prjbtn' (event){
        Meteor.call('projectVideoChange');
        CHECK_VIDEO_PROJECT_AND_CHANGE_COLOR_BUTTON();
    }
});
