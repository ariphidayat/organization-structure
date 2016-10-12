var data = [
    { "id": 1, "level": 1, "parent_id": 0, "name": "Board of Director" }, 
    { "id": 2, "level": 2, "parent_id": 1, "name": "Finance Division" }, 
    { "id": 3, "level": 3, "parent_id": 2, "name": "Finance Department" }, 
    { "id": 4, "level": 3, "parent_id": 2, "name": "Sales Department" }, 
    { "id": 5, "level": 3, "parent_id": 1, "name": "HR Division" }
];

var tree = function(data, root) {
    var r, o = {};
    data.forEach(function(a) {
        a.children = o[a.id] && o[a.id].children;
        o[a.id] = a;
        if (a.parent_id === root) {
            r = a;
        } else {
            o[a.parent_id] = o[a.parent_id] || {};
            o[a.parent_id].children = o[a.parent_id].children || [];
            o[a.parent_id].children.push(a);
        }
    });
    return r;
}(data, 0);

var ul = document.createElement('ul');

[tree].forEach(function iter(level) {
    return function(a) {
        var li = document.createElement('li');
        var div = document.createElement('div');
        var ul;
        var l = level;

        this.appendChild(li);
        while (++l < a.level) {
            div.className = 'just-line';
            li.className = 'no-padding';
            li.appendChild(div);
            ul = document.createElement('ul');
            li.appendChild(ul);
            li = document.createElement('li');
            ul.appendChild(li);
            div = document.createElement('div');
        }
        var title = document.createElement('span');
        title.className = "title";
        title.appendChild(document.createTextNode(a.name));
        div.appendChild(title);
        
        var action = document.createElement('span');
        action.className = "action";
        div.appendChild(action);

        var setPosition = document.createElement('a');
        setPosition.className = "btn btn-xs glyphicon glyphicon-cog";
        setPosition.href = "position-link";

        var modify = document.createElement('a');
        modify.className = "btn btn-xs glyphicon glyphicon-edit";
        modify.href = "modify-link";
        
        var del = document.createElement('a');
        del.className = "btn btn-xs glyphicon glyphicon-trash";
        del.href = "delete-link";

        action.appendChild(setPosition);
        action.appendChild(modify);
        action.appendChild(del);
        li.appendChild(div);

        if (a.children) {
            ul = document.createElement('ul');
            li.appendChild(ul);
            a.children.forEach(iter(a.level), ul);
        }
    };
}(0), ul);

document.getElementById('tree').appendChild(ul);

$('.tree li:has(ul)').addClass('parent').find(' > div').attr('title', 'Collapse');
$('.tree li.parent > div').on('click', function(e) {
    var children = $(this).parent('li.parent').find(' > ul');
    if (children.is(":visible")) {
        children.hide('fast');
        $(this).attr('title', 'Expand');
    } else {
        children.show('fast');
        $(this).attr('title', 'Collapse');
    }
    e.stopPropagation();
});

