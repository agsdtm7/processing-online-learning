import { Session } from 'meteor/session';
//-------------------------------------------------------
//------ FIXING THE ISSUES WITH THE CSS, if I put the function NOT inside
//------ Template.nameTemplate.onRendered, my css click would be in effect on the second click
// this function is to inject css class into the link of sub topics that user clicks
function onClickHandler(){

var selector = '.video-links';
$(selector).on('click', function(){
$(selector).removeClass('selected');
$(this).addClass('selected');
});
}
Template.introContent.onRendered(function(){
  onClickHandler();
});
Template.variableContent.onRendered(function(){
  onClickHandler();
});
Template.conditionContent.onRendered(function(){
  onClickHandler();
});
Template.loopContent.onRendered(function(){
  onClickHandler();
});
Template.functionContent.onRendered(function(){
  onClickHandler();
});
Template.classContent.onRendered(function(){
  onClickHandler();
});
Template.projectContent.onRendered(function(){
  onClickHandler();
});
//-------------------------------------------------------

Template.introContent.helpers({
    subTopics: function(){
        return [{
            link:'Basic Commands',
            videoId:'4XY0syQ5tUs?rel=0',
            subTitle:'basic_commands',
        },{
            link:'Simple Drawing',
            videoId:'VKgXOGz7p2k?rel=0',
            subTitle:'simple_drawing',
        },{
            link:'Simple Drawing 2',
            videoId: 'AnxXDCIDSqM?rel=0',
            subTitle: 'simple_panorama',
        }]
    },
});

Template.introContent.onCreated(function introOnCreated(){
    if(localStorage.getItem("selectedVideoLink")=== null || localStorage.getItem("selectedVideoLink")===  "null"){
      videoLink = '4XY0syQ5tUs?rel=0';
      videoTitle = 'Basic Commands';
    }else{
      videoLink = localStorage.getItem("selectedVideoLink");
      videoTitle = localStorage.getItem("selectedVideoTitle");
    }
    this.tutorial_id = new ReactiveVar(videoLink);
    this.tutorial_title = new ReactiveVar(videoTitle);
    //this.selected_video = new ReactiveVar(Session.get());
});

Template.introContent.onDestroyed(function(){
  localStorage.setItem("selectedVideoLink", null);
  localStorage.setItem("selectedVideoTitle", null);
});

Template.introContent.helpers({
  tutorial_id() {
    //Session.set('selectedVideoLink', 'selected');
    return Template.instance().tutorial_id.get();
  },
  tutorial_title(){
    return Template.instance().tutorial_title.get();
  }
});
//Template.pointAndLine.events


Template.introContent.events({
    // during click event assign the value of link_id equal to the value of videoId of the clicked link
    'click .video-links':function(event){
        var link_id = this.videoId;
        videoLink = link_id;
        videoTitle = this.link;
        localStorage.setItem("selectedVideoLink", link_id);
        localStorage.setItem("selectedVideoTitle", videoTitle);
    }
});

Template.introContent.events({
  'click'(event, instance) {
    // set the tutorial_id as the value of videoLink
    // instance.tutorial_id.get() = videoLink;
      instance.tutorial_id.set(videoLink);
      instance.tutorial_title.set(videoTitle);
  }
});

//-------------------------------------------------------
Template.variableContent.helpers({
    subTopics: function(){
        return [{
            link: 'Introduction and Usage Pt 1',
            videoId:'QuBV8CLVwkQ?rel=0',
            subTitle:'variable_short_intro',
        },{
            link: 'Variable Usage Pt 2',
            videoId:'pfcTjuOHjlY?rel=0',
            subTitle:'variable_usage_part2'
        },{
            link: 'Setup - Draw and Events',
            videoId: 'hH8ltJlzouY?rel=0',
            subTitle:'setup_draw_and_events'
        },{
            link:'Tips - Rotation',
            videoId: '-adUwF0TXdo?rel=0',
            subTitle: 'rotation_using_pushMatrix'
        }]
    }
});

