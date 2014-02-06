define([
  'lodash',
  'jquery'
], function (_, $) {
  'use strict';

  var container;

  var generateImages = function() {
    _.each(_.range(50), function(num) {
      var image = $('<img class="comic-panel" src="assets/images/andre_limo.jpg"/>');
      if (num === 1) {
        image.addClass('shake');
      }
//      } else {
//        image.addClass('shake-2');
//      }
      container.append(image);
    });
  };

  var init = function() {
    container = $('.comic-container');

    generateImages();
  };

  return {
    init: init
  };
});