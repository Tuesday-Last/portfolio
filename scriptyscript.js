var projects = [];

function Projects (project) {
  this.title = project.title;
  this.image = project.image;
  this.blerb = project.blerb;
  this.category = 
  this.address = project.address;
  this.publishDate = project.publishDate;
};

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
};

rawProjects.forEach(function(ele) {
  projects.push(new Projects(ele));
})

projects.forEach(function(p){
  $('#project').append(p.toHtml())
});

navBarHandler();
