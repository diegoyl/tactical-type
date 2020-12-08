window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}

function init() {
	window.scrollTo(0, 0);
	var videos = $(".vids");
	videos.each(function() {
        var mediaVideo = this;
		mediaVideo.loop = true;
    });
	console.log("setting loop=true18");

	
	
	// var slider = document.getElementById("slider");
	
	// slider.oninput = function() {
	// 	// console.log(document.getElementByClassName("vid-stack").);
	// 	var w = this.value;
	// 	// var divs = $(".vid-stack");
	// 	// divs.each(function() {
	// 	// 	var div = this;
	// 	// 	div.width = w;
	// 	// });
	// 	$(".vid-stack").width(w);
	// 	$(".vid-stack").height(w*(5/11));
	// }
	
	
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
var B = '/img/anims/B.mp4';
var C = '/img/anims/C.mp4';
var D = '/img/anims/D.mp4';
var E = '/img/anims/E.mp4';
var F = '/img/anims/F.mp4';
var G = '/img/anims/G.mp4';
var H = '/img/anims/H.mp4';
var I = '/img/anims/I.mp4';
var J = '/img/anims/J.mp4';
var K = '/img/anims/K.mp4';
var L = '/img/anims/L.mp4';
var M = '/img/anims/M.mp4';
var N = '/img/anims/N.mp4';
var O = '/img/anims/O.mp4';
var P = '/img/anims/P.mp4';
var Q = '/img/anims/Q.mp4';
var R = '/img/anims/R.mp4';
var S = '/img/anims/S.mp4';
var T = '/img/anims/T.mp4';
var U = '/img/anims/U.mp4';
var V = '/img/anims/V.mp4';
var W = '/img/anims/W.mp4';
var X = '/img/anims/X.mp4';
var Y = '/img/anims/Y.mp4';
var Z = '/img/anims/Z.mp4';
var letters = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
var letter_index = 0;
function switchLeft() {
	letter_index += -1;
	if (letter_index < 0) {
		letter_index = letter_index + 26;
	}
	var source = letters[letter_index];
	
	var t = $("#switch-vid").get(0).currentTime;
	t += .08;
	$("#switch-vid").attr("src", source); 
	$("#switch-vid").get(0).currentTime = t; 
	$("#switch-vid").get(0).play(); 
}
function switchRight() {
	console.log("switch");
	letter_index += 1;
	if (letter_index > 25) {
		letter_index = letter_index - 26;
	}
	var source = letters[letter_index];
	
	var t = $("#switch-vid").get(0).currentTime;
	t += .08;
	$("#switch-vid").attr("src", source); 
	$("#switch-vid").get(0).currentTime = t; 
	$("#switch-vid").get(0).play(); 
	
}

const forms = ["TT03", "TT07", "TT12", "TT19"];
function switchTry(form) {
	var f = forms[form];
	$("#tryitout").css("font-family", f); 
	$("#try1").removeClass("tryActive"); 

	for (i = 0; i < 4; i++) {
		if (i == form) {
			// $("#try"+i).css("background-color", "var(--green-color)"); 
			$("#try"+i).css("color", "black");
		} else {
			// $("#try"+i).css("background-color", "white"); 
			$("#try"+i).css("color", "var(--gray-color)"); 
		}	  
	}
}


$(window).scroll(function() {
	var hT = $('#fix-div').offset().top,
		hH = $('#fix-div').outerHeight(),
		wH = $(window).height(),
		wS = $(this).scrollTop();
	if (wS > (hT+hH-wH+40) && wS < (hT+hH-wH+350)){
		$("#m-happy").css("opacity", "1"); 
		$(".fix").css("font-size", "105px"); 
		$(".fix").css("font-family", "TT07"); 
		$(".fix").css("margin-top", "28px"); 		
	} else {
		$("#m-happy").css("opacity", "0"); 
		$(".fix").css("font-size", "100px"); 
		$(".fix").css("font-family", "TT03"); 
		$(".fix").css("margin-top", "34px"); 
	}
});

