window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}

function init() {
	var videos = $(".vids");
	videos.each(function() {
        var mediaVideo = this;
		mediaVideo.loop = true;
    });
	console.log("setting loop=true18");

	
	
	var slider = document.getElementById("slider");
	
	slider.oninput = function() {
		// console.log(document.getElementByClassName("vid-stack").);
		var w = this.value;
		// var divs = $(".vid-stack");
		// divs.each(function() {
		// 	var div = this;
		// 	div.width = w;
		// });
		$(".vid-stack").width(w);
		$(".vid-stack").height(w*(5/11));
	}
	
	
	vidButton();
	var beginning = true;
	// document.getElementById("vidA").addEventListener('ended',myHandler(),false);
	function myHandler() {
		if (beginning == false) {
			console.log("ended");
			var vids = $(".vids");
			vids.each(function() {
				var mediaVideo = this;
				mediaVideo.pause();
			});
			vids.each(function() {
				var mediaVideo = this;
				mediaVideo.currentTime = 0;
			});
			vids.each(function() {
				var mediaVideo = this;
				mediaVideo.play();
			});
		} else {
			console.log("setting beg to flase");
			beginning = false;
		}
	}

	document.getElementById("vidA").addEventListener("timeupdate", () => {
		const video = document.getElementById("vidA");
		if (video.currentTime == 0) {
			myHandler();
		}
	}, true);


}

function timeButton() {
	var videos = $(".vids");
	videos.each(function() {
		var mediaVideo = this;
		mediaVideo.currentTime = 12;
	});
}



function vidButton() {
	console.log("running");
	var vids = $(".vids");
	// var time = $(".vids").get(0).currentTime;
	// console.log("T: "+time);

	vids.each(function() {
        var mediaVideo = this;
		
		if (mediaVideo.paused) {
			// mediaVideo.currentTime = time;
			// console.log(mediaVideo.currentTime);
			mediaVideo.play();
			$("#btn").removeClass("fa-play").addClass("fa-pause");
        } else {
            mediaVideo.pause();
			$("#btn").removeClass("fa-pause").addClass("fa-play");
       }
    });
}



function vidButton2() {
	console.log("running");
	var vids = $(".single-vids");

	vids.each(function() {
        var mediaVideo = this;
		
		if (mediaVideo.paused) {
			// mediaVideo.currentTime = time;
			// console.log(mediaVideo.currentTime);
			mediaVideo.play();
			$("#btn-big").removeClass("fa-play").addClass("fa-pause");
        } else {
            mediaVideo.pause();
			$("#btn-big").removeClass("fa-pause").addClass("fa-play");
       }
    });
}

var A = '/img/anims/A.mp4';
var B = '/img/anims/A.mp4';
var C = '/img/anims/A.mp4';
var D = '/img/anims/A.mp4';
var E = '/img/anims/A.mp4';
var F = '/img/anims/A.mp4';
var G = '/img/anims/A.mp4';
var H = '/img/anims/A.mp4';
var I = '/img/anims/A.mp4';
var J = '/img/anims/A.mp4';
var K = '/img/anims/A.mp4';
var L = '/img/anims/A.mp4';
var M = '/img/anims/A.mp4';
var N = '/img/anims/A.mp4';
var O = '/img/anims/A.mp4';
function switchRight() {
	$("#switch-vid").src(); 
}

