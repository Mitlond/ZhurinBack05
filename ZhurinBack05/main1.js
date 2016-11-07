(function(){
	window.App={
		Models:{},
		Viw:{},
		Collections:{}
	};
	
	

//helper �������
var template=function(id){
return _.template( $('#'+id).html());
};
//������ ��������
App.Models.Person=Backbone.Model.extend({
	defaults:{
		name: '���',
		age:40,
		job:'�������'
	}
});

var person=new App.Models.Person();
 // ������ �����
 App.Collections.People=Backbone.Collection.extend({
	 model:App.Models.Person
 )};
 //��� ������ �����
 
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
 
 // ��� ������ ��������
 App.Views.Person=Backbone.View.extend({
	 tagName:'li',
	 template:('testTemplate'),
	 
	 initialize:function(){
		 this.render();
	 },
	 render:function(){
		 //������������� ������
		 
		 this.$el.html(this.template(this.model.toJSON()));
		 return this;
	 }
 });
 
 
 		var peopleCollection = new App.Collections.People([
		{
			name: '�����',
			age: 35,
			job: '�������'
		},
		{
			name: '������',
			age: 17,
			job: '���������'
		},
		{
			name: '����',
			age:  60,
			job: '���������'
		}
		]);
		
		var peopleView = new App.Views.People({collection:peopleCollection});
		 $(document.body).append(peopleView.render().el);
		 console.log(App.Models);
}());