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
    projects.push(new Projects(ele));
  })
}

Projects.renderer = function() {
  handleFilter();
  populateFilters();
  navBarHandler();
  projects.forEach(function(p){
    $('#project').append(p.toHtml())
  });
};
