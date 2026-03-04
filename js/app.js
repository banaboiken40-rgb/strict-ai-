let xp = 0;

document.getElementById("goalDisplay").innerText =
"Goal: " + localStorage.getItem("goal");

function completeMission(){
  xp += 50;
  document.getElementById("xpDisplay").innerText = "XP: " + xp;
}