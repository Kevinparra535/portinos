class Tabs {
  openTab(e, dataID) {
    e.preventDefault();

    let tabcontent = document.getElementsByClassName("aspects__content");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    const tablinks = document.querySelectorAll(".tabs");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(dataID).style.display = "flex";
    e.currentTarget.className += " active";
  }
}

export default Tabs;
