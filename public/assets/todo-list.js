$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var todo = JSON.stringify({item: item.val()});
      console.log(todo);

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          // location.redirect('/todo');
          window.reload();
          console.log(data);
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
