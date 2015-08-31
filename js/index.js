jQuery(document).ready(function() {
	function close_accordion_section() {
		$('.accordion .accordion-section-title').removeClass('active');
		$('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}

		$('.accordion-section-title').click(function(event) {
		event.preventDefault();

		// Grabs current anchor value
		var currentAttrValue = $(this).attr('href');

		if($(event.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Adds active class to section title
			$(this).addClass('active');

			// Open up the hidden content panel
			$('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
		}

	});

$("#slideshowPC > div:gt(0)").hide();

setInterval(function() {
  $('#slideshowPC > div:first')
    .fadeOut(1500)
    .next()
    .fadeIn(1500)
    .end()
    .appendTo('#slideshowPC');
},  5000);

$("#slideshowHRC > div:gt(0)").hide();

setInterval(function() {
  $('#slideshowHRC > div:first')
    .fadeOut(1500)
    .next()
    .fadeIn(1500)
    .end()
    .appendTo('#slideshowHRC');
},  5000);

});




// var music = document.getElementById('music'); // id for audio element
// var duration; // Duration of audio clip
// var pButton = document.getElementById('pButton'); // play button
//
// var playhead = document.getElementById('playhead'); // playhead
//
// var timeline = document.getElementById('timeline'); // timeline
// // timeline width adjusted for playhead
// var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
//
// // timeupdate event listener
// music.addEventListener("timeupdate", timeUpdate, false);
//
// //Makes timeline clickable
// timeline.addEventListener("click", function (event) {
// 	moveplayhead(event);
// 	music.currentTime = duration * clickPercent(event);
// }, false);
//
// // returns click as decimal (.77) of the total timelineWidth
// function clickPercent(e) {
// 	return (e.pageX - timeline.offsetLeft) / timelineWidth;
// }
//
// // Makes playhead draggable
// playhead.addEventListener('mousedown', mouseDown, false);
// window.addEventListener('mouseup', mouseUp, false);
//
// // Boolean value so that mouse is moved on mouseUp only when the playhead is released
// var onplayhead = false;
// // mouseDown EventListener
// function mouseDown() {
// 	onplayhead = true;
// 	window.addEventListener('mousemove', moveplayhead, true);
// 	music.removeEventListener('timeupdate', timeUpdate, false);
// }
// // mouseUp EventListener
// // getting input from all mouse clicks
// function mouseUp(e) {
// 	if (onplayhead == true) {
// 		moveplayhead(e);
// 		window.removeEventListener('mousemove', moveplayhead, true);
// 		// change current time
// 		music.currentTime = duration * clickPercent(e);
// 		music.addEventListener('timeupdate', timeUpdate, false);
// 	}
// 	onplayhead = false;
// }
// // mousemove EventListener
// // Moves playhead as user drags
// function moveplayhead(e) {
// 	var newMargLeft = e.pageX - timeline.offsetLeft;
// 	if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
// 		playhead.style.marginLeft = newMargLeft + "px";
// 	}
// 	if (newMargLeft < 0) {
// 		playhead.style.marginLeft = "0px";
// 	}
// 	if (newMargLeft > timelineWidth) {
// 		playhead.style.marginLeft = timelineWidth + "px";
// 	}
// }
//
// // timeUpdate
// // Synchronizes playhead position with current point in audio
// function timeUpdate() {
// 	var playPercent = timelineWidth * (music.currentTime / duration);
// 	playhead.style.marginLeft = playPercent + "px";
// 	if (music.currentTime == duration) {
// 		pButton.className = "";
// 		pButton.className = "play";
// 	}
// }
//
// //Play and Pause
// function play() {
// 	// start music
// 	if (music.paused) {
// 		music.play();
// 		// remove play, add pause
// 		pButton.className = "";
// 		pButton.className = "pause";
// 	} else { // pause music
// 		music.pause();
// 		// remove pause, add play
// 		pButton.className = "";
// 		pButton.className = "play";
// 	}
// }
//
// // Gets audio file duration
// music.addEventListener("canplaythrough", function () {
// 	duration = music.duration;
// }, false);























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
