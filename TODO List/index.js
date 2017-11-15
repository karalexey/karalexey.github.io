var addNewStr = function() {
    var newStr = $('input').val();
    $('.item_of_list').append('<div class="item">' + newStr + '</div>');
    $('input').val("");
}
