let health = 100

let steroids = {
  name: 'steroids',
  modifier: 2,
  description: 'makes you strong'
}

function slap(val) {
  health = health - val;
  if (health < 0) {
    health = 0
  }
  document.getElementById('display-hp').innerText = health.toString()
}

function feed(val) {
  health = health + val;
  if (health > 100) {
    health = 100
  }
  document.getElementById('display-hp').innerText = health.toString()
}



function defaultDisplay() {
  health = 100
  document.getElementById('display-hp').innerText = health.toString()
}

defaultDisplay()