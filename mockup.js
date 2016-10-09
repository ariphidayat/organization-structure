$('.tree li:has(ul)').addClass('parent').find(' > div').attr('title', 'Collapse');
$('.tree li.parent > div').on('dblclick', function(e) {
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
