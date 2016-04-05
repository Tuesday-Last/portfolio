function projectListPop (){
  Projects.projectList = Projects.all.map(function(projects) {
      listObj = '<li class=listItem data="' + projects.title + '">' + projects.title + '</li>'
        return listObj;
  });
  Projects.projectList.forEach(function(p){
    $('#projectsList').append(p)
  });
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
