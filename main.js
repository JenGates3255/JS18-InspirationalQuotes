$(document).on('ready', function() {
// undo last action (undo delete)
var $undo = $('.undoDelete');
 	$undo.on('click', function(){
 		if (lastAction.length){
 			var callback = lastAction.pop();    
 		// .pop- pops last index of array OFF - .shift pulls first index of array OFF 
 		// (modifies original array )
 			callback();
 		}

});
 var lastAction = [];
 var randomQuoteArray = [];



var newQuote = function(quote, author){
 //concatinate two elements into one var - creating a new <p> within the dom 
 // adding author and quote
 // 
 //1 way to concatenate 	
 	//var element = $("<p>" + quote + " - " + author + " <button> delete </button></p>");
 //2 way to string concatenate  (join multiple strings)
 	var fullQuote = quote + " -" + author;
 	var $element = $("<button>", {
 		'class': 'element',
 		'data-author': author,
 		'data-quote': quote }
 		).text(fullQuote);
 //	
 //3 way to string concatenate
 //
 //
// select author on click 
$element.on('click', function(){
	var author = $(this).attr('data-author');
	// Attribute selector: .element[attributeName="value"]
	var $quotes = $('.element[data-author="' + author + '"]');

// if author is = to 'this(clicked)'
	// for (var i = 0; i < quotes.length; i++) {
	// 		alert(quotes.eq(i).attr('data-quote'));
	// };
	var quotes = [];
	$quotes.each(function (index, element) {
		quotes.push($(element).attr('data-quote'));
	});

	console.log(quotes);
	
});
// 
// alert in seperate window
 //
 	var $button = $("<button>");
 		$button.text("delete");
 		$element.append($button);

 	// var $stars = $('<span>', { class: 'stars'});
 	// var $star =	$('<span>', { class: 'star' }).text('o');
 	    
 	//  for (var i = 0; i < 5; i++) {
 	//  	var $clone = $star.clone();
 	//  		$clone.on('click',function(){
 	//     	var prior_stars = $stars.find('.star').splice(0, i);
 	//     	$(prior_stars).addClass("selected").text('*');
 	//     });
 	//  	$stars.append($clone);
 	//  };

 	// $element.append($stars); 

 		
 // upon clicking delete button - hide
 		$button.on('click',function() {
 			$element.hide();
 			// Remove it from random quote
 			var index = randomQuoteArray.indexOf(fullQuote);
 			randomQuoteArray.splice(index, 1);
 // upon selecting lastAction(Array of last inputs)
 			lastAction.push(function(){
 				$element.show();
 				randomQuoteArray.push(fullQuote);
 			});
 		});

	// Add element to page
 	 $(".secondBody").append($element);

 	 // Add element to random array
 	 randomQuoteArray.push(fullQuote);
}; 

$('#random').on('click', function(){
	var randomQuote = randomQuoteArray[Math.floor(Math.random()*randomQuoteArray.length)];
	alert(randomQuote);
});

// 
// 
	newQuote("hello", "world");
	newQuote('My name is Zoey', 'Zoey');
	newQuote('I am black and furry', 'Zoey');

$('form').on('submit', function (event) {
	event.preventDefault();

	var $quote = $(".quote");
	var $author = $(".author");
	var quote = $quote.val();
	var author = $author.val();

	newQuote(quote, author);

	// now clear the fields
	$quote.val('');
	$author.val('');

   
});

});