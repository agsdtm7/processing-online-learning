Router.configure({
   layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function (params) {
    this.render('MenuHeader',{
      to:"appHeader"
  });

  this.render('FrontpageContent',{
      to:"appContent"
  });

  this.render('Footer',{
     to:"appFooter"
  });
//  this.render('pfsmFooter',{
//     to:"appFooter"
//  });
});

Router.route('/about', function (params) {
    this.render('MenuHeader',{
      to:"appHeader"
  });

  this.render('ContentAbout',{
      to:"appContent"
  });

  this.render('Footer',{
     to:"appFooter"
  });

});


Router.route('/admin_page', function () {
  this.render('MenuHeader',{
      to:"appHeader"
  });
  this.render('contentAdmin',{
      to:"appContent"
  });

  this.render('Footer',{
     to:"appFooter"
  });
});
// */
Router.route('/videos', function () {
  this.render('MenuHeader',{
      to:"appHeader"
  });

  this.render('introContent',{
      to:"appContent"
  });

  this.render('Footer',{
     to:"appFooter"
  });
});

//----- routing to topic called 'Intro'
Router.route('/videos/intro', function () {
  this.render('MenuHeader',{
      to:"appHeader"
  });

  this.render('introContent',{
      to:"appContent"
  });

  this.render('Footer',{
     to:"appFooter"
  });
});

// IMPORTANT PART OF ROUTING -- passing the (video) id data
Router.route('/videos/intro/:videoId', function () {
  this.render('MenuHeader',{
      to:"appHeader"
  });

  this.render('introContent',{
      to: "appContent",
      data:function(params){
          return params;     // there was an error when I put videoLink, then I tested if I put params what will happen, and it worked
      }
  });

  this.render('Footer',{
     to:"appFooter"
  });
});

//----- routing to topic called 'Variable'
Router.route('/videos/variable', function () {
  this.render('MenuHeader',{
      to:"appHeader"
  });

  this.render('variableContent',{
      to:"appContent"
  });

  this.render('Footer',{
     to:"appFooter"
  });

});

Router.route('/videos/variable/:videoId', function () {
  this.render('MenuHeader',{
      to:"appHeader"
  });

  this.render('variableContent',{
      to: "appContent",
      data: function(params){
          return params;
      }
  });

  this.render('Footer',{
     to:"appFooter"
  });
});

//----- routing to topic called 'Condition'
Router.route('/videos/condition', function () {
  this.render('MenuHeader',{
      to:"appHeader"
  });

  this.render('conditionContent',{
      to:"appContent"
  });

  this.render('Footer',{
     to:"appFooter"
  });
});

Router.route('/videos/condition/:videoId', function () {
  this.render('MenuHeader',{
      to:"appHeader"
  });

  this.render('conditionContent',{
      to: "appContent",
      data: function(params){
          return params;
      }
  });

  this.render('Footer',{
     to:"appFooter"
  });
});

//----- routing to topic called 'Loop'
Router.route('/videos/loop', function () {
  this.render('MenuHeader',{
      to:"appHeader"
  });

  this.render('loopContent',{
      to:"appContent"
  });

  this.render('Footer',{
     to:"appFooter"
  });
});

Router.route('/videos/loop/:videoId', function () {
  this.render('MenuHeader',{
      to:"appHeader"
  });

  this.render('loopContent',{
      to: "appContent",
      data: function(params){
          return params;
      }
  });

  this.render('Footer',{
     to:"appFooter"
  });
});

//-------------------------------------------

//----- routing to topic called 'Loop'
Router.route('/videos/function', function () {
  this.render('MenuHeader',{
      to:"appHeader"
  });

  this.render('functionContent',{
      to:"appContent"
  });

  this.render('Footer',{
     to:"appFooter"
  });
});

Router.route('/videos/function/:videoId', function () {
  this.render('MenuHeader',{
      to:"appHeader"
  });

  this.render('functionContent',{
      to: "appContent",
      data: function(params){
          return params;
      }
  });

  this.render('Footer',{
     to:"appFooter"
  });

});

//-------------------------------------------

//----- routing to topic called 'Class and Object'
Router.route('/videos/class_and_object', function () {
  this.render('MenuHeader',{
      to:"appHeader"
  });

  this.render('classContent',{
      to:"appContent"
  });

  this.render('Footer',{
     to:"appFooter"
  });
});

Router.route('/videos/class_and_object/:videoId', function () {
  this.render('MenuHeader',{
      to:"appHeader"
  });

  this.render('classContent',{
      to: "appContent",
      data: function(params){
          return params;
      }
  });
  this.render('Footer',{
     to:"appFooter"
  });
});

//-------------------------------------------

//----- routing to topic called 'Project'
Router.route('/videos/project', function () {
  this.render('MenuHeader',{
      to:"appHeader"
  });

  this.render('projectContent',{
      to:"appContent"
  });

  this.render('Footer',{
     to:"appFooter"
  });

});

Router.route('/videos/project/:videoId', function (params) {
  this.render('MenuHeader',{
      to:"appHeader",
      data: function(params){
        return params;
      }
  });

  this.render('projectContent',{
      to: "appContent",
      data: function(params){
          return params;
      }
  });

  this.render('Footer',{
     to:"appFooter"
  });
});
