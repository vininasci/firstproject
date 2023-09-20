function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")
  html.classList.toggle("avatar.png")

  const img = document.querySelector("#profile img")
  const alt = document.querySelector("img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.jpg")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
