'use strict';

//Displays small views of the image
var ImageView = Backbone.View.extend({
	//bb way of setting up class outside of html.
	className: 'image',

	template: _.template($('.image-gallery-template').text()),



	//defaults to this.el. selector not shown.
	events: {
		'click': 'showDetailView'

	},

	//Methods//
	//Refreshes when there is a change in the model. Renders if there is a change to the container.
	initialize: function() {
		$('.container').append(this.el);
		this.listenTo(this.model, 'change', this.render),
		//renders immediately without being called.	
		this.render();
	},

	//Rendering Templates
	render: function() {
		var renderedTemplate = this.template(this.model.attributes)
		this.$el.html(renderedTemplate);
	},

	//console.log
	//photos=new Photos({url:})
	//coll=newPhotosCollection
	//coll.add(photos)

	showDetailView: function() {
		new DetailView({
			model: this.model
		})
	},


});
//instances
var funnyImages = new PhotoCollection();

funnyImages.fetch().done(function() {
	funnyImages.each(function(images) {
		new ImageView({
			model: images
		});
	})
});