import Tabs from "./src/js/Tabs.js";
import MediaPlayer from "./src/js/MediaPlayer.js";

const tablinks = document.querySelectorAll(".tabs");
const playButton = document.querySelector(".play__video");
const closeButton = document.querySelector(".close__player");

const tabs = new Tabs();
const player = new MediaPlayer();

tablinks.forEach((item) => {
  item.addEventListener("click", (e) =>
    tabs.openTab(e, e.target.dataset.panel)
  );
});

playButton.addEventListener("click", player.init);
closeButton.addEventListener("click", player.stop);

document.getElementById("defaultOpen").click();
