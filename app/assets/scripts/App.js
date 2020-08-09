import "../styles/styles.css"
import MobileMenu from "./modules/MobileMenu"
import RevealOnScroll from "./modules/RevealOnScroll"
import StickyHeader from "./modules/StickyHeader"

new StickyHeader()
new MobileMenu()
new RevealOnScroll(document.querySelectorAll(".M-featureItem"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonialItem"), 60)
let modal

document.querySelectorAll(".openModal").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault()
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */ "./modules/Modal")
        .then(x => {
          modal = new x.default()
          setTimeout(() => modal.openTheModal(), 20)
        })
        .catch(() => console.log("there was a problem"))
    } else {
      modal.openTheModal()
    }
  })
})

if (module.hot) {
  module.hot.accept()
}
