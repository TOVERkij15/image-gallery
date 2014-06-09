'use strict';

var DetailView = Backbone.View.extend({
	//bb way of setting up class outside of html.
	className: 'box',

	//template: _.template($('.image-gallery-template').text()),
	editTemplate: _.template($('.image-gallery-edit-template').text()),
	
	events: {
		
		'click': 'toGetPhoto',
		'click .save-button': "saveModel",
		'click .edit-button': "editImage"
	},

	initialize: function() {
		console.log(this.model);
	//you would put this here instead of in the render function because you render something this way and it will stay in order.		
		this.listenTo(this.model, 'change', this.render);
		$('.container').append(this.el);
		//renders immediately without being called.	
		this.render();
	},
//Rendering Templates
	
	
	render: function(){
    	var renderedTemplate = this.editTemplate(this.model.attributes)
    	this.$el.html(renderedTemplate);
	
	},

	editImage: function() {
		var renderedTemplate = this.editTemplate(this.model.attributes)
    	this.$el.html(renderedTemplate);
  	},

	saveModel: function() {

		this.model.set({
		url: this.$el.find('.value').val(),
		caption: this.$el.find('.captionInput').val()
	});

	photos.add(this.model)
		var that = this;

		this.model.save().done(function() {
		that.$el.find('.status').html('BLAH!');
		
		});
	}
});






	






















