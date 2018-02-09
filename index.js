const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens.push('Chip');
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob');
  return kittens
}



