$(function () {
$('#submit').on('click', function(e) {
    e.preventDefault();
    let movie = $('#title').val();
    let rating = $('#rating').val();
    $('<div class="movie-list">Movie: '+ movie + ' Rating: ' + rating + '</div>')
    .appendTo('#submitted-ratings')
    .append("<button id='remove'>Remove</button>");
    $('#submitted-ratings').on('click', 'button', function() {
        $(this).parent().remove();
    })
})
})
