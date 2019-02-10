let health = 100

let target = {
  health: 100,
  items: []
}

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
  let mod = 1
  for (let i = 0; target.items.length; i++) {
    var item = target.items[i];
    mod += item.modifier;
  }
  return mod;

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