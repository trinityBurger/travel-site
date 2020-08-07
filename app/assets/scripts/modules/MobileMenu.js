class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".siteHeader__menuIcon")
    this.menuContent = document.querySelector(".siteHeader__menuContent")
    this.siteHeader = document.querySelector(".siteHeader")
    this.events()
  }
  events() {
    this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
  }
  toggleTheMenu() {
    this.menuContent.classList.toggle("-isVisible")
    this.siteHeader.classList.toggle("-isExpanded")
    this.menuIcon.classList.toggle("-closeX")
  }
}

export default MobileMenu
