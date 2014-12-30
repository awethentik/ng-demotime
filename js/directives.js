'use strict';

/* App Module */
var myApp = angular.module('myApp', ['hmTouchEvents','cfp.hotkeys']);
/* Directives */
myApp.directive('showTouches', ['hotkeys', function(hotkeys){
	return {
		restrict: 'A',
		link: function(scope, element) {
			var timer;
			element.append('<div class="lastTouchType"></div>');
			element.append('<div class="lastTouch"></div>');
			
			scope.showTouch = function(evt){
				if(scope.demoMode){
					$('.lastTouchType').text(evt.type);
					$('.lastTouch').hide();
					$('.lastTouch').show().css({
						'top': evt.center.y,
						'left': evt.center.x
					});
					clearTimeout(timer);
					timer = setTimeout(function () {
						$('.lastTouch').fadeOut("fast");
					}, 100);
				}
			};
			scope.demoMode = false;
			hotkeys.add({
				combo: 'space+d',
				description: 'Toggle Demo Mode',
				callback: function() {
					scope.demoMode = !scope.demoMode;
					$('.lastTouchType').toggle();
				}
			});
	   }
	}
}]);