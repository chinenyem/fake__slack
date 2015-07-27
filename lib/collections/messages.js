//create a new collection for the messages database. this should be access everywhere

Messages = new Mongo.Collection("messages");
Messages.insert({greeting: "hello"}, function(){
	

});

Messages.insert({
  text: $('.input-box_text').val(),
  user: Meteor.userId(),
  timestamp: new Date()
});