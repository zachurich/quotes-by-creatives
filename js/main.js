$(document).ready(function() {

  // Define our array of color values
  var colorArr = [
    "24b574",
    "d44c57",
    "3498db",
    "f1a85e",
  ];

  // Define our array of quote objects
  var quoteArr = [
    {
      quote: "As soon as you flip the switch from consumer to producer, you position yourself as an influencer.",
      name: "Sean McCabe",
      link: "https://twitter.com/seanwes"
    },
    {
      quote: "Good design is obvious. Great design is transparent.",
      name: "Joe Sparano",
      link: "http://joesparano.com/"
    },
    {
      quote: "Where do new ideas come from? The answer is simple: differences. Creativity comes from unlikely juxtapositions.",
      name: "Nicholas Negroponte",
      link: "https://twitter.com/nnegroponte"
    },
    {
      quote: "Do not seek praise. Seek criticism.",
      name: "Paul Arden",
      link: "https://twitter.com/paul_arden_"
    },
    {
      quote: "Have fun being bad when you start learning.",
      name: "Nick Fredman",
      link: "https://twitter.com/nickfredman"
    },
    {
      quote: "Creativity is not something that only a select few can tap into.",
      name: "Travis Neilson",
      link: "https://twitter.com/travisneilson"
    },
    {
      quote: "Progress and completion are two different things. Celebrate the steps you took today.",
      name: "Kyle Adams",
      link: "https://twitter.com/ItsKyleAdams"
    }
  ];

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
      $('.quote').html("There is no more knowledge <br/> to be gained at this moment.");
      $('.name').css('display', 'none');
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
        console.log('Fired!');
      }, 300)
    }
  })

  // Prevent Overflow scroll on mobile
  document.ontouchmove = function(event){
    event.preventDefault();
  }


});
