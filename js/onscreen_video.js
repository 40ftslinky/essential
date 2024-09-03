/*
Author: Thrive Web Designs (thrivewebdesigns.com)
Last update: 5/11/2020 by Aaron Day

Description: Plays Vimeo videos as they become visible
Vimeo player documentation: https://github.com/vimeo/player.js
*/

//Add isOnScreen function to jQuery
$.fn.isOnScreen = function(){
    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

//Load Vimeo video into target element
function thriveLoadVideo(divID,vimeoID){
    var options = {
        id: vimeoID,
        height: 600, 
        loop: true,
		title: 0,
		sidedock: 0,
		controls: 0
    };
    var player = new Vimeo.Player(divID, options);
    player.setVolume(0);

    player.on('loaded', function() {
        console.log('Video loaded');
		$('#'+divID).css('background-image','url(transparent.png)');
    });

    player.on('play', function() {
        console.log('Played video:'+divID);
    });
    player.on('pause', function() {
        console.log('paused the video:'+divID);
    });
	
	return player;
}

//Play if element is in the viewport
function thrivePlayPause(divID,thrivePlayer){
	if ($('#'+divID).isOnScreen()) {
		thrivePlayer.play();
	} else {
		thrivePlayer.pause();
	}
}
