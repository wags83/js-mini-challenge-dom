/***** Deliverable 1 *****/
document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector("#header");
  const container = document.getElementsByClassName("player-container")[0];
  console.log("Here's your header:", header);

  /***** Deliverable 2 *****/

  header.innerHTML = `<h1 id="header" style="color: red;">Welcome to Ian's Liverpool FC Fan Club</h1>`;

  /***** Deliverable 3 *****/
  console.log("PLAYERS array looks like this:", PLAYERS);

  PLAYERS.forEach(element => {
    let playerDiv = document.createElement("div");
    playerDiv.innerHTML = `
        <div class="player" data-number="${element.name}">
        <h3>
            ${element.name} (<em>${element.nickname}</em>)
        </h3>
        <img src="${element.photo}" alt="${element.name}">
        </div>`;
    container.appendChild(playerDiv);
  });
  /***** Deliverable 4 *****/

  document.getElementsByTagName("div")[10].remove();
});
