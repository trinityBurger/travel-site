import Axios from "axios"

class ClientArea {
  constructor() {
    this.injectHTML()
    this.form = document.querySelector(".clientArea__form")
    this.field = document.querySelector(".clientArea__input")
    this.contentArea = document.querySelector(".clientArea__contentArea")
  }

  events() {
    this.form.addEventListener("submit", e => {
      e.preventDefault()
      this.sendRequest()
    })
  }

  sendRequest() {
    Axios.post(
      "https://determined-nightingale-b13020.netlify.app/.netlify/functions/secret-area",
      { password: this.field.value }
    )
      .then(response => {
        this.form.remove()
        this.contentArea.innerHTML = response.data
      })
      .catch(() => {
        this.contentArea.innerHTML = `<p class="clientArea__error">That secret phrase was incorrect</p>`
        this.field.value = ""
        this.field.focus()
      })
  }

  injectHTML() {
    document.body.insertAdjacentHTML(
      "beforeEnd",
      `
    <div class="clientArea">
    <div class="wrapper -medium">
      <h2 class="sectionTitle -blue">Secret Client Area</h2>
      <form class="clientArea__form" action="">
        <input class="clientArea__input" type="text" placeholder="Enter the secret phrase">
        <button class="btn -orange">Submit</button>
      </form>
      <div class="clientArea__contentArea"></div>
    </div>
  </div>
    `
    )
  }
}

export default ClientArea
