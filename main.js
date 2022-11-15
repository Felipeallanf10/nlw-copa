function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="bandeira do  ${player1}" title="${player1}"/>
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt=" bandeira da ${player2}" title="${player2}"/>
  </li>         
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <div class="head">
            <h2>${date} <span>${day}</span></h2>
          </div>
             <ul>
               ${games}
            </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
  "20/11", 
  "domingo", 
  createGame("catar", "13:00", "equador")) +
  createCard(
    "21/11",
    "segunda",
      createGame("inglaterra", "10:00", "ira") +
      createGame("senegal", "13:00", "holanda") +
      createGame("EUA", "16:00", "gales")
  ) +
  createCard(
    "22/11",
    "terça",
      createGame("argentina", "07:00", "arabia") +
      createGame("dinamarca", "10:00", "tunisia") +
      createGame("mexico", "13:00", "polonia") +
      createGame("frança", "16:00", "australia")
  ) +
 createCard(
  "23/11",
  "quarta",
  createGame("marrocos", "07:00", "croacia") +
  createGame("alemanha", "10:00", "japão") +
  createGame("espanha", "13:00", "costa rica") +
  createGame("belgica", "16:00", "canada")
 )