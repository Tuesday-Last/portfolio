var projects = [];

function Projects (project) {
  this.title = project.title;
  this.image = project.image;
  this.blerb = project.blerb;
  this.address = project.address;
  this.publishDate = project.publishDate;
};

Projects.prototype.toHtml = function() {
    var getTemplate = $('#projectTemplate').html();
    var templateToCompile = Handlebars.compile(getTemplate);
    return templateToCompile(this);
    // var $newProject = $('section.template').clone();
    // $newProject.removeClass("template");
    // $newProject.find("#projectTitle").html(this.title);
    // $newProject.find(".pImage").html(this.image);
    // $newProject.find(".pBlerb").html(this.blerb);
    // $newProject.find(".pAddress").html(this.address);
    //
    // return $newProject;
};

function navBarHandler (){
  $('#navBar').on("click", 'li', function() {
    $(".tab-content").hide();
    $("#" + $(this).data('tab')).fadeIn();
  });

  $('#navBar, ul, li:first').click();
  console.log("navBar clicked");
};

rawProjects.forEach(function(ele) {
  projects.push(new Projects(ele));
})

projects.forEach(function(p){
  $('#project').append(p.toHtml())
});

navBarHandler();
