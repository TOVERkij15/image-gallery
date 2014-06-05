'use-strict';

var DetailView = Backbone.View.extend({
	//bb way of setting up class outside of html.
	className: 'box',

	/*template: _.template($('.image-gallery-template').text()),*/
	editTemplate: _.template($('.image-gallery-edit-template').text()),

	events: {
		
		'click': 'toGetPhoto',
		'click': 'DetailView'

	},

initialize: function() {
		$('.container').prepend(this.el);
		//renders immediately without being called.	
		this.render();
	},

//Rendering Templates
	render: function() {
		var renderededitTemplate = this.editTemplate(this.model.attributes)
		this.$el.html(renderededitTemplate);
	},

DetailView: function() {
		new DetailView({
			model: this.model
		})
	},
	

toGetPhoto: function() {
var getPhoto = new PhotoCollection();

getPhoto.get('url').done(function() {
new DetailView({model: this.model})
})
},





});

//instances
 



