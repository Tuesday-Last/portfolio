(function(module) {
  var controller = {};

  controller.about = function (){
    $('.tab-content').hide();
    $('#about-me').show();
  }
  controller.main = function(){
    Projects.fetch(projectVeiwer.renderer);

  }
  module.controller = controller;
})(window);
