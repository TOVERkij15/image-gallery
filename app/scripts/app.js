'use-strict';

var AppRouter = Backbone.Router.extend({

	routes:{

		""       			:"renderHome",
		"photos"  			:"renderPhotos",
		"photos/:image"		:"renderPhoto"
	},

	initialize: function(){
		console.log('router was created')
	},

	renderHome: function(){
		console.log('test')

		$('.container').html("Return Home");
	},

	renderPhotos: function(image){
		console.log('test2')

		$('.container').html("Click on any image");
	},

	//test
	/*renderPhoto:function(photos){
		console.log('profile route for',photos)
		$('.container').html('check out' + photos +  "/'s cool profile")
		/*$('.container').append ('<a href="/#photos/' + photos + '/image"> +photos +'/'s photos</a>);
	}*/
});