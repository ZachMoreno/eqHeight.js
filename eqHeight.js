'use strict';

var eqHeight = (function () {
    var eqHeight = function() {
    	var eqRowElementSelector    = "[data-eqRow]",
    		eqColumnElementSelector = "[data-eqColumn]",
    		allEQRowElements        = document.querySelectorAll(eqRowElementSelector),
    		allEQColumnElements     = document.querySelectorAll(eqColumnElementSelector),
    		columnHeights           = [],
    		columnHeight,
    		tallestColumn;

    	eqHeight.forEach(allEQColumnElements, function(index, value) {
			columnHeight  = value.offsetWidth;
			console.log("col #" + index + ": " + columnHeight);

			columnHeights.push(columnHeight);
			tallestColumn = eqHeight.getMaxOfArray(columnHeights);
			value.style.height = tallestColumn + "px";
		});
    }

    // Todd Moto's forEach method
    eqHeight.forEach = function (array, callback, scope) {
		for (var i = 0; i < array.length; i++) {
			callback.call(scope, i, array[i]); // passes back stuff we need
		}
	}


	// Mozilla's getMaxOfArray method
	eqHeight.getMaxOfArray = function (numArray) {
		return Math.max.apply(null, numArray);
	}

    return eqHeight;
})();

eqHeight();