var projects = [];

function Projects (project) {
  this.title = project.title;
  this.image = project.image;
  this.blerb = project.blerb;
  this.address = project.address;
  projects.push(this);
};

Projects.prototype.toHtml = function() {
  var $newProject = $('section.template').clone();
  $newProject.removeClass('template');
  $newProject.find('#projectTitle').html(this.title);
  $newProject.find('.pImage').html(this.image);
  $newProject.find('.pBlerb').html(this.blerb);
  $newProject.find('.pAddress').html(this.address);

  return $newProject;
};

function navBarHandler (){
  $('#navBar').on('click', 'li', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('tab')).fadeIn();
  });

  $('#navBar .tab:first').click();
  console.log('navBar clicked');
};

rawProjects.forEach(function(ele) {
  projects.push(new Projects(ele));
});

projects.forEach(function(p){
  $('#project').append(p.toHtml());
});

navBarHandler();
