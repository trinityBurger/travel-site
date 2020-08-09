import "../styles/styles.css"
import MobileMenu from "./modules/MobileMenu"
import RevealOnScroll from "./modules/RevealOnScroll"
import StickyHeader from "./modules/StickyHeader"

let stickyHeader = new StickyHeader()
let mobileMenu = new MobileMenu()
new RevealOnScroll(document.querySelectorAll(".M-featureItem"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonialItem"), 60)

if (module.hot) {
  module.hot.accept()
}
