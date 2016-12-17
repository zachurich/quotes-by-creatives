$(document).ready(function() {
  // function for getting random color
  function colorRandomizer() {
    var randomColor= Math.floor(Math.random()*colorArr.length);
    document.querySelector('.flex-container').style.backgroundColor = "#" + colorArr[randomColor];
    document.querySelector('.button').style.color = "#" + colorArr[randomColor];
  }

  // function for getting random quotes
  function quoteRandomizer() {
    if(quoteArr.length === 1) {
      $('.text-container').addClass('comeOnIn');
      $('.quote').html("There are no more quotes <br/> at the moment. Check often for new ones!");
      $('.name').hide();
      $('.divider').hide();
      $('.button').hide();
    } else {
      $('.name').addClass('border');
      $('.text-container').addClass('comeOnIn');
        setTimeout(function() {
           $('.text-container').removeClass('comeOnIn');
        },500);
      // store length of array
      var arrLength = quoteArr.length;

      // get random number mulitplied by array length each time button clicked
      var randomNumber= Math.floor(Math.random()*arrLength);

      // loops and sets new content based on current random number
      for(var i = 0; i < arrLength; i++) {

        // get random object from array
        var quote = quoteArr[randomNumber].quote;
        var name  = quoteArr[randomNumber].name;
        var link  = quoteArr[randomNumber].link;

        // Append text content to appropriate places
        $('.quote').html("&quot;" + quote + "&quot;");
        $('.name').html(name);
        $('.link').attr('href', link);
      }

      // Based off of current randomNumber, remove that single item from the array
      quoteArr.splice(randomNumber, 1);
    }
  }

  // Call randomizers on load
  colorRandomizer();
  quoteRandomizer();

  // Click call-back functions
  $('.button').on('click', function() {
  colorRandomizer();
  quoteRandomizer();
  })

  $('.nav-button').on('click', function() {
    if($('.flex-container').hasClass('slide')) {
      $('.flex-container').removeClass('slide').addClass('slide-back');
      $('.menu').css('z-index', '-1');
    } else {
      $('.flex-container').addClass('slide').removeClass('slide-back');
      setTimeout(function() {
        $('.menu').css('z-index', '9999');
      }, 300)
    }
  })

  // Prevent Overflow scroll on mobile
  document.ontouchmove = function(event){
    event.preventDefault();
  }


});
