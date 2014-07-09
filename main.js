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

 var newQuote = function(quote, author){
//concatinate two elements into one var - creating a new <p> within the dom 
// adding author and quote
// 
 //1 way to concatenate 	
 	//var element = $("<p>" + quote + " - " + author + " <button> delete </button></p>");
 //2 way to string concatenate  (join multiple strings)
 	var $element = $("<p>").text(quote + " - " + author);
 //	
 //3 way to string concatenate
 //
 	var $button = $("<button>");
 		$button.text("delete");
 		$element.append($button);

// upon clicking delete button - hide
 		$button.on('click',function() {
 			$element.hide();

// upon selecting lastAction(Array of last inputs)
 			lastAction.push(function(){
 				$element.show();
 			})
 			
 		})

 	 $(".secondBody").append($element);
 }; 

	newQuote("hello", "world");

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