(function($){
    var typed = new Typed('span.txt-rotate', {
        strings: ["I'm a Front-End Developer", "I'm a Software Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        fadeOut: false,
        smartBackspace: true,
        loop: true
    });
})(jQuery);

var skills = {
    ht: 100,
    cs: 95,
    js: 85,
    jq: 80
  };
  
  $.each(skills, function(key, value) {
    var skillbar = $("." + key);
  
    skillbar.animate(
      {
        width: value + "%"
      },
      3000,
      function() {
        $(".speech-bubble").fadeIn();
      }
    );
  }); 
