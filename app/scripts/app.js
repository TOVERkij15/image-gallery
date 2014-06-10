'use-strict';

var AppRouter = Backbone.Router.extend({

	routes:{

		""       			:"renderHome",
		"photos"  			:"renderPhotos",
		"photos/:images"	:"renderPhoto"
	},

	initialize: function(){
		console.log('router was created')
	},

	renderHome: function(){
		console.log('test')

		$('.container').html("Return Home");
	},

	renderPhotos: function(images){
		console.log('test2')

		$('.container').html("Click on any image");
	},

	renderPhoto: function(){
		console.log('test3')

		$('.container').html();
	},


});