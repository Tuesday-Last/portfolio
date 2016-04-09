(function(module){
  var projectVeiwer = {};
  projectVeiwer.projectListPop = function(){
    Projects.projectList = Projects.all.map(function(projects) {
        listObj = '<li class=listItem data="' + projects.title + '">' + projects.title + '</li>'
          return listObj;
    });
  };

  projectVeiwer.handleHandlebar = function (){
        var getTemplate = $('#projectTemplate').html();
        var templateToCompile = Handlebars.compile(getTemplate);
        return templateToCompile(this);
  }

  projectVeiwer.navBarHandler = function(){
    // $('#navBar').on("click", 'li', function() {
    //   $(".tab-content").hide();
    //   $("#" + $(this).data('tab')).fadeIn();
    // });
    //
    // $('#navBar, ul, li:first').click();
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
    $('#project').show().siblings().hide();
    $('#projects project').remove();
    Projects.all.forEach(function(p){
      $('#project').append(p.handleHandlebar())
    });
    projectVeiwer.navBarHandler();
    projectVeiwer.projectListPop();

  };

  module.projectVeiwer = projectVeiwer;
})(window);
