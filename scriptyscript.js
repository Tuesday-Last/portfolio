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

function renderer () {
rawProjects.forEach(function(ele) {
  projects.push(new Projects(ele));
});

projects.forEach(function(p){
  $('#project').append(p.toHtml())
});
};

navBarHandler();
Project.load = function(rawData) {
  rawProjects.sort(function(old, newish) {
    return (new Date(newish.publishedDate)) - (new Date(old.publishedDate));
  });

  rawProjects.forEach(function(ele) {
    projects.push(new Project(ele));
  })
}
Projects.fetch = function() {
  if (localStorage.rawProjects) {
    Project.load(JSON.parse(localStorage.rawProjects));
    projectView.renderPage();//(); //DONE: Change this fake method call to the correct one that will render the index page.
  } else {
    var newRawProjects = $.ajax({
      type: "GET",
      url: "projectHolder.json",
      success: function (data, status, xhr) {
        var stringRawData = JSON.stringify(data);
        localStorage.setItem("rawProjects", stringRawProjects);
        Project.load(JSON.parse(localStorage.rawProjects))
        projectView.renderPage()
        console.log("AJAX call successful");
      },
      error: function(response, status, error){
        console.log("Oops, Status:" + status + " Error:" + error);
      },
  });
