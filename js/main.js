function shuffle(greeks) {
  greeks.sort(() => Math.random() - 0.5);
}

const greeks = [
    "alphas", 
    "ques", 
    "sigmas", 
    "kappas",
    "iota",
    "deltas",
    "akas",
    "sgrho",
    "zetas",
    "gdi"
];

shuffle(greeks);

console.log(greeks[0]);

document.getElementById('sorter').addEventListener('click', function() {

  document.querySelector('#demo').innerHTML = greeks[0];

});