Template.variableContent.onCreated(function variableOnCreated(){
    if(localStorage.getItem("selectedVideoLink")=== null || localStorage.getItem("selectedVideoLink")===  "null"){
      videoLink = 'QuBV8CLVwkQ?rel=0';
      videoTitle = 'Introduction and Usage Pt 1';
    }else{
      videoLink = localStorage.getItem("selectedVideoLink");
      videoTitle = localStorage.getItem("selectedVideoTitle");
    }
    this.tutorial_id = new ReactiveVar(videoLink);
    this.tutorial_title = new ReactiveVar(videoTitle);
});

Template.variableContent.onDestroyed(function(){
  localStorage.setItem("selectedVideoLink", null);
  localStorage.setItem("selectedVideoTitle", null);
});

Template.variableContent.helpers({
  tutorial_id() {
    return Template.instance().tutorial_id.get();
  },
  tutorial_title(){
    return Template.instance().tutorial_title.get();
  }
});


Template.variableContent.events({
    // during click event assign the value of link_id equal to the value of videoId of the clicked link
    'click .video-links':function(event){
        var link_id = this.videoId;
        videoLink = link_id;
        videoTitle = this.link;
        localStorage.setItem("selectedVideoLink", link_id);
        localStorage.setItem("selectedVideoTitle", videoTitle);
    }
});

Template.variableContent.events({
  'click'(event, instance) {
      instance.tutorial_id.set(videoLink);
      instance.tutorial_title.set(videoTitle);
  }
});
//-------------------------------------------------------
//-------------------------------------------------------
Template.conditionContent.helpers({
    subTopics: function(){
        return [{
            link: '"if" condition pt1',
            videoId:'WacqfsNWMmo?rel=0',
            subTitle:'if_condition_pt1',
        },{
            link: 'tips - rain using random',
            videoId: '7sn_2ylnc3o?rel=0',
            subTitle:'rain_using_random',
        },{
            link: 'putting rain and cloud together',
            videoId: 'XfWvAxpSUSs?rel=0',
            subTitle:'rain_and_cloud_together',
        },{
            link: 'if condition with boolean variable',
            videoId: 'FpYsjkWfx1Q?rel=0',
            subTitle: 'applying_if_with_boolean_variable',
        }]
    }
});

Template.conditionContent.onCreated(function conditionOnCreated(){
  if(localStorage.getItem("selectedVideoLink")=== null  || localStorage.getItem("selectedVideoLink")===  "null"){
    videoLink = 'BlftcdIZO6o?rel=0';
    videoTitle = '"if" condition pt1';
  }else{
    videoLink = localStorage.getItem("selectedVideoLink");
    videoTitle = localStorage.getItem("selectedVideoTitle");
  }
    this.tutorial_id = new ReactiveVar(videoLink);
    this.tutorial_title = new ReactiveVar(videoTitle);
});

Template.conditionContent.onDestroyed(function(){
  localStorage.setItem("selectedVideoLink", null);
  localStorage.setItem("selectedVideoTitle", null);
});

Template.conditionContent.helpers({
  tutorial_id() {
    return Template.instance().tutorial_id.get();
  },
  tutorial_title() {
    return Template.instance().tutorial_title.get();
  }
});


Template.conditionContent.events({
    // during click event assign the value of link_id equal to the value of videoId of the clicked link
    'click .video-links':function(event){
        var link_id = this.videoId;
        videoLink = link_id;
        videoTitle = this.link;
        // to set a value of local storage
        localStorage.setItem("selectedVideoLink", link_id);
        localStorage.setItem("selectedVideoLink", videoTitle);
    }
});

Template.conditionContent.events({
  'click'(event, instance) {
      instance.tutorial_id.set(videoLink);
      instance.tutorial_title.set(videoTitle);
  }
});
//-------------------------------------------------------
//-------------------------------------------------------
Template.loopContent.helpers({
    subTopics: function(){
        return [{
            link: 'Intro to "while" loop',
            videoId:'ksBsqash83c?rel=0',
            subTitle:'intro_to_while_loop',
        },{
            link: 'Intro to the "for" loop',
            videoId: 'qCAQPnOhXUM?rel=0',
            subTitle:'intro_to_for_loop',
        },{
            link: 'Nested while loop',
            videoId: '7v-hWHwDhRA?rel=0',
            subTitle:'nested_while_loop',
        },{
            link: 'Nested for loop',
            videoId: 'WSbh8VRAjQ4?rel=0',
            subTitle:'nested_for_loop',
        }]
    }
});

