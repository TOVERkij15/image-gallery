'use strict';

//Displays small views of the image
var ImageView = Backbone.View.extend({
	

	//bb way of setting up class outside of html.
	className: 'image',

	template: _.template($('.image-gallery-template').text()),



	//defaults to this.el. selector not shown.
	/*events: {
		'click': 'showDetailView'

	},*/

	//Methods//
	//Refreshes when there is a change in the model. Renders if there is a change to the container.
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
		$('.image-container').append(this.el);
		//renders immediately without being called.	
		this.render();
	},
///these lines are what edits the thumbnails and sends them to the detail view. not in general just for this project.
	//Rendering Templates
	render: function() {
		var renderedTemplate = this.template(this.model.attributes)
		this.$el.html(renderedTemplate);
	},

	showDetailView: function(){
    	console.log('should render a new DetailView')
    	detailView.remove();

    	detailView = new DetailView({model: this.model})
  	}

///this is saying I have a model and I am giving it to you.	
	//removing that instance	
});



