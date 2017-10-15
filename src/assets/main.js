$(function() {

 $.ajax({
   url:'https://www.codeschool.com/users/3839571.json',
   dataType:'jsonp',
   success:function(response){
     var courses = response.courses.completed;
     for(var index = 0; index < courses.length; index++){
      $('#badges').append('<div><h3>' + courses[index].title + '</h3><img src="'+ courses[index].badge + '"></img><a href="'+ courses[index].url+'" target="_blank">See Course</a></div>');

     }
     $('#badges').find('div').addClass('course');
     $('#badges').find('a').addClass('btn btn-primary' );
  },
   contentType:'appliction/json'
 });
  // your code will go here

});
