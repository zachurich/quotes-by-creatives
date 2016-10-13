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
      quote: "How well we communicate is determined not by how well we say things, but how well we are understood.",
      name: "Andrew Grove",
      link: "http://google.com/"
    },
    {
      quote: "Good design is obvious. Great design is transparent.",
      name: "Joe Sparano",
      link: ""
    },
    {
      quote: "Where do new ideas come from? The answer is simple: differences. Creativity comes from unlikely juxtapositions.",
      name: "Nicholas Negroponte",
      link: ""
    },
    {
      quote: "Do not seek praise. Seek criticism.",
      name: "Paul Arden",
      link: ""
    },
    {
      quote: "The goal of a designer is to listen, observe, understand, sympathize, empathize, synthesize, and glean insights that enable him or her to ‘make the invisible visible.",
      name: "Hillman Curtis",
      link: ""
    }
  ];

  // function for getting random color
  function colorRandomizer() {
    var randomColor= Math.floor(Math.random()*colorArr.length);
    document.getElementById('flex-container').style.backgroundColor = "#" + colorArr[randomColor];
    document.querySelector('.button').style.color = "#" + colorArr[randomColor];
    console.log(colorArr[randomColor]);
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
        $('.quote').html("&quot; " + quote + " &quot;");
        $('.name').html(name);
        $('.link').attr('href', link);
      }
      quoteArr.splice(randomNumber, 1);
    }
  }

  // Call randomizers on load
  colorRandomizer();
  quoteRandomizer();


  $('.button').on('click', function() {
  colorRandomizer();
  quoteRandomizer();
  // Based off of current randomNumber, remove that single item from the array
  })


});
