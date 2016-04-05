(function(module){

  function Projects (project) {
    this.title = project.title;
    this.image = project.image;
    this.blerb = project.blerb;
    this.category =
    this.address = project.address;
    this.publishDate = project.publishDate;
  };

  Projects.all = [];

  Projects.prototype.toHtml = function() {
      var getTemplate = $('#projectTemplate').html();
      var templateToCompile = Handlebars.compile(getTemplate);
      return templateToCompile(this);
  };

  function navBarHandler (){
    $('#navBar').on("click", 'li', function() {
      $(".tab-content").hide();
      $("#" + $(this).data('tab')).fadeIn();
    });

    $('#navBar, ul, li:first').click();
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
  };


  Projects.fetch = function() {
    if (localStorage.rawProjects) {
      Projects.load(JSON.parse(localStorage.rawProjects));
      Projects.renderer();
    } else {
      var newRawProjects = $.ajax({
        type: "GET",
        url: "projectHolder.json",
        success: function (data, status, xhr) {
          var stringRawProjects = JSON.stringify(data);
          localStorage.setItem("rawProjects", stringRawProjects);
          Projects.load(JSON.parse(localStorage.rawProjects))
          Projects.renderer()
          console.log("AJAX call successful");
        },
        error: function(response, status, error) {
          console.log("Oops, Status: " + status + " Error:" + error);
        },
      });
    }
  };

  Projects.load = function(rawProjects) {
    rawProjects.sort(function(old, newish) {
      return (new Date(newish.publishedDate)) - (new Date(old.publishedDate));
    });

    rawProjects.forEach(function(ele) {
      Projects.all.push(new Projects(ele));
    })
  }

  Projects.projectList = [];

  Projects.renderer = function() {
    navBarHandler();
    Projects.all.forEach(function(p){
      $('#project').append(p.toHtml())
    });
    console.log("Projects.all = " + Projects.all);
    Projects.projectList = Projects.all.map(function(projects) {
        listObj = '<li class=listItem data="' + projects.title + '">' + projects.title + '</li>'
          return listObj;
    });
    Projects.projectList.forEach(function(p){
      $('#projectsList').append(p)
    });
    console.log(Projects.projectList);
  };
  module.Projects = Projects;
})(window);
