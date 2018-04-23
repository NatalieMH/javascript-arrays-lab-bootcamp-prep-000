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
