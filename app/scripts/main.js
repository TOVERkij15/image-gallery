"use strict";
//With these instances, we are *using* the constructor.
var photos = new PhotoCollection();
var detailView;
	
photos.fetch().done(function(){
	photos.each(function(photo){
//model: tells this what it was.
	new ImageView({model:photo});
});


//first detail out of that instance and set it to the model.

 	 detailView = new DetailView({ model: photos.first()})
});



