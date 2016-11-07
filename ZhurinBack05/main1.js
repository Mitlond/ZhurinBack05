(function(){
	window.App={
		Models:{},
		Viw:{},
		Collections:{}
	};
	
	

//helper шаблона
var template=function(id){
return _.template( $('#'+id).html());
};
//Модель человека
App.Models.Person=Backbone.Model.extend({
	defaults:{
		name: 'Ной',
		age:40,
		job:'Монолит'
	}
});

var person=new App.Models.Person();
 // Список людей
 App.Collections.People=Backbone.Collection.extend({
	 model:App.Models.Person
 )};
 //Вид списка людей
 
 App.Views.People=Backbone.View.extend({
	 tagName:'ul';
	 initialize:function(){
	 },
	 render:function(){
		 this.collection.each.(function(person){
			 var personView = new App.Views.Person({model:person});
			 
			 this.$el.append(personView.render().el);
		 }, this);
		 return this;
	 }
 });
 
 // Вид одного человека
 App.Views.Person=Backbone.View.extend({
	 tagName:'li',
	 template:('testTemplate'),
	 
	 initialize:function(){
		 this.render();
	 },
	 render:function(){
		 //замечательный шаблон
		 
		 this.$el.html(this.template(this.model.toJSON()));
		 return this;
	 }
 });
 
 
 		var peopleCollection = new App.Collections.People([
		{
			name: 'Данил',
			age: 35,
			job: 'Механик'
		},
		{
			name: 'Наташа',
			age: 17,
			job: 'студентка'
		},
		{
			name: 'Коля',
			age:  60,
			job: 'пенсионер'
		}
		]);
		
		var peopleView = new App.Views.People({collection:peopleCollection});
		 $(document.body).append(peopleView.render().el);
		 console.log(App.Models);
}());