Template.loopContent.onCreated(function loopOnCreated(){
    // SET THE VIDEO SHOWN WHEN USER CLICK THE TAB
    if(localStorage.getItem("selectedVideoLink")=== null  || localStorage.getItem("selectedVideoLink")===  "null"){
      videoLink = 'ksBsqash83c?rel=0';
      videoTitle = 'Intro to "while" loop';
    }else{
      videoLink = localStorage.getItem("selectedVideoLink");
      videoTitle = localStorage.getItem("selectedVideoTitle");
    }
    this.tutorial_id = new ReactiveVar(videoLink);
    this.tutorial_title = new ReactiveVar(videoTitle);
});

Template.loopContent.onDestroyed(function(){
  localStorage.setItem("selectedVideoLink", null);
  localStorage.setItem("selectedVideoTitle", null);
});

Template.loopContent.helpers({
  tutorial_id() {
    return Template.instance().tutorial_id.get();
  },
  tutorial_title() {
    return Template.instance().tutorial_title.get();
  }
});


Template.loopContent.events({
    // during click event assign the value of link_id equal to the value of videoId of the clicked link
    'click .video-links':function(event){
        var link_id = this.videoId;
        videoLink = link_id;
        videoTitle = this.link;
        localStorage.setItem("selectedVideoLink", link_id);
        localStorage.setItem("selectedVideoTitle", videoTitle);
    }
});

Template.loopContent.events({
  'click'(event, instance) {
      instance.tutorial_id.set(videoLink);
      instance.tutorial_title.set(videoTitle);
  }
});
//-------------------------------------------------------
//-------------------------------------------------------
Template.functionContent.helpers({
    subTopics: function(){
        return [{
            link: 'Intro to functions',
            videoId:'Kmf13gsPGfo?rel=0',
            subTitle:'intro_to_function'
        },{
            link: 'Function with Parameters pt1',
            videoId: 'Nyg4wnBnPlI?rel=0',
            subTitle:'function_with_params_pt1'
        },{
        link: 'Function with Parameters pt2',
            videoId: 'mNNi1RQBofs?rel=0',
            subTitle:'function_with_params_pt2'
        },{
            link: 'Functions that Return Value pt1',
            videoId: 'dI2Mdxg5YAw?rel=0',
            subTitle:'functions_return_value1'
        },{
            link: 'Functions that Return Value pt2',
            videoId: '1QcdDSyvijs?rel=0',
            subTitle:'functions_return_value2'
        }]
    }
});

Template.functionContent.onCreated(function functionOnCreated(){
    // SET THE VIDEO SHOWN WHEN USER CLICK THE TAB
    if(localStorage.getItem("selectedVideoLink")=== null  || localStorage.getItem("selectedVideoLink")===  "null"){
      videoLink = 'Kmf13gsPGfo?rel=0';
      videoTitle = 'Intro to functions';
    }else{
      videoLink = localStorage.getItem("selectedVideoLink");
      videoTitle = localStorage.getItem("selectedVideoTitle");
    }
    this.tutorial_id = new ReactiveVar(videoLink);
    this.tutorial_title = new ReactiveVar(videoTitle);
});

Template.functionContent.onDestroyed(function(){
  localStorage.setItem("selectedVideoLink", null);
  localStorage.setItem("selectedVideoTitle", null);
});

Template.functionContent.helpers({
  tutorial_id() {
    return Template.instance().tutorial_id.get();
  },
  tutorial_title() {
    return Template.instance().tutorial_title.get();
  }
});


Template.functionContent.events({
    // during click event assign the value of link_id equal to the value of videoId of the clicked link
    'click .video-links':function(event){
        var link_id = this.videoId;
        videoLink = link_id;
        videoTitle = this.link;
        localStorage.setItem("selectedVideoLink", link_id);
        localStorage.setItem("selectedVideoTitle", videoTitle);
    }
});

Template.functionContent.events({
  'click'(event, instance) {
      instance.tutorial_id.set(videoLink);
      instance.tutorial_title.set(videoTitle);
  }
});
//-------------------------------------------------------

