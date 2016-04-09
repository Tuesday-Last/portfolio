(function(module) {
  var controller = {};

  controller.about = function (){
    $('.tab-content').hide();
    $('#about-me').show();
  }
  controller.main = function(){
    Projects.fetch();
    
  }
  module.controller = controller;
})(window);
