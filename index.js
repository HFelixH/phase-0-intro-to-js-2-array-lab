// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat (name) {
    cats.push(name);
}

console.log(cats)

function destructivelyAppendCat (name) {
    cats.push(name);
  }

//destructivelyAppendCat('Ralph')  
//console.log(cat//s)

  function destructivelyPrependCat (name) {
    cats.unshift(name);
  }

//destructivelyPrependCat('Bob')
//console.log(cats)

  function destructivelyRemoveLastCat () {
    cats.pop();
  }

//(destructivelyRemoveLastCat())
//console.log(cats)

function destructivelyRemoveFirstCat () {
    cats.shift();
  }

//destructivelyRemoveFirstCat()
//console.log(cats)


function appendCat (name) {
    return [...cats, name];
  }

console.log(appendCat("Broom"))


function prependCat (name) {
    return [name, ...cats];
  }

console.log(prependCat("Arnold"))


function removeFirstCat () {
    return cats.slice(1);
  }

console.log(removeFirstCat())


function removeLastCat () {
    return cats.slice(0, cats.length - 1);
  }

console.log(removeLastCat())
