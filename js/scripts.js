$(document).ready(function(event){
  $(".grocery-list").submit(function(event){
    event.preventDefault();
    var items = ["item1", "item2", "item3", "item4"]

    var groceries = []
    
    items.forEach(function(item){
      var list = $("input#" + item).val();
      groceries.push(list);
    });

    var finalList = groceries.sort()
    groceries.forEach(function(list){
      $(".list").append("<li>" + list.toUpperCase() + "</li>")
      $(".list").show()
    })
    });
  })



