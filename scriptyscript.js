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
