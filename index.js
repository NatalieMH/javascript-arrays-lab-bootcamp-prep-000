const app = "I don't do much."
function destructivelyAppendKitten(name) {
  kittens.push()
} 
function destructivelyPrependKitten(name) {
  kittens.unshift()
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
function appendKitten(name) {
  var kittensnew = [...kittens,name]
}
function prependKitten(name) {
  var kittensnew = [name,...kittens]
}