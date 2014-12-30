# ngDemotime (ngHammer-showTouches v2)

Combines angularJS + hammerJS + ng-hammer

This is using <a href="https://github.com/hammerjs/hammer.js/wiki/Getting-Started" target="_blank">Hammer.js (v2)</a> and <a href="http://ryanmullins.github.io/angular-hammer/" target="_blank">Angular Hammer</a> with <a href="https://angularjs.org/" target="_blank">angularJS</a>.

## Installation

Add jquery-1.10.2.min.js (before angular) *temporary
<pre class="prettyprint linenums">
&lt;script src="js/vendor/jquery-1.10.2.min.js"&gt;&lt;/script&gt;
</pre>

Add hammer.js (before angular)
<pre class="prettyprint linenums">
&lt;script src="js/vendor/hammer.js"&gt;&lt;/script&gt;
</pre>

Add ng-hammer.js (after angular)
<pre class="prettyprint linenums">
&lt;script src="js/vendor/angular-hammer.js"&gt;&lt;/script&gt;
</pre>

Add hotkeys.min.js (after angular)
<pre class="prettyprint linenums">
&lt;script src="js/vendor/hotkeys.min.js"&gt;&lt;/script&gt;
</pre>

Add CSS (colors, size &amp; opacity can be changed here)

``` css
.lastTouch {
  display: none;
  position: fixed;
  z-index: 9999;
  height: 24px;
  width: 24px;
  top: 0;
  left: 0;
  pointer-events: none;
  background: rgba(255, 0, 0, 0.8);
  border-radius: 20px;
  margin-top: -12px;
  margin-left: -12px;
}

.lastTouchType {
	position: absolute;
	z-index: 9998;
	height: 24px;
	width: 60px;
	bottom: 0;
	right: 0;
	pointer-events: none;
	background: #ececec;
}

```

## Usage

<h4>Add directive as attribute</h4>
<pre class="prettyprint linenums">
&lt;div hm-touch="showLoc($event)" hm-release="hideLoc()" show-touches&gt;&lt;/div&gt;
</pre>

Toggle on/off by using "hot key" (spacebar + d).

<h4>Directive</h4>

```javascript
'use strict';

/* App Module */
var myApp = angular.module('myApp', ['hmTouchEvents', 'cfp.hotkeys']);
/* Directives */
myApp.directive('showTouches', ['hotkeys', function(hotkeys){
	return {
		restrict: 'A',
		link: function(scope, element) {
			element.append('&lt;div class="lastTouchType"&gt;&lt;/div&gt;');
			element.append('&lt;div class="lastTouch"&gt;&lt;/div&gt;');
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
```

## Todo
Remove: <a href="http://jquery.com/" target="_blank">jQuery 1.10.2</a>

## Credits
<ul>
<li><a href="https://github.com/hammerjs/hammer.js/wiki/Getting-Started" target="_blank">Hammer.js (v2)</a></li>
<li><a href="http://ryanmullins.github.io/angular-hammer/" target="_blank">Angular Hammer</a></li>
<li><a href="http://chieffancypants.github.io/angular-hotkeys/" target="_blank">AngularHotkeys.js</a></li>
</ul>
