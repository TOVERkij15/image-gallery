'use-strict';

var DetailView = Backbone.View.extend({
	//bb way of setting up class outside of html.
	className: 'box',

	template: _.template($('.image-gallery-template').text()),
	editTemplate: _.template($('.image-gallery-edit-template').text()),

	events: {
		
		'click': 'toGetPhoto',
		'click': 'DetailView',
		'click .save-button': "saveModel",
		'click .edit-button': "editImage",

		
    },

	initialize: function() {
	//you would put this here instead of in the render function because you render something this way and it will stay in order.		
		this.listenTo(this.model, 'change', this.render);
		$('.details-container').append(this.el);
		//renders immediately without being called.	
		this.render();
	},


//Rendering Templates
	
	render: function(){
    	var renderedTemplate = this.editTemplate(this.model.attributes)
    	this.$el.html(renderedTemplate)

	},

	editImage: function(){
    	var renderedTemplate = this.editTemplate(this.model.attributes)
    	this.$el.html(renderedTemplate)

	},
})

/*toGetPhoto: function() {
var getPhoto = new PhotoCollection();

getPhoto.get('url').done(function() {
new DetailView({model: this.model})
});
}
}*/





















/*addPhoto: function(){

	var photoInstance= new Photo();

	this.model=photoInstance
	photos.add(this.model)
	this.$el.find('input').val('');
	this.$el.find('img').attr('');

});*/


/*editImage: function(){
  
  var renderededitTemplate = this.editTemplate(this.model.attributes)
  this.$el.html(renderededitTemplate);
 },*/


//.el: types 
//put the remove button in from the remove on annotated source in bb.js
//has changed is a good example for the input


//instances
 


/*toGetPhoto: function() {
var getPhoto = new PhotoCollection();

getPhoto.get('url').done(function() {
new DetailView({model: this.model})
})
}*/






