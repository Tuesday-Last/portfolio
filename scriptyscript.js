var projects = [];

function Projects (project) {
  this.title = project.title;
  this.image = project.image;
  this.blerb = project.blerb;
  this.address = project.address;
  projects.push(this);
};

Projects.prototype.tohtml = function() {
  var $newProject = $('projects.template').clone();

  $newProject
};

function navBarHandler (){
  $('#navBar').on("click", 'li', function() {
    $(".tab-content").hide();
    $("#" + $(this).data('tab')).fadeIn();
  });

  $('#navBar .tab:first').click(); 
};

