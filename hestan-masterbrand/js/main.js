$(function(){
	
    $(".video-hero").fitVids();

    $('.read-more').on('click', function(){

        var $offset = $('.post-grid').offset().top -135;

        $('body, html').animate({ scrollTop:$offset });

    });
	
});


var player;
var playButton = document.getElementById("play-btn");

function onYouTubePlayerAPIReady() {
  player = new YT.Player('video', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {

  playButton.addEventListener("click", function() {
    player.playVideo();
  });
  
}

function onPlayerStateChange(event) {
    var video_player = document.getElementById("video");
    if (event.data == 1){
        video_player.style.opacity = '1';
        playButton.style.opacity = '0';
    }
    if (event.data == 0){
        video_player.style.opacity = '0';
        playButton.style.opacity = '1';
        player.stopVideo();
    }
  }

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