//-------------------------------------------------------
Template.classContent.helpers({
    subTopics: function(){
        return [{
            link: 'Class and Object Pt 1',
            videoId:'y0UyhG4AsEc?rel=0',
            subTitle:'class_and_object_1',
        },{
            link: 'Class and Object Pt 2',
            videoId:'vcVXSDdQVNE?rel=0',
            subTitle:'class_and_object_2'
        },{
            link: 'Class and Object Pt 3',
            videoId: 'T5YeIvfz3tg?rel=0',
            subTitle:'class_and_object_3'
        },{
            link:'Class and Object Pt 4',
            videoId: 'ZZy_xh_Gyuw?rel=0',
            subTitle: 'class_and_object_4'
        }]
    }
});

Template.classContent.onCreated(function classOnCreated(){
  if(localStorage.getItem("selectedVideoLink")=== null  || localStorage.getItem("selectedVideoLink")===  "null"){
    videoLink = 'y0UyhG4AsEc?rel=0';
    videoTitle = 'Class and Object Pt 1';
  }else{
    videoLink = localStorage.getItem("selectedVideoLink");
    videoTitle = localStorage.getItem("selectedVideoTitle");
  }
    this.tutorial_id = new ReactiveVar(videoLink);
    this.tutorial_title = new ReactiveVar(videoTitle);
});

Template.classContent.onDestroyed(function(){
  localStorage.setItem("selectedVideoLink", null);
  localStorage.setItem("selectedVideoTitle", null);
});

Template.classContent.helpers({
  tutorial_id() {
    return Template.instance().tutorial_id.get();
  },
  tutorial_title() {
    return Template.instance().tutorial_title.get();
  }
});


Template.classContent.events({
    // during click event assign the value of link_id equal to the value of videoId of the clicked link
    'click .video-links':function(event){
        var link_id = this.videoId;
        videoLink = link_id;
        videoTitle = this.link;
        localStorage.setItem("selectedVideoLink", link_id);
        localStorage.setItem("selectedVideoTitle", videoTitle);
    }
});

Template.classContent.events({
  'click'(event, instance) {
      instance.tutorial_id.set(videoLink);
      instance.tutorial_title.set(videoTitle);
  }
});
//-------------------------------------------------------

Template.projectContent.helpers({
    subTopics: function(){
        return [{
            // from simple drawing2 in variable section
            link:'Draw Panorama',
            videoId:'AnxXDCIDSqM?rel=0',
            subTitle:'draw_panorama',
        },{
            // from setup-draw events in variable section
            link:'Windmill Fan Rotation',
            videoId:'-adUwF0TXdo?rel=0',
            subTitle:'windmill_fan_rotation',
        },{
            // from tips-rotation in variable section
            link:'Move The Cloud',
            videoId: 'BlftcdIZO6o?rel=0',
            subTitle: 'move_the_cloud',
        }]
    }
});


Template.projectContent.onCreated(function projectOnCreated(){
  if(localStorage.getItem("selectedVideoLink")=== null  || localStorage.getItem("selectedVideoLink")===  "null"){
    videoLink = 'AnxXDCIDSqM?rel=0';
    videoTitle = 'Draw Panorama';
  }else{
    videoLink = localStorage.getItem("selectedVideoLink");
    videoTitle = localStorage.getItem("selectedVideoTitle");
  }
    this.tutorial_id = new ReactiveVar(videoLink);
    this.tutorial_title = new ReactiveVar(videoTitle);
});

Template.projectContent.onDestroyed(function(){
  localStorage.setItem("selectedVideoLink", null);
  localStorage.setItem("selectedVideoTitle", null);
});

Template.projectContent.helpers({
  tutorial_id() {
    return Template.instance().tutorial_id.get();
  },
  tutorial_title() {
    return Template.instance().tutorial_title.get();
  }
});
//Template.pointAndLine.events


Template.projectContent.events({
    // during click event assign the value of link_id equal to the value of videoId of the clicked link
    'click .video-links':function(event){
        var link_id = this.videoId;
        videoLink = link_id;
        videoTitle = this.link;
        localStorage.setItem("selectedVideoLink", link_id);
        localStorage.setItem("selectedVideoTitle", videoTitle);
    }
});

Template.projectContent.events({
  'click'(event, instance) {
    // set the tutorial_id as the value of videoLink
   //   instance.tutorial_id.get() = videoLink;
      instance.tutorial_id.set(videoLink);
      instance.tutorial_title.set(videoTitle);
  }
});
