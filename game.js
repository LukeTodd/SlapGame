let health = 100

let target = {
  health: 100,
  items: []
}

let attacks = [1, 3, 7]


let items = {
  steroids: {
    name: 'Steroids',
    modifier: 2,
    description: "Makes you strong"
  }
}

function giveSteroids() {
  target.items.push(items.steroids)
}

function addMods() {
  attacks[0] = attacks[0] * 2
  attacks[1] = attacks[1] * 2
  attacks[2] = attacks[3] * 2

}


function slap(attacks) {
  health = health - attacks;
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
  attacks = [1, 3, 7]
}

defaultDisplay()