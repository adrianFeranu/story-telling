var total;



function getRandom(){ "use strict"; return Math.ceil(Math.random()* 20);}

function createSum(){"use strict";
		var randomNum1 = getRandom(),

			randomNum2 = getRandom();

	total =randomNum1 + randomNum2;

  $( "#question" ).text( randomNum1 + " + " + randomNum2 + "=" );  

  $("#ans").val('');

  checkInput();

}



function checkInput(){"use strict";
		var input = $("#ans").val(), 

    	slideSpeed = 200,

      hasInput = !!input, 

      valid = hasInput && input == total;

    $('#message').toggle(!hasInput);

    $('input[type=submit]').prop('disabled', !valid);  

    $('#success').toggle(valid);

    $('#fail').toggle(hasInput && !valid);

}



$(document).ready(function(){
	//create initial sum
"use strict";
	createSum();

	// On "reset button" click, generate new random sum

	$('input[type=reset]').click(createSum);

	// On user input, check value

	$( "#ans" ).keyup(checkInput);

});