function generate_xp() {

  let min = 5, max = 20;

  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = { generate_xp };