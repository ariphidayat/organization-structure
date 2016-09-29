var data = [{
    "id": 1,
    "parent_id": 0,
    "name": "BOD"
}, {
    "id": 2,
    "parent_id": 1,
    "name": "Finance Division"
}, {
    "id": 3,
    "parent_id": 2,
    "name": "Finance Department"
}, {
    "id": 4,
    "parent_id": 2,
    "name": "Accounting Department"
}, {
    "id": 5,
    "parent_id": 1,
    "name": "Human Resource Division"
}, {
    "id": 6,
    "parent_id": 5,
    "name": "Human Resource Department"
}];

var ul = $("#container");

var buildTree = function(data) {
  for (var i = 0; i < data.length; i++) {
    var htmlStr = "<li id='" + data[i].id + "'>" + data[i].name + "</li>";
    var parent;

    if (data[i].parent_id === 0) {
      parent = ul;
    } else {
      var $elem = ul.find("li[id='" + data[i].parent_id + "']");
      if ($elem.find("ul").length == 0) {
          $elem.append("<ul>");
      }
      parent = $elem.find("ul:first");
    }

    parent.append(htmlStr);
  }
}

buildTree(data);