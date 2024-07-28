
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  const themeBtn = document.getElementById("theme-btn");
  const themeBtn1 = document.getElementById("theme-btn-1");
  
  themeBtn.onclick = () => {
  themeBtn.classList.toggle("fa-sun");
  if (themeBtn.classList.contains("fa-sun")) {
    document.body.classList.add("changeTheme");
    themeBtn.src="./sun.png";

  } else {
    document.body.classList.remove("changeTheme");
    themeBtn.src="./moon.png";
  }
}