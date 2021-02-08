const tablinks = document.querySelectorAll(".tabs");
console.log(tablinks);

tablinks.forEach((item) => {
  item.addEventListener("click", (e) => openTab(e, e.target.dataset.panel));
});

function openTab(e, dataID) {
  e.preventDefault();

  let tabcontent = document.getElementsByClassName("aspects__content");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(dataID).style.display = "flex";
  e.currentTarget.className += " active";

  console.log(dataID);
}

document.getElementById("defaultOpen").click();
