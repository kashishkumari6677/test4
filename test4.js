function ComputerChoice() {
  var Choice = ["rock", "paper", "scissor"]
  var rand = Math.round(Math.random() * 2)
  //   console.log(rand)
  return Choice[rand]
}
function UserChoice(k) {
  var comp = ComputerChoice()
  console.log(comp)
  if (k === "rock") {
    if (comp === "scissor") {
      alert("you won the game")
    } else {
      if (comp === k) {
        alert("draw")
      } else {
        alert("you lose the game")
      }
    }
  }
  else if (k === "paper") {
    if (comp === "rock") {
      alert("you won the game")
    } else {
      if (comp === k) {
        alert("draw")
      } else {
        alert("you lose the game")
      }
    }
  }
  else if (k === "scissor") {
    if (comp === "paper") {
      alert("you won the game")
    } else {
      if (comp === k) {
        alert("draw")
      } else {
        alert("you lose the game")
      }
    }
  }
}
