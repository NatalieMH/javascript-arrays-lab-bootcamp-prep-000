const app = "I don't do much."
function destructivelyAppendKitten(name) {
  kittens = [...kittens,name]
} 
function destructivelyPrependKitten(name) {
  kittens = [name,...kittens]
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
function appendKitten(name) {
  var kittensnew = [...kittens,name]
  return kittensnew
}
function prependKitten(name) {
  var kittensnew = [name,...kittens]
  return kittensnew
}
function removeLastKitten() {
  var kittensnew = []
}