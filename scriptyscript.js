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

  Projects.fetch = function(next) {
    if (localStorage.rawProjects) {
      Projects.load(JSON.parse(localStorage.rawProjects));
      next();
    } else {
      var newRawProjects = $.ajax({
        type: "GET",
        url: "projectHolder.json",
        success: function (data, status, xhr) {
          var stringRawProjects = JSON.stringify(data);
          localStorage.setItem("rawProjects", stringRawProjects);
          Projects.load(JSON.parse(localStorage.rawProjects))
          next()
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

  module.Projects = Projects;
})(window);
