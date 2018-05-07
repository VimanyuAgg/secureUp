(function(jQuery){

	jQuery.hotkeys = {

		specialKeys: {
			37:"left", 38: "up", 39: "right", 40: "down"
		
		},
	};


	jQuery.each([ "keydown", "keyup", "keypress" ], function() {
		jQuery.event.special[ this ] = { add: keyHandler };
	});

})( jQuery );
