// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
   cats.push("Ralph")
}

function destructivelyPrependCat() {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(newCats) {
    return newCats = [...cats, "Broom"]
}

function prependCat(laterCats) {
    return laterCats = ["Arnold", ...cats]
}


function removeLastCat() {
    return cats.slice(0,2)
}

function removeFirstCat() {
    return cats.slice(1)
}