const $ = function (selector) {
  return document.querySelector(selector);
};

document.addEventListener('DOMContentLoaded', () => {
  renderKit(drums);
  addListeners(drums);
});


const drums = [
  {name: 'clap', 'dataKey': 65, key: a, src: 'assets/sounds/clap.wav'},
  {name: 'hihat', 'dataKey': 83, key: s, src: 'assets/sounds/hihat.wav'},
  {name: 'kick', 'dataKey': 68, key: d, src: 'assets/sounds/kick.wav'},
  {name: 'openhat', 'dataKey': 70, key: f, src: 'assets/sounds/openhat.wav'},
  {name: 'boom', 'dataKey': 71, key: g, src: 'assets/sounds/boom.wav'},
  {name: 'ride', 'dataKey': 72, key: h, src: 'assets/sounds/ride.wav'},
  {name: 'snare', 'dataKey': 74, key: j, src: 'assets/sounds/snare.wav'},
  {name: 'tom', 'dataKey': 75, key: k, src: 'assets/sounds/tom.wav'},
  {name: 'tink', 'dataKey': 76, key: l, src: 'assets/sounds/tink.wav'},
];

function renderKit (drums) {
  let drumkit = $('div.drumkit');

  drums.forEach(drum => {
    drumkit.innerHTML +=
      `<div class="drum ${drum.name}">
        <p>${drum.name}</p>
      </div>`;
  });
}
function addListeners(drums) {

  drums.forEach((drum) => {
    $(`div.${drum.name}`).addEventListener('click', function() {

      return new Audio(drum.src).play();
    })
  })
}