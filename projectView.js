(function(module){
  var projectVeiwer = {};
  projectVeiwer.projectListPop = function(){
    Projects.projectList = Projects.all.map(function(projects) {
        listObj = '<li class=listItem data="' + projects.title + '">' + projects.title + '</li>'
          return listObj;
    });
  };

  handleHandlebar = function (p){
    console.log("handle handlebars run")
    var getTemplate = Handlebars.compile($('#projectTemplate').text());
    return getTemplate(p);
  }

  projectVeiwer.navBarHandler = function(){
    $('#projectsList').hide();
    $('#projects').hover(function(){
      $('#projectsList').show();
    },
    function(){
      $('#projectsList').hide();
    })
    $('#projectsList').hover(function(){
      $('#projectsList').show();
    },
    function(){
      $('#projectsList').hide();
    })
    Projects.projectList.forEach(function(p){
      $('#projectsList').append(p)
    });
  };

  projectVeiwer.renderer = function() {
    console.log("renderer called")
    $('#project').show().siblings().hide();
    $('#projects project').remove();
    Projects.all.forEach(function(p){
      console.log('renderer sub routine')
      $('#project').append(handleHandlebar(p))
    });
    projectVeiwer.navBarHandler();
    projectVeiwer.projectListPop();

  };

  module.projectVeiwer = projectVeiwer;
})(window);
