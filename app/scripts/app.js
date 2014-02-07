define([
  'lodash',
  'jquery'
], function (_, $) {
  'use strict';

  var container;

  var generateImages = function() {
    _.each(_.range(1, 60), function(num) {
      if (num < 10) {
        num = '0' + num;
      }
      var image = $('<img class="panel" src="images/' + num + '.png"/>');
      if (num === 1) {
        image.addClass('shake');
      }
      container.append(image);
    });
  };

  var init = function() {
//    container = $('.comic');

//    generateImages();
  };

  return {
    init: init
  };
});