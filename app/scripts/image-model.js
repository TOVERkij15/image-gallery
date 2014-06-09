"use strict";
////MODEL:
//How data should look and behave.
//extend correctly sets up the prototype chain, so subclasses created with extend can be further extended and subclassed as far as you like.
var Photo = Backbone.Model.extend({
//tells backbone that mongo(database) is calling the id something else. All the instance specific data.
	idAttribute: '_id',

	defaults: {
		caption: "",
		url: ""
	},



});
///END OF MODEL

///COLLECTION:
//collection can fetch things at once and run them automatically from the server.

var PhotoCollection = Backbone.Collection.extend({
//In reference to Model
	model: Photo,
//The url links to the server. Backbone assumes you are going to get an array of objects back.
  url: 'http://tiny-pizza-server.herokuapp.com/collections/photos',


});
///END OF COLLECTION





