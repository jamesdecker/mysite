jQuery(document).ready(function() {
	function close_accordion_section() {
		jQuery('.accordion .accordion-section-title').removeClass('active');
		jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-section-title').click(function(e) {

    // Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');

			// Open up the hidden content panel
			jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
		}

		event.preventDefault();
	});
});
























//   function getInput() {
//     event.preventDefault();
//     var city = $("#city-type").val();
//  // 2. defines the variable "city" by the input for ID city-type.
//
//     if (city == "New York City" || city == "NYC" || city =="nyc") {
//       $("body").removeClass();
//       $("body").addClass("nyc");
//     }
//  // 3. then runs the program, first clearing the class and then passing in a new class into "body"
//
//     else if (city == "Austin" || city =="austin") {
//       $("body").removeClass();
//       $("body").addClass("austin");
//     }
//
//     else if (city == "Los Angeles" || city =="la") {
//       $("body").removeClass();
//       $("body").addClass("la");
//     }
//
//     else if (city =="San Francisco" || city =="sf") {
//       $("body").removeClass();
//       $("body").addClass("sf");
//     }
//
//     else if (city =="Sydney" || city =="sydney") {
//       $("body").removeClass();
//       $("body").addClass("sydney");
//     }
//   }
//
//   $("#submit-btn").click(getInput);
//  // 1. On click, run the program getInput
//
// });
