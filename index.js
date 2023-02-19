const menuItems = document.querySelectorAll(".menu li a")
const contents = document.querySelectorAll(".content")

menuItems.forEach(clickItem => {
  clickItem.addEventListener("click",e => {
    e.preventDefault()

    menuItems.forEach(item => {
      item.classList.remove("active")
    })
    clickItem.classList.add("active")

    contents.forEach(content => {
      content.classList.remove("active")
    })

    document.getElementById(clickItem.dataset.id).classList.add("active")
  })
})