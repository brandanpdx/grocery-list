$(document).ready(function(event){
  $(".grocery-list").submit(function(event){
    event.preventDefault();
    var items = ["item1", "item2", "item3", "item4"]
    
    items.forEach(function(item){
      var finalList = $("input#" + item).val();
      $(".list").append("<li>" + finalList + "</li>")
      $(".list").show()

    });
  })
});




