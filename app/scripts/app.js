'use-strict';

var AppRouter = Backbone.Router.extend({

	routes:{

		""       			:"renderHome",
		"photos"  			:"renderPhotos",
		"photo/:id"	:"renderPhoto"
	},

	initialize: function(){
		console.log('router was created')
},


	
	renderPhoto: function(id) {
		console.log('test5')
		// photos.get(id);
		console.log(id);
		// detailInstance.remove()
		detailInstance = new DetailView({model: photos.get(id)})
	
	},

	renderHome: function(){
		console.log('test')

		$('.container').html("Return Home");
	},

	renderPhotos: function(){
		console.log('test2')

		$('.container').html("Click on any image");
	},

});