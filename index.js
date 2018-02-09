const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyappendkitten(name) {
  kittens.push('Ralph');
  return kittens
}

function destructivelyprependkitten(name) {
  kittens.unshift('Bob');
  return kittens
}



