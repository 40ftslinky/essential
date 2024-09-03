// vimeo-play.js

// var video = document.getElementsByClassName('video'), fraction = 0.8;

// function checkScroll() {
//     var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
//     b = y + h, //bottom
//     visibleX, visibleY, visible;

//     visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
//     visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

//     visible = visibleX * visibleY / (w * h);

//     if (visible > fraction) {
//         video.play();
//     } else {
//         video.pause();
//     }
// } checkScroll();
// window.addEventListener('scroll', checkScroll, false);
// window.addEventListener('resize', checkScroll, false);

// Video play and pause on scroll
var player = new Vimeo.Player($("#vimeo-video")[0]);

ScrollTrigger.create({
  trigger: "#vimeo-video", // can be switched to another element id or class
  start: "top center", // Adjust as necessary
  end: "bottom 30%", // Adjust as necessary
  //markers: true,  //switch this on to help visulise start and end points
  onEnter: () => {
    player.play();
    player.setMuted(false);
  },
  onLeave: () => {
    player.pause();
    player.setMuted(true);
  },
  onEnterBack: () => {
    player.play();
    player.setMuted(false);
  },
  onLeaveBack: () => {
    player.pause();
    player.setMuted(true);
  }
});