let health = 100

function slap(val) {
  health = health - val;
  if (health < 0) {
    health = 0
  }
  document.getElementById('display-hp').innerText = health.toString()
}

function defaultDisplay() {
  health = 100
  document.getElementById('display-hp').innerText = health.toString()
}

defaultDisplay()