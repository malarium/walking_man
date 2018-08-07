//variables:
const done = false;
const tag = document.createElement('script');
const firstScriptTag = document.getElementsByTagName('script')[0];
let player;
let keyName;
const hero = document.querySelector(".hero");

      tag.src = "https://www.youtube.com/iframe_api";
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // This function creates an <iframe> (and YouTube player)
      // after the API code downloads.

      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '100%',
          width: '100%',
          videoId: 'FhEf14cpiZA',
          showinfo: 0,
          events: {
            'onReady': onPlayerReady
          },
          playerVars: {
            'branding': 0,
            'autoplay': 0,
            'autohide': 1,
            'controls': 0,
            'disablekb': 1,
            'loop': 1,
            'rel' : 0,
            'fs' : 0,
            'showinfo' : 0,
            'modestbranding': 1,
            'enablejsapi': 1,
            'iv_load_policy': 3
          }
        });
      }

// The API will call this function when the video player is ready and prevent from continual loading or autoplay.
      function onPlayerReady(event) {
        event.target.pauseVideo();
      }
      function pauseVideo() {
        hero.style.animationPlayState = "paused";
        player.pauseVideo();
      }
      function playVideo() {
        hero.style.animationPlayState = "running";
        player.playVideo();
      }

  function move_hero(key) {
    if (key==="a" || key==="ArrowLeft" || key==="A") {
      playVideo();
      hero.style.animationName = "play";
      hero.classList.remove("hero_back");
      hero.classList.add("hero");
    } else if (key==="d" || key === "ArrowRight" || key==="D") {
      playVideo();
      hero.style.animationName = "playBack";
      hero.classList.remove("hero");
      hero.classList.add("hero_back");
    }
  }

  window.addEventListener('keydown', (event) => {
    keyName = event.key;
    move_hero(keyName);
  })

  window.addEventListener('keyup', () => {
    pauseVideo();
  })
