


$(document).ready(function () {


  $('#btnClick').click(function () {

    var value = $('#txtSearch').val();

    var apiKey = "Ov3svJl69Ej0oHaecJnclsHYLlDbp7dv";
    var limit = 3;

    $.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${value}&limit=${limit}`, function (response) {
      for (var i = 0; i < limit; i++) {
        $('#box').append(`<img width= '500' height= '400' src='${response.data[i].images.downsized_large.url}'>`) + "<br>";

        //to clone rating html
        var rating_template = $('.rating-container-template').clone();
        rating_template.addClass('rating-container' + i);
        rating_template.removeClass('rating-container-template');
        rating_template.removeClass('hide');

        $('#box').append(rating_template);

        circle_elements = $('.rating-circle');

        circle_elements.mouseenter(changeRatingCircles);
        circle_elements.mouseleave(resetRatingCircles);
        circle_elements.click(finalRating);
      }
      //response.data[0].images.downsized_large.url;
    });


  })

  /*circle_elements = $('.rating-circle');

  circle_elements.mouseenter(changeRatingCircles);
  circle_elements.mouseleave(resetRatingCircles);
  circle_elements.click(finalRating);*/

  var rating_array = [];
  //Changes the rating star colors when hovering over it.

  function changeRatingCircles() {

    // Current star hovered
    var circle = $(this);
    var rating_wrapper = circle.parent();
    circle_elements = rating_wrapper.find('.rating-circle');

    // Removes all colors first from all circle
    circle_elements.removeClass('rating-hover');
    circle_elements.removeClass('rating-chosen');

    // Makes the current hovered circle yellow
    circle.addClass('rating-hover');

    // Makes the previous circle yellow 
    circle.prevAll().addClass('rating-hover');

  }

  //Resets the rating circle colors when not hovered anymore.

  function resetRatingCircles() {
    circle_elements.removeClass('rating-hover');


    if (!jQuery.isEmptyObject(rating_array)) {

      $(".rating-circle").each(function (index) {
        if (rating_array[index]) {
          $(this).addClass('rating-chosen');
        }
      });
    }
  }

  function finalRating() {
    $(this).addClass('rating-chosen');
    $(this).prevAll().addClass('rating-chosen');

    rating_array = [];

    $(".rating-circle").each(function () {
      //console.log('val-- ' + !!$(this).hasClass('rating-chosen'))
      rating_array.push($(this).hasClass('rating-chosen'))
    });

    // console.log('check array is empty' + jQuery.isEmptyObject(rating_array));
  }
});