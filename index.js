// SIGN UP PAGE

var form = document.querySelector(".form")
function handleForm(event) {
  event.preventDefault()
}
form.addEventListener("submit", handleForm)

const emailText = document.querySelector(".email-text")
const emailIconError = document.querySelector("#email-icon-error")
const senhaText = document.querySelector(".senha-text")
const senhaIconError = document.querySelector("#senha-icon-error")
const confirmarSenhaText = document.querySelector(".confirmarSenha-text")
const confirmarSenhaIconError = document.querySelector(
  "#confirmarSenha-icon-error"
)


function validate(email, senha, confirmarSenha) {
  emailText.classList.remove("invalid")
  senhaText.classList.remove("invalid")
  confirmarSenhaText.classList.remove("invalid")
  emailIconError.classList.remove("invalid-icon")
  senhaIconError.classList.remove("invalid-icon")
  confirmarSenhaIconError.classList.remove("invalid-icon")

  const isvalidEmail = validateEmail(email)
  const isvalidSenha = validatePassword(senha)
  const isvalidConfirmarSenha = validateConfirmPassword(senha, confirmarSenha)

  if (! isvalidEmail) {
    emailText.classList.add("invalid")
    emailIconError.classList.add("invalid-icon")
  }
  if (!isvalidSenha) {
    senhaText.classList.add("invalid")
    senhaIconError.classList.add("invalid-icon")
  }
  if (!isvalidConfirmarSenha) {
    confirmarSenhaText.classList.add("invalid")
    confirmarSenhaIconError.classList.add("invalid-icon")
  }
  if (isvalidEmail && isvalidSenha && isvalidConfirmarSenha) {
    localStorage.setItem("email", email.value)
    localStorage.setItem("senha", senha.value)
    const address = window.location.href.replace("sign_up.html", "index.html")
    setTimeout(() => {
      window.location.replace(address)
    })
  }
}

function validateEmail(email) {
  
  const validar = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.value.match(validar)
}

function validatePassword(senha) {
  const senha1 = senha.value
  return senha1.length >= 8 
}

function validateConfirmPassword(senha, confirmarSenha) {
  const senha1 = senha.value
  const senha2 = confirmarSenha.value
  return senha1==senha2
}

// LOGIN PAGE
const emailSenhaText = document.querySelector(".email-senha-text")

function login(email, senha) {
  emailSenhaText.classList.remove("invalid")
  const emailUsuario = localStorage.getItem("email")
  const senhaUsuario = localStorage.getItem("senha")
  if (email.value != emailUsuario || senha.value != senhaUsuario) {
    emailSenhaText.classList.add("invalid")
  }
  if (email.value==emailUsuario && senha.value==senhaUsuario) {
    const address = window.location.href.replace("index.html", "main.html")
    setTimeout(() => {
      window.location.replace(address)
    })
  } 
}

// MAIN PAGE

const arrows = document.querySelectorAll(".arrow")
const movieLists = document.querySelectorAll(".movie-list")

arrows.forEach((arrow, i)=>{
  const itemNumber = movieLists[i].querySelectorAll("img").length
  let counterClick = 0
  arrow.addEventListener("click", ()=>{
    counterClick++
    if (itemNumber- (4+counterClick)>=0) {
      const result = getComputedStyle(movieLists[i]).getPropertyValue("transform")
      const matrix = new DOMMatrixReadOnly(result).m41
      movieLists[i].style.transform = `translateX(${ matrix-300
      }px)`
    } else {
      movieLists[i].style.transform = "translateX(0)"
      counterClick = 0
    }
  })
})