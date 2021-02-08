const player = document.querySelector(".mediaPlayer");

class MediaPlayer {
  init() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    player.style.display = "block";
    console.log("open");
  }

  stop() {
    player.style.display = "none";
    console.log("stop");
  }
}

export default MediaPlayer;
